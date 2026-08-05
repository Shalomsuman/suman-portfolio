# Suman M - Professional Portfolio

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS.

## Features

- 🎨 Beautiful white, gold, and teal color scheme
- 📱 Fully responsive design
- ⚡ Fast and optimized with Vite
- 🎭 Smooth animations with Framer Motion
- 🚀 Ready for Netlify deployment

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and visit `http://localhost:5173`

## Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deploying to Netlify

### Method 1: Netlify CLI

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Login to Netlify:
```bash
netlify login
```

3. Deploy:
```bash
netlify deploy --prod
```

### Method 2: Netlify Dashboard

1. Push your code to GitHub
2. Go to [Netlify](https://app.netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub repository
5. Netlify will automatically detect the build settings from `netlify.toml`
6. Click "Deploy site"

### Method 3: Drag and Drop

1. Build the project:
```bash
npm run build
```

2. Go to [Netlify Drop](https://app.netlify.com/drop)
3. Drag and drop the `dist` folder

## Customization

- **Colors**: Edit `tailwind.config.js` to customize the color palette
- **Content**: Update the data in `src/App.jsx`
- **Fonts**: Modify the Google Fonts import in `index.html`

## Technologies Used

- React 18
- Vite
- Tailwind CSS
- Framer Motion
- React Icons

## License

© 2026 Suman M. All rights reserved.
