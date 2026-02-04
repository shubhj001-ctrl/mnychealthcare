# 🎨 MNYC Healthcare - Design System Quick Reference

## CSS Variables Library

### Primary Colors
```css
--primary-color: #0066cc
--primary-light: #0080ff
--primary-dark: #004d99
--primary-ultra-light: #e6f0ff
```

### Secondary Colors
```css
--secondary-color: #00a8ff
--secondary-light: #33c3ff
--secondary-ultra-light: #cce5ff
```

### Accent Colors
```css
--accent-purple: #8b5cf6
--accent-pink: #ec4899
--accent-orange: #f97316
--accent-teal: #14b8a6
```

### Status Colors
```css
--success-color: #10b981
--warning-color: #f59e0b
--error-color: #ef4444
--info-color: #3b82f6
```

### Gradients
```css
--gradient-primary: linear-gradient(135deg, var(--primary-color), var(--secondary-color))
--gradient-accent: linear-gradient(135deg, var(--accent-purple), var(--accent-pink))
--gradient-success: linear-gradient(135deg, var(--success-color), #059669)
--gradient-premium: linear-gradient(135deg, var(--accent-purple), var(--accent-orange))
--gradient-warm: linear-gradient(135deg, var(--accent-orange), #f59e0b)
```

### Shadows
```css
--shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.05)
--shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1)
--shadow-md: 0 4px 12px rgba(0, 0, 0, 0.15)
--shadow-lg: 0 8px 24px rgba(0, 102, 204, 0.2)
--shadow-xl: 0 12px 32px rgba(0, 102, 204, 0.25)
--shadow-2xl: 0 16px 48px rgba(0, 102, 204, 0.3)
--shadow-glow: 0 0 20px rgba(0, 102, 204, 0.4)
--shadow-glow-strong: 0 0 30px rgba(0, 102, 204, 0.6)
```

### Transitions
```css
--transition: all 0.3s ease
--transition-smooth: all 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)
--transition-bounce: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)
--transition-slow: all 0.5s ease-out
```

---

## Typography Scale

### Headings
| Element | Size (clamp) | Weight | Usage |
|---------|-------------|--------|-------|
| h1 | clamp(2rem, 5vw, 3.5rem) | 900 | Page title |
| h2 | clamp(1.75rem, 4vw, 2.5rem) | 800 | Section title |
| h3 | clamp(1.25rem, 3vw, 1.75rem) | 700 | Subsection |
| h4 | 1.125rem | 600 | Small heading |

### Body Text
```css
p: 1rem, weight 400, line-height 1.7, letter-spacing -0.005em
small: 0.875rem, weight 400, line-height 1.6
```

### Utilities
```css
.text-xs: 0.75rem
.text-sm: 0.875rem
.text-base: 1rem
.text-lg: 1.125rem
.text-xl: 1.25rem
.text-2xl: 1.5rem
.text-3xl: 1.875rem
.text-4xl: 2.25rem
```

---

## Component Specifications

### Buttons
```css
/* Base */
Padding: 12px 28px
Border-radius: 12px
Font-size: 1rem
Font-weight: 600
Letter-spacing: 0.5px

/* Hover */
Transform: translateY(-4px) scale(1.02)
Shadow: --shadow-2xl + --shadow-glow

/* Active */
Transform: scale(0.98)
Shadow: --shadow-md
```

### Form Inputs
```css
/* Base */
Padding: 1rem
Border: 2px solid rgba(0, 102, 204, 0.3)
Border-radius: 10px
Transition: --transition-smooth

/* Focus */
Border-color: var(--secondary-color)
Box-shadow: 0 0 0 3px rgba(0, 102, 204, 0.2) + --shadow-glow
Transform: translateY(-2px)

/* Error */
Border-color: var(--error-color)
Animation: shake 0.4s ease-in-out
```

### Cards
```css
/* Service Card */
Padding: 2.5rem
Border-radius: 16px
Background: rgba(255, 255, 255, 0.06)
Backdrop-filter: blur(10px)
Shadow: --shadow-md
Hover: transform translateY(-12px) scale(1.02) + --shadow-2xl + --shadow-glow

/* Testimonial Card */
Padding: 2rem
Width: 350px (desktop), 100% (mobile)
Hover: transform translateY(-10px) scale(1.02) + --shadow-2xl + --shadow-glow

/* Stat Item */
Padding: 2rem
Border-radius: 12px
Hover: transform translateY(-4px) + --shadow-lg + --shadow-glow
```

### Badges
```css
/* Variants */
Success: rgba(16, 185, 129) background + border
Warning: rgba(245, 158, 11) background + border
Info: rgba(59, 130, 246) background + border
Error: rgba(239, 68, 68) background + border

/* Hover */
Transform: scale(1.05)
Box-shadow: glow effect
```

---

## Responsive Breakpoints

