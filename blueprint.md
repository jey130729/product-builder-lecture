# Blueprint: Modern Web App with Partnership Inquiry

## Overview
This project is a modern, responsive web application demonstrating advanced CSS techniques and interactive components. It includes a system-aware dark/light mode and a functional partnership inquiry form integrated with Formspree.

## Current Project Features
- **Modern HTML Structure:** Minimal and clean base.
- **Dark/Light Mode:** System-aware and user-togglable theme using CSS variables and `oklch` colors.
- **External CSS/JS:** Modularized styling and logic.
- **Partnership Inquiry Form:** A functional contact form for business inquiries.

## Plan: Add Partnership Inquiry Form
1. **Design the Form UI:**
   - Create a new section/card for the "Partnership Inquiry" form in `index.html`.
   - Fields: `name`, `email`, `subject`, `message`.
   - Use the Formspree endpoint: `https://formspree.io/f/xkovdvnv`.
2. **Style the Form (CSS):**
   - Apply modern styling using Cascade Layers.
   - Ensure input fields are responsive and themed (dark/light mode).
   - Add focus effects and hover transitions for a premium feel.
3. **Enhance with JavaScript:**
   - Implement AJAX submission using the `fetch` API to provide immediate feedback without page reloads.
   - Show success/error messages within the UI.
4. **Validation:**
   - Ensure all required fields are validated.
   - Verify the form works in both dark and light modes.

## Technical Details
- **CSS Baseline:** Cascade Layers, Logical Properties, Modern Color Spaces (`oklch`), Container Queries.
- **JS Features:** ES Modules, `fetch` API, `localStorage`, `matchMedia`.
- **Integration:** Formspree for backend-less form handling.
