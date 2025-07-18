# Project Structure

## Root Level
- `index.html` - Main HTML entry point
- `package.json` - Dependencies and scripts
- `vite.config.js` - Vite configuration
- `src/` - Source code directory

## Source Organization

### Main Application Files
- `src/main.jsx` - Application entry point with React root
- `src/App.jsx` - Main app component with routing and global effects
- `src/App.css` - Global styles and animations
- `src/index.css` - Base CSS imports

### Components Directory (`src/components/`)
- Reusable UI components
- Each component has its own `.jsx` and `.css` files
- Example: `Header.jsx` + `Header.css`

### Pages Directory (`src/pages/`)
- Route-level components representing different pages
- Files: `Home.jsx`, `About.jsx`, `Projects.jsx`, `Contact.jsx`
- Each page implements the cyberpunk theme consistently

## Naming Conventions
- Components use PascalCase (e.g., `Header.jsx`)
- CSS files match component names (e.g., `Header.css`)
- Pages are named after routes
- Use descriptive, clear names that reflect functionality

## Architecture Patterns
- Single Page Application (SPA) with client-side routing
- Component-based architecture with React
- Separation of concerns: components, pages, and styles
- Global state managed through React hooks in App.jsx
- CSS animations and effects defined in component-specific stylesheets