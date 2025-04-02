import json
import boto3
import os
import logging
import uuid
import re
from datetime import datetime

logger = logging.getLogger()
logger.setLevel(logging.INFO)

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table(os.environ.get('DYNAMODB_TABLE_NAME'))

def create_slug(title):
    """
    Create a URL-friendly slug from a title
    """
    slug = title.lower()
    slug = re.sub(r'[^a-z0-9]+', '-', slug)
    slug = slug.strip('-')
    return slug

def lambda_handler(event, context):
    logger.info(f"Received event: {json.dumps(event)}")
    
    try:
        body = json.loads(event.get('body', '{}'))
        
        if not body.get('title') or not body.get('content'):
            return {
                'statusCode': 400,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'message': 'Title and content are required fields'})
            }
        
        post_id = str(uuid.uuid4())
        
        slug = body.get('slug')
        if not slug:
            slug = create_slug(body.get('title'))

        existing_posts = table.scan(
            FilterExpression=boto3.dynamodb.conditions.Attr('slug').eq(slug)
        )
        
        if existing_posts.get('Items'):
            return {
                'statusCode': 409,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'message': 'A post with this slug already exists'})
            }
        
        timestamp = datetime.now().isoformat()
        
        post = {
            'postId': post_id,
            'slug': slug,
            'title': body.get('title'),
            'content': body.get('content'),
            'excerpt': body.get('excerpt', body.get('content')[:150] + '...' if len(body.get('content')) > 150 else body.get('content')),
            'author': body.get('author', 'Anonymous'),
            'category': body.get('category', 'Uncategorized'),
            'tags': body.get('tags', []),
            'featuredImage': body.get('featuredImage'),
            'status': body.get('status', 'published'),
            'createdAt': timestamp,
            'updatedAt': timestamp
        }
        
        response = table.put_item(Item=post)
        
        logger.info(f"Successfully created post: {post_id}")
        
        return {
            'statusCode': 201,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps(post)
        }
        
    except Exception as e:
        logger.error(f"Error creating blog post: {str(e)}")
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'message': f'Internal server error: {str(e)}'})
        }