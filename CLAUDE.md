# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build production bundle
- `npm run lint` - Run ESLint for code quality checks
- `npm run preview` - Preview production build locally

## Architecture Overview

This is a React-based personal portfolio website with a cyberpunk/terminal aesthetic theme. The application uses:

### Tech Stack
- **Frontend**: React 18 with Vite as build tool
- **Routing**: React Router DOM for client-side navigation
- **Styling**: CSS with cyberpunk/terminal theming

### Project Structure
- `src/App.jsx` - Main app component with routing, custom cursor, and background animations
- `src/components/Header.jsx` - Navigation header with terminal-style interface and real-time clock
- `src/pages/` - Individual page components (Home, About, Projects, Contact)
- `src/main.jsx` - React app entry point

### Key Features
- **Custom Cursor**: Interactive cursor that responds to hover states on interactive elements
- **Terminal Aesthetic**: All navigation and UI elements styled as terminal commands
- **Boot Sequence Animation**: Home page features animated terminal boot sequence
- **Real-time Elements**: Live clock in header, typewriter effects
- **Cyberpunk Theme**: Neon colors (#00ff88, #ff0088), grid backgrounds, glitch effects

### Component Patterns
- Pages use functional components with hooks (useState, useEffect)
- Terminal-style navigation with command-like labels (./home, ./whoami, etc.)
- Consistent cyberpunk styling across all components
- Animations using CSS keyframes and JavaScript timers

### Routing Structure
- `/` - Home page with boot sequence and animated introduction
- `/about` - About page (IDENTITY_MATRIX.dat)
- `/projects` - Projects showcase (CODE_ARSENAL.bin) 
- `/contact` - Contact information (TRANSMISSION.log)

The codebase follows React best practices with clean component separation and consistent theming throughout.