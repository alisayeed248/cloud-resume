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

resource "aws_dynamodb_table" "blog_posts_table" {
  name = "BlogPosts"
  billing_mode = "PAY_PER_REQUEST"
  hash_key = "postId"

  attribute {
    name = "postId"
    type = "S"
  }

  attribute {
    name = "category"
    type = "S"
  }

  attribute {
    name = "createdAt"
    type = "S"
  }

  global_secondary_index {
    name = "CategoryIndex"
    hash_key = "category"
    range_key = "createdAt"
    projection_type = "ALL"
  }

  tags = {
    Name = "blog-posts-table"
    Environment = "production"
    Project = "portfolio"
  }
}

# Output values
output "website_url" {
  value = aws_s3_bucket_website_configuration.website_config.website_endpoint
}

output "blog_posts_table_name" {
  value = aws_dynamodb_table.blog_posts_table.name
}