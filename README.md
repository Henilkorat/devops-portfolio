# Portfolio Website — AWS S3 + CloudFront (HTTPS)

A responsive single-page portfolio (Hero, About, Projects, Contact) hosted on AWS S3 and served securely over HTTPS via Amazon CloudFront.

## 🔗 Live Site
- **CloudFront URL:** https://dXXXXXXXXXXXXX.cloudfront.net
- **S3 Website Endpoint (HTTP only):** http://your-bucket-name.s3-website-<region>.amazonaws.com
- **Custom Domain (optional):** https://yourdomain.com

## 🛠 Tech Stack
- HTML5, CSS3
- Google Fonts
- Font Awesome (icons)
- AWS S3 (static hosting)
- AWS CloudFront (CDN + HTTPS)

## 📁 Project Structure
```
├── index.html
├── styles.css
├── script.js
└── README.md
```

## 🚀 Deployment Steps

### 1. Push code to GitHub
```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/yourusername/your-repo.git
git push -u origin main
```

### 2. Create and configure the S3 bucket
1. Created an S3 bucket named `your-bucket-name`
2. Unchecked "Block all public access"
3. Enabled **Static website hosting** under Properties:
   - Index document: `index.html`
   - Error document: `index.html`

### 3. Bucket policy (public read access)
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::your-bucket-name/*"
    }
  ]
}
```

### 4. Upload site files
```bash
aws s3 sync . s3://your-bucket-name --exclude ".git/*"
```

### 5. Create CloudFront distribution
- Origin: S3 static website endpoint
- Viewer protocol policy: **Redirect HTTP to HTTPS**
- Default root object: `index.html`

## ✅ Verification
- [x] S3 website endpoint loads the site (HTTP)
- [x] CloudFront URL loads the site over HTTPS
<img width="1265" height="483" alt="Screenshot 2026-07-08 110349" src="https://github.com/user-attachments/assets/1d01f7fc-878f-45ae-b1f6-de9f4fb7120c" />
