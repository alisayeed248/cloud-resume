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
data "aws_dynamodb_table" "blog_posts_table" {
  name = "BlogPosts"
}

# IAM role for Lambda functions
resource "aws_iam_role" "lambda_role" {
  name = "blog_lambda_role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = "sts:AssumeRole"
        Effect = "Allow"
        Principal = {
          Service = "lambda.amazonaws.com"
        }
      }
    ]
  })
}

# Check if the policy already exists
data "aws_iam_role_policy" "existing_lambda_policy" {
  role = data.aws_iam_role.lambda_role.name
  name = "blog_lambda_policy"
  
  # This will fail silently if the policy doesn't exist
  depends_on = [data.aws_iam_role.lambda_role]
}

# Policy for Lambda to access DynamoDB and CloudWatch logs
resource "aws_iam_role_policy" "lambda_policy" {
  count = data.aws_iam_role_policy.existing_lambda_policy.policy == null ? 1 : 0

  name = "blog_lambda_policy"
  role = aws_iam_role.lambda_role.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = [
          "dynamodb:GetItem",
          "dynamodb:PutItem",
          "dynamodb:UpdateItem",
          "dynamodb:DeleteItem",
          "dynamodb:Scan",
          "dynamodb:Query"
        ]
        Effect   = "Allow"
        Resource = [
          data.aws_dynamodb_table.blog_posts_table.arn,
          "${data.aws_dynamodb_table.blog_posts_table.arn}/index/*"
        ]
      },
      {
        Action = [
          "logs:CreateLogGroup",
          "logs:CreateLogStream",
          "logs:PutLogEvents"
        ]
        Effect   = "Allow"
        Resource = "arn:aws:logs:*:*:*"
      }
    ]
  })
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
resource "aws_lambda_function" "get_all_posts" {
  function_name    = "blog-get-all-posts"
  role             = data.aws_iam_role.lambda_role.arn
  handler          = "lambda_function.lambda_handler"
  filename         = data.archive_file.get_all_posts_zip.output_path
  source_code_hash = data.archive_file.get_all_posts_zip.output_base64sha256
  runtime          = "python3.9"
  
  environment {
    variables = {
      DYNAMODB_TABLE_NAME = data.aws_dynamodb_table.blog_posts_table.name
    }
  }
}

# Output values
output "website_url" {
  value = aws_s3_bucket_website_configuration.website_config.website_endpoint
}

output "blog_posts_table_name" {
  value = data.aws_dynamodb_table.blog_posts_table.name
}