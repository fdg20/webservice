#!/bin/bash

# GitHub Setup Script
# This script helps you quickly push your code to GitHub

echo "🚀 GitHub Setup Script"
echo "====================="
echo ""

# Color codes
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Get repository name from user
echo -e "${BLUE}What would you like to name your GitHub repository?${NC}"
echo "Example: service-webpage-react"
read -p "Repository name: " REPO_NAME

if [ -z "$REPO_NAME" ]; then
    echo -e "${YELLOW}Using default name: service-webpage-react${NC}"
    REPO_NAME="service-webpage-react"
fi

# GitHub username
GITHUB_USER="fdg20"

echo ""
echo -e "${BLUE}Step 1: Initializing Git repository...${NC}"
git init

echo ""
echo -e "${BLUE}Step 2: Checking Git status...${NC}"
git status

echo ""
echo -e "${YELLOW}⚠️  IMPORTANT: Before continuing, please:${NC}"
echo "1. Go to https://github.com/${GITHUB_USER}"
echo "2. Click 'Repositories' tab"
echo "3. Click 'New' button"
echo "4. Create a repository named: ${REPO_NAME}"
echo "5. DO NOT initialize with README, .gitignore, or license"
echo "6. Click 'Create repository'"
echo ""
read -p "Press Enter when you've created the repository on GitHub..."

echo ""
echo -e "${BLUE}Step 3: Adding remote repository...${NC}"
git remote remove origin 2>/dev/null  # Remove if exists
git remote add origin "https://github.com/${GITHUB_USER}/${REPO_NAME}.git"

echo ""
echo -e "${BLUE}Step 4: Adding all files...${NC}"
git add .

echo ""
echo -e "${BLUE}Step 5: Creating initial commit...${NC}"
git commit -m "Initial commit: Service Webpage with React and Node.js"

echo ""
echo -e "${BLUE}Step 6: Pushing to GitHub...${NC}"
git branch -M main
git push -u origin main

echo ""
echo -e "${GREEN}✅ Success! Your code is now on GitHub!${NC}"
echo ""
echo "View your repository at:"
echo "https://github.com/${GITHUB_USER}/${REPO_NAME}"
echo ""
echo -e "${BLUE}Next Steps:${NC}"
echo "1. Open the repository URL above"
echo "2. Follow the Render deployment steps in DEPLOYMENT_GUIDE.md"
echo ""