### Mobile First Approach
```css
/* Base (Mobile) */
Default: Optimized for 320px-480px

/* Small Mobile (480px) */
@media (max-width: 480px)
- Font-size: 14px base
- Touch targets: 44px minimum
- Single column layouts
- Reduced padding

/* Mobile/Tablet (640px) */
@media (min-width: 640px)
- Enhanced typography
- 2-column grids
- Better spacing

/* Tablet (768px) */
@media (min-width: 768px)
- Multi-column layouts
- Full animations
- Expanded spacing

/* Desktop (1024px+) */
Default full-featured design
```

---

## Animation Keyframes

### Entrance Animations
```css
@keyframes fadeInUp
- From: opacity 0, translateY 30px
- To: opacity 1, translateY 0

@keyframes slideInDown
- From: opacity 0, translateY -80px, scale 0.95
- To: opacity 1, translateY 0, scale 1
```

### Interactive Animations
```css
@keyframes bounce
- 0%, 100%: translateY 0
- 50%: translateY -8px

@keyframes swing
- 0%, 100%: rotate 0, translateX 0
- 50%: rotate 3deg, translateX 4px

@keyframes wobble
- 0%, 100%: rotate 0
- 25%: rotate -1deg
- 75%: rotate 1deg
```

### Feedback Animations
```css
@keyframes shake
- 0%, 100%: translateX 0
- 25%: translateX -5px
- 75%: translateX 5px

@keyframes glow (text)
- 0%, 100%: text-shadow subtle
- 50%: text-shadow enhanced
```

---

## Color Palette Usage Guide

### When to Use
| Color | Usage |
|-------|-------|
| Primary (Blue) | CTAs, Links, Primary actions |
| Secondary (Light Blue) | Accents, Secondary actions |
| Success (Green) | Positive feedback, Achievement |
| Warning (Amber) | Caution, Incomplete actions |
| Error (Red) | Errors, Destructive actions |
| Info (Sky Blue) | Information, Help messages |

### Combinations
- **Primary + Secondary**: Main gradients
- **Success + Green**: Achievement badges
- **Warning + Amber**: Caution indicators
- **Error + Red**: Error states
- **Purple + Pink**: Premium/Accent sections
- **Orange**: Warm highlights

---

## Motion Design Guidelines

### Timing Functions
```css
Standard: cubic-bezier(0.25, 0.46, 0.45, 0.94) — smooth
Bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55) — elastic
Ease-out: ease-out — deceleration
```

### Duration Guidelines
```css
Quick interactions: 0.3s (hover, focus)
Standard: 0.35s (transitions)
Medium: 0.4s (bounces)
Slow: 0.5s (page load)
Long: 0.6s-2s (entrance animations)
```

### Performance
- Use `transform` and `opacity` for smooth animations
- Avoid animating `width`, `height`, `position`
- Apply `will-change: transform` for expensive animations
- Limit simultaneous animations (max 3-5 per element)

---

## Accessibility Notes

### Color Contrast
- ✅ All text meets WCAG AA standards (4.5:1 minimum)
- ✅ Status colors distinguishable without color alone
- ✅ Focus states clearly visible (3px glow minimum)

### Touch Targets
- ✅ Minimum 44px × 44px on mobile
- ✅ Buttons have minimum padding
- ✅ Form inputs have clear focus states

### Motion
- ⚠️ Users can disable animations via `prefers-reduced-motion`
- ✅ Animations are optional enhancements
- ✅ Critical functionality works without animation

---

## Usage Examples

### Button Hover
```css
.btn:hover {
    transform: translateY(-4px) scale(1.02);
    box-shadow: var(--shadow-2xl), var(--shadow-glow);
}
```

### Form Focus
```css
input:focus {
    border-color: var(--secondary-color);
    box-shadow: 0 0 0 3px rgba(0, 102, 204, 0.2), var(--shadow-glow);
    transform: translateY(-2px);
}
```

### Card Hover
```css
.card:hover {
    transform: translateY(-12px) scale(1.02);
    box-shadow: var(--shadow-2xl), var(--shadow-glow);
    border-color: rgba(0, 168, 255, 0.4);
}
```

### Badge Styling
```css
.badge-success {
    background: linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(5, 150, 105, 0.1));
    color: #10b981;
    border: 1px solid rgba(16, 185, 129, 0.4);
}
```

---

## Quick Integration Checklist

- [ ] Import all CSS variables
- [ ] Use consistent spacing from scale
- [ ] Apply shadows for depth hierarchy
- [ ] Use gradients for premium areas
- [ ] Implement micro-interactions on interactive elements
- [ ] Test responsive breakpoints
- [ ] Verify animation performance
- [ ] Check color contrast ratios
- [ ] Test keyboard navigation
- [ ] Validate touch targets (44px+)

---

**Design System Version**: 1.0  
**Last Updated**: Visual Design Phase Complete  
**Status**: ✅ Production Ready
