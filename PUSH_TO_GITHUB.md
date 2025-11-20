# Push to GitHub - Instructions

## Step 1: Create Repository on GitHub
1. Go to https://github.com/new
2. Create a new repository (e.g., `wellness-questionnaire`)
3. **DO NOT** initialize with README, .gitignore, or license
4. Click "Create repository"

## Step 2: Push to GitHub
After creating the repository, run these commands:

```bash
# Add the remote repository (replace YOUR_USERNAME and REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

## Alternative: Using SSH
If you prefer SSH:

```bash
git remote add origin git@github.com:YOUR_USERNAME/REPO_NAME.git
git branch -M main
git push -u origin main
```

## What's Included
- ✅ All source code files
- ✅ Next.js configuration
- ✅ Tailwind CSS setup
- ✅ All components and pages
- ✅ Question data
- ✅ Proper .gitignore file

