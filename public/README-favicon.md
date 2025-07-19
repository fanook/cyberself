# Favicon System

## Created Files

- `favicon.svg` - Main SVG favicon with ASCII robot design
- `favicon-simple.svg` - Simplified version for small sizes  
- `site.webmanifest` - Web app manifest for PWA support
- `generate-favicon.html` - HTML tool for manual PNG generation
- `create-png-icons.js` - Node.js script for batch PNG generation (requires canvas package)

## ASCII Robot Design

The favicon features a simplified version of the ASCII robot from the home page:

```
  Y   Y     <- Antennas
┌─────────┐  <- Head frame  
│ ◉ ┃ ◉ │  <- Eyes with center divider
│   <   │  <- Mouth
└─────────┘  <- Bottom frame
```

## Colors
- Background: `#0a0a0a` (dark)
- Robot: `#00ff88` (cyberpunk green)

## Browser Support
- Modern browsers: SVG favicon
- Legacy browsers: Falls back to SVG as PNG
- iOS devices: Uses main SVG as touch icon
- Android/PWA: Defined in manifest

## Manual PNG Generation
If you need PNG versions:
1. Open `generate-favicon.html` in browser
2. Right-click canvas and save as PNG
3. Use online converters for ICO format if needed

## PWA Features
- Theme color: `#00ff88`
- App name: "yifanook - Digital Architect"
- Standalone display mode