# Eleanor's Cat Discovery 🐱

An interactive web app for young children to discover and learn about cats! Click on mystery boxes to reveal adorable cat pictures and fun facts.

## Features
- 8 interactive mystery boxes
- Real cat photos from The Cat API
- Fun, toddler-friendly cat facts
- Score tracking
- Celebration screen when all cats are found
- Responsive design for tablets and phones

## Live Demo
Once deployed, your app will be available at: `https://[your-app-name].azurestaticapps.net`

## Local Development
Simply open `index.html` in any web browser to run locally.

## Files
- `index.html` - Main HTML structure
- `styles.css` - All styling and animations
- `script.js` - Game logic and interactivity
- `staticwebapp.config.json` - Azure Static Web Apps configuration

## Deployment to Azure Static Web Apps

### Prerequisites
- GitHub account
- Azure account (free tier available)
- Git installed locally

### Step-by-Step Deployment Guide

#### 1. Push Code to GitHub
```bash
git init
git add .
git commit -m "Initial commit - Eleanor's Cat Discovery"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/eleanor-cat-discovery.git
git push -u origin main
```

#### 2. Create Azure Static Web App
1. Go to [Azure Portal](https://portal.azure.com)
2. Click "Create a resource"
3. Search for "Static Web App" and select it
4. Click "Create"
5. Fill in the details:
   - **Subscription**: Choose your subscription (free tier is fine)
   - **Resource Group**: Create new or select existing
   - **Name**: `eleanor-cat-discovery` (or your preferred name)
   - **Region**: Choose closest to you
   - **SKU**: Free
   - **Source**: GitHub
   - Click "Sign in with GitHub" and authorize Azure

#### 3. Configure Build Details
- **Organization**: Select your GitHub username
- **Repository**: Select `eleanor-cat-discovery`
- **Branch**: `main`
- **Build Presets**: Custom
- **App location**: `/`
- **Api location**: Leave blank
- **Output location**: Leave blank

#### 4. Review and Create
- Click "Review + create"
- Click "Create"
- Azure will automatically create a GitHub Actions workflow in your repository

#### 5. Get Your App URL
- Once deployment is complete (2-3 minutes), go to your Static Web App resource
- Find the URL (format: `https://[generated-name].azurestaticapps.net`)
- Your app is now live!

### Updating the App
Any push to the `main` branch will automatically trigger a new deployment.

## Customization
- To change the title: Edit the `<h1>` in `index.html`
- To modify cat facts: Edit the `catFacts` array in `script.js`
- To change colors: Modify the CSS in `styles.css`

## Credits
- Cat images from [The Cat API](https://thecatapi.com)
- Built with love for Eleanor 💖