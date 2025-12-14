# Modern Portfolio

A modern, minimalist black and white portfolio built with React, TypeScript, and Vite.

## Features

- ✨ Modern black and white design
- 🌟 Twinkling stars background effect
- 📱 Fully responsive
- ⚡ Fast performance with Vite
- 🎯 Smooth scrolling with Lenis
- 🎨 Cool visual effects (glow, thunder, spotlight)
- 📚 ScrollStack for achievements section
- 🔍 ChromaGrid for projects section

## Tech Stack

- **Framework:** React 18 with TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Smooth Scrolling:** Lenis
- **Icons:** Lucide React

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

This project is configured for deployment on Vercel:

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Vite framework
3. Build command: `npm run build`
4. Output directory: `dist`

## Project Structure

```
src/
├── components/          # React components
│   ├── Hero.tsx        # Hero section with typing animation
│   ├── About.tsx       # About section
│   ├── Skills.tsx      # Skills section
│   ├── Projects.tsx    # Projects with ChromaGrid effect
│   ├── Achievements.tsx # Achievements with ScrollStack
│   ├── Education.tsx   # Education section
│   ├── Contact.tsx     # Contact section
│   ├── Navigation.tsx  # Navigation bar
│   ├── SimpleStars.tsx # Background stars effect
│   ├── ScrollStack.tsx # Stacking scroll effect
│   └── ChromaGrid.tsx  # Spotlight reveal effect
├── App.tsx             # Main app component
├── main.tsx           # Entry point
└── index.css          # Global styles
```

## Effects

- **SimpleStars:** Twinkling background stars with mouse interaction
- **ScrollStack:** Cards that stack and scale during scroll
- **ChromaGrid:** Spotlight reveal effect on project cards
- **Smooth Scrolling:** Lenis for buttery smooth scrolling
- **Glow Effects:** Enhanced hover states with glowing borders
- **Thunder Effects:** Lightning sweep animations

## License

MIT License - feel free to use this project for your own portfolio!