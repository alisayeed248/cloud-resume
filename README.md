# Cloud Resume - Serverless Portfolio

A modern, serverless portfolio website built with React and AWS, featuring a blog system and complete CI/CD pipeline. This project demonstrates full-stack development skills, cloud architecture, and DevOps practices.

## 🏗️ Architecture

This application follows a serverless architecture pattern using AWS services:

- **Frontend**: React SPA hosted on S3 with CloudFront distribution
- **Backend**: AWS Lambda functions with API Gateway
- **Database**: DynamoDB for blog post storage
- **Infrastructure**: Terraform for Infrastructure as Code
- **CI/CD**: GitHub Actions for automated deployment

## 🛠️ Tech Stack

### Frontend
- **React 19** with Vite
- **Tailwind CSS** 
- **Framer Motion** 
- **React Router** 
- **TipTap Editor** (for rich text blog editing)

### Backend
- **AWS Lambda** (Python) 
- **API Gateway** 
- **DynamoDB** 
- **S3** for static website hosting and asset hosting

### Infrastructure & DevOps
- **Terraform** 
- **GitHub Actions** 
- **AWS CloudFront** 
- **Route 53** 

### Additional Features
- Admin authentication system
- Blog management with rich text editor
- Responsive design with mobile navigation
- Terminal boot animation
- Scroll progress indicator
- Visitor counter

## 🚀 Running Locally

### Prerequisites
- Node.js 18+
- AWS CLI configured (for deployment)
- Terraform (for infrastructure)

### Frontend Development
```bash
# Clone the repository
git clone https://github.com/alisayeed248/cloud-resume.git
cd cloud-resume

# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

### Environment Variables
Create a `.env` file in the frontend directory:
```env
VITE_API_BASE_URL=your-api-gateway-url
```

## 🏗️ Deployment

### Infrastructure Setup
This project requires AWS infrastructure to be provisioned first:

1. **DynamoDB Tables**:
   - `blog-posts-dev`
   - `blog-posts-prod`

2. **Lambda Functions**:
   - `blog-get-all-posts`
   - `blog-get-post-by-slug`
   - `blog-create-post`

3. **API Gateway** with appropriate routes and CORS configuration

4. **S3 Bucket** for static hosting with CloudFront distribution

### Automated Deployment
The project includes GitHub Actions workflow for automated deployment:

```yaml
# Triggers on push to dev branch
# Builds React app
# Deploys infrastructure with Terraform
# Syncs files to S3
# Invalidates CloudFront cache
```

### Manual Deployment
```bash
# Build the frontend
cd frontend
npm run build

# Deploy infrastructure
cd ../terraform
terraform init
terraform plan
terraform apply

# Sync to S3
aws s3 sync frontend/dist s3://your-bucket-name --delete
```

## 🔧 Configuration

### AWS Services Configuration
- **Lambda Functions**: Python 3.9+ runtime with appropriate IAM roles
- **DynamoDB**: Tables with partition key `postId` and GSI on `slug`
- **API Gateway**: REST API with CORS enabled for frontend domain
- **S3**: Static website hosting with public read access

### Required AWS Permissions
The deployment requires IAM permissions for:
- S3 bucket management
- Lambda function deployment
- DynamoDB table access
- API Gateway configuration
- CloudFront distribution management

## 📁 Project Structure

```
cloud-resume/
├── frontend/                 # React application
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/           # Page components
│   │   ├── admin/           # Admin dashboard
│   │   └── services/        # API service layer
│   └── public/              # Static assets
├── backend/
│   └── lambdas/             # AWS Lambda functions
│       ├── getAllPosts/
│       ├── getPostBySlug/
│       └── createPost/
├── terraform/               # Infrastructure as Code
└── .github/workflows/       # CI/CD pipeline
```

## 🎯 Key Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Blog System**: Full CRUD operations with rich text editor
- **Admin Panel**: Protected routes with JWT authentication
- **Performance**: Optimized with lazy loading and code splitting

## 🔐 Security

- JWT-based authentication for admin access
- CORS configuration for API security
- Input validation and sanitization
- Secure environment variable handling

## 📊 Performance Features

- Static site generation for fast loading
- CloudFront CDN for global distribution
- Optimized images and lazy loading

## 🚧 Self-Deployment Notes

To deploy this project yourself:

1. **AWS Account Setup**: Ensure you have AWS credentials configured
2. **Infrastructure**: Create required AWS resources (DynamoDB, Lambda, API Gateway)
3. **Environment Configuration**: Update environment variables for your endpoints
4. **Domain Setup**: Configure your own domain in CloudFront and Route 53
5. **Secrets Management**: Set up GitHub secrets for automated deployment

## 📝 License

MIT License - see [LICENSE](LICENSE) for details.

## 🤝 Contributing

This is a personal portfolio project, but feedback and suggestions are welcome! Feel free to open issues or reach out.

---

**Live Demo**: https://sayeedali.com  
**Author**: Sayeed Ali  
