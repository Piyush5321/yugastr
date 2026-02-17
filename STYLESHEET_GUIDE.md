# Unified Modern Light Theme Stylesheet Guide

## Overview
This is a comprehensive, modern CSS stylesheet designed for a multi-page web project. It provides a consistent, professional light theme across all pages with smooth animations, responsive design, and accessibility features.

## Quick Start

### 1. Link the Stylesheet
Add this to the `<head>` of every HTML file:
```html
<link rel="stylesheet" href="styles.css">
```

### 2. Basic HTML Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page Title</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <nav class="navbar">
    <div class="navbar-container">
      <div class="navbar-brand">YugaStr</div>
      <button class="navbar-toggle" id="navToggle">☰</button>
      <ul class="navbar-menu" id="navMenu">
        <li><a href="home.html" class="navbar-link">Home</a></li>
        <li><a href="support/support.html" class="navbar-link">Support</a></li>
        <li><a href="#" class="navbar-link">Logout</a></li>
      </ul>
    </div>
  </nav>

  <main>
    <!-- Your content here -->
  </main>

  <footer class="footer">
    <!-- Footer content -->
  </footer>
</body>
</html>
```

## Color Palette

### Primary Colors
- **Primary**: `#4f46e5` (Indigo)
- **Primary Light**: `#6366f1`
- **Primary Lighter**: `#e0e7ff`
- **Primary Dark**: `#4338ca`

### Semantic Colors
- **Success**: `#10b981` (Green)
- **Warning**: `#f59e0b` (Amber)
- **Danger**: `#ef4444` (Red)
- **Info**: `#3b82f6` (Blue)

### Backgrounds
- **Primary**: `#ffffff` (White)
- **Secondary**: `#f8fafc` (Light Gray)
- **Tertiary**: `#f1f5f9` (Lighter Gray)

### Text
- **Primary**: `#1e293b` (Dark Gray)
- **Secondary**: `#64748b` (Medium Gray)
- **Muted**: `#94a3b8` (Light Gray)

## Component Usage

### Buttons

#### Primary Button
```html
<button class="btn btn-primary">Click Me</button>
```

#### Secondary Button
```html
<button class="btn btn-secondary">Secondary</button>
```

#### Outline Button
```html
<button class="btn btn-outline">Outline</button>
```

#### Danger Button
```html
<button class="btn btn-danger">Delete</button>
```

#### Success Button
```html
<button class="btn btn-success">Save</button>
```

#### Button Sizes
```html
<button class="btn btn-primary btn-sm">Small</button>
<button class="btn btn-primary">Normal</button>
<button class="btn btn-primary btn-lg">Large</button>
```

#### Full Width Button
```html
<button class="btn btn-primary btn-block">Full Width</button>
```

### Forms

#### Basic Form Group
```html
<div class="form-group">
  <label for="email">Email Address</label>
  <input type="email" id="email" placeholder="Enter your email">
</div>
```

#### Form with Validation
```html
<div class="form-group">
  <label for="username">Username</label>
  <input type="text" id="username" class="is-valid" placeholder="Username">
  <div class="form-success">Username is available!</div>
</div>

<div class="form-group">
  <label for="password">Password</label>
  <input type="password" id="password" class="is-invalid" placeholder="Password">
  <div class="form-error">Password must be at least 8 characters</div>
</div>
```

#### Textarea
```html
<div class="form-group">
  <label for="message">Message</label>
  <textarea id="message" placeholder="Write your message..."></textarea>
</div>
```

### Cards

#### Basic Card
```html
<div class="card">
  <div class="card-header">
    <h3>Card Title</h3>
  </div>
  <div class="card-body">
    <p>Card content goes here...</p>
  </div>
  <div class="card-footer">
    <button class="btn btn-primary">Action</button>
  </div>
</div>
```

### Badges

```html
<span class="badge badge-primary">Primary</span>
<span class="badge badge-success">Success</span>
<span class="badge badge-danger">Danger</span>
<span class="badge badge-warning">Warning</span>
<span class="badge badge-info">Info</span>
```

### Alerts

```html
<div class="alert alert-primary">
  <span>ℹ️</span>
  <div>This is an informational alert</div>
</div>

<div class="alert alert-success">
  <span>✓</span>
  <div>Operation completed successfully!</div>
</div>

<div class="alert alert-danger">
  <span>✕</span>
  <div>An error occurred. Please try again.</div>
</div>

<div class="alert alert-warning">
  <span>⚠</span>
  <div>Please review before proceeding</div>
</div>
```

## Layout Classes

