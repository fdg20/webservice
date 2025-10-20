# 🚀 Deployment Guide: GitHub + Render

Complete step-by-step guide to deploy your Service Webpage to GitHub and Render.

---

## 📋 Prerequisites

Before you begin, make sure you have:
- ✅ Git installed on your computer
- ✅ A GitHub account (https://github.com/fdg20)
- ✅ A Render account (sign up at https://render.com)
- ✅ A MongoDB Atlas account (free tier available at https://www.mongodb.com/cloud/atlas)
- ✅ A Gmail account for email notifications

---

## Part 1: Connect to GitHub

### Step 1: Initialize Git Repository (if not already done)

Open terminal in your project directory and run:

```bash
cd "/Users/kram/Service Webpage React"
git init
```

### Step 2: Add Your GitHub Repository

1. Go to https://github.com/fdg20
2. Click on **"Repositories"** tab
3. Click **"New"** button (green button on the right)
4. Fill in repository details:
   - **Repository name**: `service-webpage-react` (or your preferred name)
   - **Description**: "AI Automation Services Website - Full Stack Application"
   - **Visibility**: Choose Public or Private
   - **DO NOT** initialize with README (we already have one)
5. Click **"Create repository"**

### Step 3: Connect Local Code to GitHub

After creating the repository, GitHub will show you commands. Run these in your terminal:

```bash
# Add remote repository
git remote add origin https://github.com/fdg20/service-webpage-react.git

# Check current git status
git status

# Add all files
git add .

# Commit your code
git commit -m "Initial commit: Service Webpage with React and Node.js"

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 4: Verify Upload

- Go to your repository: https://github.com/fdg20/service-webpage-react
- You should see all your files there!

---

## Part 2: Set Up MongoDB Atlas

### Step 1: Create Free MongoDB Database

1. Go to https://www.mongodb.com/cloud/atlas
2. Sign up or log in
3. Click **"Build a Database"**
4. Choose **"FREE"** tier (M0)
5. Select a cloud provider and region (closest to your Render region)
6. Name your cluster (e.g., "service-webpage")
7. Click **"Create"**

### Step 2: Configure Database Access

1. In MongoDB Atlas, go to **"Database Access"** (left sidebar)
2. Click **"Add New Database User"**
3. Choose **"Password"** authentication
4. Create username and secure password (save these!)
5. Set user privileges to **"Read and write to any database"**
6. Click **"Add User"**

### Step 3: Configure Network Access

1. Go to **"Network Access"** (left sidebar)
2. Click **"Add IP Address"**
3. Click **"Allow Access from Anywhere"** (for Render deployment)
   - This adds `0.0.0.0/0` to whitelist
4. Click **"Confirm"**

### Step 4: Get Connection String

1. Go to **"Database"** (left sidebar)
2. Click **"Connect"** on your cluster
3. Choose **"Connect your application"**
4. Copy the connection string (looks like):
   ```
   mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```
5. Replace `<username>` and `<password>` with your actual credentials
6. Add database name before the `?`: `/service-webpage?`
7. Final format:
   ```
   mongodb+srv://yourusername:yourpassword@cluster0.xxxxx.mongodb.net/service-webpage?retryWrites=true&w=majority
   ```

---

## Part 3: Set Up Gmail App Password

### Step 1: Enable 2-Factor Authentication

1. Go to your Google Account: https://myaccount.google.com
2. Click **"Security"** (left sidebar)
3. Enable **"2-Step Verification"** if not already enabled

### Step 2: Generate App Password

1. In Security settings, scroll to **"App passwords"**
2. Click on it (you might need to sign in again)
3. Select app: **"Mail"**
4. Select device: **"Other"** and name it "Service Webpage"
5. Click **"Generate"**
6. **IMPORTANT**: Copy the 16-character password (save it securely!)
   - Format: `xxxx xxxx xxxx xxxx`

---

## Part 4: Deploy to Render

### Step 1: Sign Up/Log In to Render

1. Go to https://render.com
2. Sign up using your GitHub account (recommended)
3. Authorize Render to access your GitHub repositories

### Step 2: Create New Web Service

1. From Render Dashboard, click **"New +"** button
2. Select **"Blueprint"** (this will use your `render.yaml` file)
3. Connect your GitHub repository:
   - Search for `service-webpage-react`
   - Click **"Connect"**

### Step 3: Configure Service

Render will detect your `render.yaml` file automatically. You'll see:
- ✅ Web Service: `repeatless-clone`
- ✅ Database: `repeatless-db` (MongoDB)

Click **"Apply"** to create the services.

### Step 4: Add Environment Variables

After services are created:

1. Click on your web service
2. Go to **"Environment"** tab
3. Add these environment variables (click **"Add Environment Variable"** for each):

| Key | Value | Example |
|-----|-------|---------|
| `NODE_ENV` | `production` | Already set |
| `MONGODB_URI` | Your MongoDB connection string | `mongodb+srv://user:pass@cluster0...` |
| `EMAIL_USER` | Your Gmail address | `your-email@gmail.com` |
| `EMAIL_PASS` | Your Gmail App Password (16 chars) | `abcd efgh ijkl mnop` |
| `ADMIN_EMAIL` | Email to receive notifications | `admin@yourcompany.com` |
| `CLIENT_URL` | Your Render app URL | Will be auto-set, or use custom domain |

4. Click **"Save Changes"**

### Step 5: Update CLIENT_URL

1. After first deployment, your service will have a URL like:
   ```
   https://repeatless-clone.onrender.com
   ```
2. Go back to **"Environment"** tab
3. Update `CLIENT_URL` with your actual Render URL
4. Click **"Save Changes"** (this will trigger a redeploy)

### Step 6: Deploy!

Render will automatically:
1. Pull your code from GitHub
2. Install dependencies (`npm install`)
3. Build the React frontend (`npm run build`)
4. Start the server (`npm start`)

You can watch the deployment logs in real-time!

---

## Part 5: Verify Deployment

### Check if Everything Works

1. **Web Service Status**: Should show "Live" (green)
2. **Database Status**: Should show "Available" (green)
3. **Open your app**: Click the URL at the top of your service page
4. **Test contact form**: Try submitting a contact form
5. **Test newsletter**: Try subscribing to the newsletter
6. **Check emails**: Verify emails are being sent

### Common Issues and Fixes

#### Build Fails
- Check if all dependencies are in `package.json`
- Verify Node.js version compatibility (>=16.0.0)

#### Database Connection Fails
- Verify MongoDB connection string format
- Check if IP whitelist includes `0.0.0.0/0`
- Confirm database user credentials

#### Emails Not Sending
- Verify Gmail App Password (no spaces)
- Check if 2FA is enabled on Gmail
- Confirm `EMAIL_USER` and `EMAIL_PASS` are correct

#### 404 on Routes
- Ensure `CLIENT_URL` matches your actual Render URL
- Check if build completed successfully

---

## Part 6: Automatic Deployments

### Enable Auto-Deploy from GitHub

Render automatically deploys when you push to GitHub:

```bash
# Make changes to your code
git add .
git commit -m "Update: description of changes"
git push origin main
```

Render will automatically:
1. Detect the push
2. Pull latest code
3. Build and redeploy
4. Zero-downtime deployment

---

## Part 7: Custom Domain (Optional)

### Add Your Own Domain

1. In Render dashboard, go to your service
2. Click **"Settings"** tab
3. Scroll to **"Custom Domain"**
4. Click **"Add Custom Domain"**
5. Enter your domain (e.g., `www.yoursite.com`)
6. Add the CNAME record to your domain provider:
   ```
   CNAME: www -> your-app.onrender.com
   ```
7. Wait for DNS propagation (can take up to 48 hours)
8. Render will automatically provision SSL certificate

---

## 📊 Monitoring Your App

### View Logs
- Go to your service in Render
- Click **"Logs"** tab
- View real-time application logs

### Monitor Performance
- Check **"Metrics"** tab for:
  - CPU usage
  - Memory usage
  - Request count
  - Response times

### Database Monitoring
- Check MongoDB Atlas dashboard
- View connections, operations, and storage

---

## 🔄 Updating Your App

### Local Development
```bash
# Make changes locally
npm run dev

# Test thoroughly
# Then commit and push
git add .
git commit -m "Feature: description"
git push origin main
```

### Render automatically redeploys on push!

---

## 🆘 Support Resources

- **Render Docs**: https://render.com/docs
- **MongoDB Atlas**: https://docs.atlas.mongodb.com/
- **Gmail App Passwords**: https://support.google.com/accounts/answer/185833
- **Project README**: See `README.md` in your repository

---

## ✅ Deployment Checklist

- [ ] Code pushed to GitHub (https://github.com/fdg20/service-webpage-react)
- [ ] MongoDB Atlas database created and configured
- [ ] Gmail App Password generated
- [ ] Render services created (Web + Database)
- [ ] Environment variables configured
- [ ] First deployment successful
- [ ] CLIENT_URL updated with actual Render URL
- [ ] Contact form tested and working
- [ ] Newsletter signup tested and working
- [ ] Emails being received
- [ ] Custom domain configured (optional)

---

## 🎉 Congratulations!

Your Service Webpage is now live at: `https://your-app-name.onrender.com`

Share it with the world! 🚀


