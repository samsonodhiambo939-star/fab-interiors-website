@echo off
setlocal enabledelayedexpansion

echo ============================================
echo  Push FAB INTERIORS to GitHub
echo ============================================
echo.

:: Ask for GitHub username
set /p GH_USER="Enter your GitHub username: "
set /p GH_REPO="Enter repo name [fab-interiors-website]: "
if "!GH_REPO!"=="" set GH_REPO=fab-interiors-website

echo.
echo Step 1: Go to https://github.com/new in your browser
echo   - Repository name: !GH_REPO!
echo   - Description: FAB INTERIORS website - interior design and construction Nairobi
echo   - Public (recommended for Cloudflare Pages)
echo   - DO NOT initialize with README, .gitignore, or license
echo   - Click "Create repository"
echo.
pause

echo.
echo Step 2: Pushing to GitHub...
powershell -ExecutionPolicy Bypass -Command "cd /d \"%~dp0\" && git remote add origin https://github.com/%GH_USER%/%GH_REPO%.git && git push -u origin master"
if errorlevel 1 (
    echo.
    echo Push failed! Common fixes:
    echo   - Make sure you created the repo on GitHub first
    echo   - For auth: use a Personal Access Token instead of password
    echo     Create one at: https://github.com/settings/tokens
    echo   - Then run: git remote set-url origin https://YOUR_TOKEN@github.com/%GH_USER%/%GH_REPO%.git
    echo   - Then run this script again
    pause
    exit /b 1
)

echo.
echo ============================================
echo  SUCCESS! Code pushed to GitHub
echo ============================================
echo.
echo Step 3: Connect Cloudflare Pages to GitHub
echo   Go to: https://dash.cloudflare.com/5a76fd8823e7338269b377e870b2b069/pages
echo   Click "fab-interiors" project
echo   Go to Settings ^> Build configuration
echo   Under "Git integration", click "Connect to Git"
echo   Select your repo (%GH_REPO%)
echo   Branch: master
echo   Framework: None (static upload)
echo   Build command: npm run build
echo   Build output: out
echo   Root directory: /
echo   Click "Save"
echo.
echo Now every time you push to GitHub, it auto-deploys!
echo.
pause
