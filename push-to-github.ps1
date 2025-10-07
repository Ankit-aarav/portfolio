# PowerShell script to push portfolio to GitHub
# Make sure Git is installed before running this script

Write-Host "Setting up Git repository..." -ForegroundColor Green

# Initialize git repository if not already initialized
if (-not (Test-Path ".git")) {
    git init
    Write-Host "Git repository initialized" -ForegroundColor Yellow
}

# Configure git user (replace with your actual details)
Write-Host "Configuring Git user..." -ForegroundColor Green
git config user.name "Ankit Sahu"
git config user.email "sahuankit5737@gmail.com"

# Add remote origin
Write-Host "Adding remote repository..." -ForegroundColor Green
git remote remove origin 2>$null  # Remove if exists
git remote add origin https://github.com/Ankit-aarav/portfolio.git

# Add all files
Write-Host "Adding files to staging..." -ForegroundColor Green
git add .

# Commit changes
Write-Host "Committing changes..." -ForegroundColor Green
git commit -m "Initial commit - Ankit Sahu Portfolio with dark theme and professional design"

# Push to GitHub
Write-Host "Pushing to GitHub..." -ForegroundColor Green
git branch -M main
git push -u origin main

Write-Host "Portfolio successfully pushed to GitHub!" -ForegroundColor Green
Write-Host "Repository URL: https://github.com/Ankit-aarav/portfolio" -ForegroundColor Cyan