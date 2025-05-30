provider "aws" {
  region = "us-east-1"
}

# Use data source to reference existing bucket
data "aws_s3_bucket" "website_bucket" {
  bucket = "sayeedali-resumesite-prod"
}

# Disable block public access settings for this specific bucket
resource "aws_s3_bucket_public_access_block" "website_access" {
  bucket = data.aws_s3_bucket.website_bucket.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

# Set bucket ownership controls
resource "aws_s3_bucket_ownership_controls" "website_ownership" {
  bucket = data.aws_s3_bucket.website_bucket.id

  rule {
    object_ownership = "BucketOwnerPreferred"
  }
}

# Make the bucket ACL public-read
resource "aws_s3_bucket_acl" "website_bucket_acl" {
  depends_on = [
    aws_s3_bucket_public_access_block.website_access,
    aws_s3_bucket_ownership_controls.website_ownership
  ]

  bucket = data.aws_s3_bucket.website_bucket.id
  acl    = "public-read"
}

# Bucket configuration for website hosting
resource "aws_s3_bucket_website_configuration" "website_config" {
  bucket = data.aws_s3_bucket.website_bucket.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "index.html"
  }
}

# Bucket policy that allows public access
resource "aws_s3_bucket_policy" "website_policy" {
  depends_on = [aws_s3_bucket_public_access_block.website_access]

  bucket = data.aws_s3_bucket.website_bucket.id
  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid       = "PublicReadGetObject"
        Effect    = "Allow"
        Principal = "*"
        Action    = "s3:GetObject"
        Resource  = "${data.aws_s3_bucket.website_bucket.arn}/*"
      }
    ]
  })
}

# DynamoDB table for blog posts
data "aws_dynamodb_table" "blog_posts_dev" {
  name = "blog-posts-dev"
}

data "aws_dynamodb_table" "blog_posts_prod" {
  name = "blog-posts-prod"
}

# Create a directory for temporary files if it doesn't exist
resource "local_file" "temp_dir" {
  content     = ""
  filename    = "${path.module}/files/.keep"
  directory_permission = "0755"
}

# Create zip archive for the Lambda function
data "archive_file" "get_all_posts_zip" {
  type = "zip"
  source_dir = "${path.module}/../backend/lambdas/getAllPosts"
  output_path = "${path.module}/files/get_all_posts.zip"

  depends_on = [local_file.temp_dir]
}

# Lambda function that gets all posts
data "aws_lambda_function" "get_all_posts" {
  function_name    = "blog-get-all-posts"
}

# Output values for resources
output "website_url" {
  value = aws_s3_bucket_website_configuration.website_config.website_endpoint
}

output "blog_posts_table_name" {
  value = data.aws_dynamodb_table.blog_posts_prod.name
}