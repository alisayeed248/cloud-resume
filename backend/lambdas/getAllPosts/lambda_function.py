import json
import os
import boto3
from boto3.dynamodb.conditions import Key


def lambda_handler(event, context):
    try:
        dynamodb = boto3.resource("dynamodb")
        table = dynamodb.Table(os.environ["DYNAMODB_TABLE_NAME"])
        response = table.scan()

        return {
            "statusCode": 200,
            "headers": {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            "body": json.dumps(
                {"posts": response.get("Items", []), "count": response.get("Count", 0)}
            ),
        }
    except Exception as e:
        print(f"Error fetching posts: {str(e)}")

        return {
            "statusCode": 500,
            "headers": {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            "body": json.dumps({"message": "Error fetching posts"}),
        }
