# Irbis Design System - Light Theme Documentation

## Overview

Irbis uses a light-only theme with no dark mode support. All styles are defined using CSS variables in `src/app/globals.css` for consistency across the application. This theme emphasizes Swiss minimalism: clean, precise, and functional design with subtle shadows and ample white space.

The theme is built on:
- **Color Palette**: Neutral grays with blue accents for primary actions.
- **Spacing System**: Based on a 4px grid for consistency.
- **Typography**: Sans-serif fonts with a clear hierarchy.
- **Shadows and Radii**: Subtle elevations for depth without overwhelming the minimal aesthetic.

## CSS Variables

### Base Colors - Backgrounds
- `--background-primary: #ffffff` (Pure white for main backgrounds)
- `--background-secondary: #fafafa` (Light gray for cards/subtle contrast)
- `--background-tertiary: #f5f5f5` (Even lighter for hover states)

### Base Colors - Text
- `--text-primary: #171717` (Near-black for main text)
- `--text-secondary: #737373` (Medium gray for secondary text)
- `--text-tertiary: #a3a3a3` (Light gray for disabled/hints)

### Base Colors - Borders
- `--border-primary: #e5e5e5` (Light border for default)
- `--border-secondary: #f0f0f0` (Very light for subtle divisions)
- `--border-strong: #d4d4d4` (Slightly darker for emphasis)

### Accent Colors
- `--accent-primary: #2563eb` (Blue for primary buttons/links)
- `--accent-primary-hover: #1d4ed8` (Darker blue for hover)
- `--accent-success: #059669` (Green for success states)
- `--accent-warning: #f59e0b` (Yellow for warnings)
- `--accent-danger: #dc2626` (Red for errors/danger)

### Status Colors
- `--status-active: #059669` (Green for active/approved)
- `--status-pending: #f59e0b` (Yellow for pending)
- `--status-inactive: #737373` (Gray for inactive)
- `--status-new: #2563eb` (Blue for new items)

### Compatibility Score Colors
- `--score-excellent: #059669` (Green for high scores)
- `--score-good: #2563eb` (Blue for good)
- `--score-average: #f59e0b` (Yellow for average)
- `--score-low: #737373` (Gray for low)

### Spacing System (4px base)
- `--space-1: 0.25rem` (4px)
- `--space-2: 0.5rem` (8px)
- `--space-3: 0.75rem` (12px)
- `--space-4: 1rem` (16px)
- `--space-5: 1.25rem` (20px)
- `--space-6: 1.5rem` (24px)
- `--space-8: 2rem` (32px)
- `--space-10: 2.5rem` (40px)
- `--space-12: 3rem` (48px)
- `--space-16: 4rem` (64px)
- `--space-20: 5rem` (80px)

### Typography Scale
- `--text-display: 3.5rem` (56px for large displays)
- `--text-h1: 2.5rem` (40px)
- `--text-h2: 2rem` (32px)
- `--text-h3: 1.5rem` (24px)
- `--text-h4: 1.25rem` (20px)
- `--text-h5: 1.125rem` (18px)
- `--text-base: 1rem` (16px)
- `--text-sm: 0.875rem` (14px)
- `--text-xs: 0.75rem` (12px)

### Font Weights
- `--font-weight-normal: 400`
- `--font-weight-medium: 500`
- `--font-weight-semibold: 600`
- `--font-weight-bold: 700`

### Line Heights
- `--leading-tight: 1.25`
- `--leading-normal: 1.5`
- `--leading-relaxed: 1.75`

### Shadows
- `--shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.04)` (Subtle)
- `--shadow-md: 0 4px 16px rgba(0, 0, 0, 0.08)` (Medium)
- `--shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.12)` (Pronounced)

### Border Radius
- `--radius-sm: 4px` (Small elements)
- `--radius-md: 6px` (Buttons)
- `--radius-lg: 8px` (Cards)
- `--radius-xl: 12px` (Modals/large containers)

### Transitions
- `--transition-fast: 0.2s ease`
- `--transition-base: 0.3s ease`

## Usage Guidelines

- **Consistency**: Always use variables instead of hard-coded values to ensure theme consistency.
- **No Dark Mode**: All components should be designed for light theme only. Avoid media queries for prefers-color-scheme.
- **Accessibility**: Ensure sufficient contrast (e.g., text on backgrounds). Use tools like WAVE or Lighthouse for checks.
- **Customization**: If extending the theme, add new variables here and update components accordingly.

For component-specific styles, refer to individual component documentation in Storybook (to be set up).

Last updated: 2024-12-22