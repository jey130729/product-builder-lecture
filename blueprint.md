# Blueprint: Theme Toggle Support (Dark/Light Mode)

## Overview
This project is a simple web application designed to demonstrate modern web standards. This update adds a system-aware and user-togglable Dark/Light mode functionality, enhancing usability and visual appeal.

## Current Project Features
- **Modern HTML Structure:** Minimal and clean base.
- **External CSS/JS:** Modularized styling and logic.
- **Git Integration:** Version control and automated deployment ready.

## Plan: Add Dark/Light Mode
1. **Define CSS Variables:**
   - Use `:root` for light theme defaults (background, text, accent colors).
   - Use `[data-theme='dark']` to override variables for dark mode.
   - Use `oklch` for modern, perceptually uniform colors.
2. **Implement Toggle UI:**
   - Add a visually appealing toggle button in `index.html`.
   - Use modern CSS (e.g., `:has()`, Container Queries if applicable) for styling.
3. **Develop Logic in `main.js`:**
   - Detect system theme preference initially.
   - Handle button click to switch themes.
   - Persist user preference in `localStorage`.
4. **Validation & Deployment:**
   - Verify visual consistency across themes.
   - Commit and push changes to trigger deployment.

## Technical Details
- **CSS Baseline:** Cascade Layers, Logical Properties, Modern Color Spaces (`oklch`).
- **JS Features:** ES Modules, `localStorage`, `matchMedia`.
