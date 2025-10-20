@echo off
REM GitHub Setup Script for Windows
REM This script helps you quickly push your code to GitHub

echo.
echo ========================================
echo    GitHub Setup Script
echo ========================================
echo.

REM Get repository name from user
set /p REPO_NAME="What would you like to name your GitHub repository? (default: service-webpage-react): "
if "%REPO_NAME%"=="" set REPO_NAME=service-webpage-react

REM GitHub username
set GITHUB_USER=fdg20

echo.
echo [Step 1] Initializing Git repository...
git init

echo.
echo [Step 2] Checking Git status...
git status

echo.
echo ========================================
echo IMPORTANT: Before continuing, please:
echo ========================================
echo 1. Go to https://github.com/%GITHUB_USER%
echo 2. Click 'Repositories' tab
echo 3. Click 'New' button
echo 4. Create a repository named: %REPO_NAME%
echo 5. DO NOT initialize with README, .gitignore, or license
echo 6. Click 'Create repository'
echo.
pause

echo.
echo [Step 3] Adding remote repository...
git remote remove origin 2>nul
git remote add origin "https://github.com/%GITHUB_USER%/%REPO_NAME%.git"

echo.
echo [Step 4] Adding all files...
git add .

echo.
echo [Step 5] Creating initial commit...
git commit -m "Initial commit: Service Webpage with React and Node.js"

echo.
echo [Step 6] Pushing to GitHub...
git branch -M main
git push -u origin main

echo.
echo ========================================
echo    Success! Your code is now on GitHub!
echo ========================================
echo.
echo View your repository at:
echo https://github.com/%GITHUB_USER%/%REPO_NAME%
echo.
echo Next Steps:
echo 1. Open the repository URL above
echo 2. Follow the Render deployment steps in DEPLOYMENT_GUIDE.md
echo.
pause