### Container
```html
<div class="container">
  <!-- Max width 1200px, centered -->
</div>

<div class="container-lg">
  <!-- Max width 1400px -->
</div>

<div class="container-sm">
  <!-- Max width 800px -->
</div>
```

### Grid Layouts
```html
<!-- 2 Column Grid (responsive) -->
<div class="grid grid-2">
  <div class="card">Item 1</div>
  <div class="card">Item 2</div>
</div>

<!-- 3 Column Grid -->
<div class="grid grid-3">
  <div class="card">Item 1</div>
  <div class="card">Item 2</div>
  <div class="card">Item 3</div>
</div>

<!-- 4 Column Grid -->
<div class="grid grid-4">
  <div class="card">Item 1</div>
  <div class="card">Item 2</div>
  <div class="card">Item 3</div>
  <div class="card">Item 4</div>
</div>
```

### Flexbox Layouts
```html
<!-- Basic Flex -->
<div class="flex">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

<!-- Centered Flex -->
<div class="flex flex-center">
  <div>Centered Content</div>
</div>

<!-- Space Between -->
<div class="flex flex-between">
  <div>Left</div>
  <div>Right</div>
</div>

<!-- Column Direction -->
<div class="flex flex-col">
  <div>Top</div>
  <div>Bottom</div>
</div>
```

## Text Utilities

### Text Alignment
```html
<p class="text-left">Left aligned</p>
<p class="text-center">Center aligned</p>
<p class="text-right">Right aligned</p>
```

### Text Colors
```html
<p class="text-primary">Primary color</p>
<p class="text-secondary">Secondary color</p>
<p class="text-muted">Muted color</p>
<p class="text-success">Success color</p>
<p class="text-danger">Danger color</p>
<p class="text-warning">Warning color</p>
```

### Text Styles
```html
<p class="text-bold">Bold text</p>
<p class="text-semibold">Semibold text</p>
<p class="text-sm">Small text</p>
<p class="text-lg">Large text</p>
<p class="text-xl">Extra large text</p>
```

## Spacing Utilities

### Margin Top
```html
<div class="mt-0">No margin</div>
<div class="mt-1">4px margin</div>
<div class="mt-2">8px margin</div>
<div class="mt-3">12px margin</div>
<div class="mt-4">16px margin</div>
<div class="mt-5">20px margin</div>
<div class="mt-6">24px margin</div>
```

### Margin Bottom
```html
<div class="mb-0">No margin</div>
<div class="mb-1">4px margin</div>
<div class="mb-2">8px margin</div>
<!-- ... and so on -->
```

### Padding
```html
<div class="p-0">No padding</div>
<div class="p-1">4px padding</div>
<div class="p-2">8px padding</div>
<!-- ... and so on -->
```

## Animations

### Built-in Animations
```html
<!-- Fade In -->
<div class="animate-fade-in">Fades in</div>

<!-- Slide In -->
<div class="animate-slide-in">Slides in from top</div>

<!-- Scale In -->
<div class="animate-scale-in">Scales in</div>
```

## Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px to 1023px
- **Mobile**: 480px to 767px
- **Small Mobile**: Below 480px

## Navbar Mobile Menu JavaScript

Add this to enable mobile menu toggle:

```javascript
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Close menu when link is clicked
document.querySelectorAll('.navbar-link').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});
```

## CSS Variables

All colors and spacing are defined as CSS variables. To customize:

```css
:root {
  --primary: #your-color;
  --primary-light: #your-light-color;
  /* ... etc */
}
```

## Accessibility Features

- High contrast text for readability
- Focus states on interactive elements
- Reduced motion support for users who prefer it
- Semantic HTML structure
- ARIA labels where needed

## Dark Mode Support

The stylesheet includes automatic dark mode support. It will automatically switch when the user's system preference is set to dark mode.

## Best Practices

1. **Use semantic HTML**: Use `<button>` for buttons, `<a>` for links
2. **Consistent spacing**: Use the spacing utilities for consistency
3. **Color meaning**: Use semantic colors (success, danger, warning)
4. **Responsive first**: Design mobile-first, then enhance for larger screens
5. **Accessibility**: Always include labels for form inputs
6. **Performance**: Minimize custom CSS, use utility classes

## Migration Guide

### From Old CSS to New Stylesheet

1. Remove old CSS files from HTML
2. Add `<link rel="stylesheet" href="styles.css">` to all pages
3. Replace old button classes with new `.btn` classes
4. Update form inputs to use new form-group structure
5. Replace old card styles with new `.card` classes
6. Update navbar to use new `.navbar` structure

## Support

For issues or questions about the stylesheet, refer to the CSS comments or create a new issue.

---

**Version**: 1.0.0  
**Last Updated**: 2026  
**License**: MIT
