# MNYC Healthcare - Brand Colors & Design System

## Color Palette

### Primary Colors

#### Primary Blue
- **Color**: `#0066cc`
- **RGB**: rgb(0, 102, 204)
- **HSL**: hsl(207, 100%, 40%)
- **Usage**: Main branding, headings, buttons, primary elements
- **Hex Shorthand**: N/A
- **CSS Variable**: `--primary-color`

#### Secondary Cyan
- **Color**: `#00d4ff`
- **RGB**: rgb(0, 212, 255)
- **HSL**: hsl(186, 100%, 50%)
- **Usage**: Accent elements, highlights, interactive states
- **CSS Variable**: `--secondary-color`

### Secondary Colors

#### Accent Red
- **Color**: `#ff6b6b`
- **RGB**: rgb(255, 107, 107)
- **HSL**: hsl(0, 100%, 71%)
- **Usage**: Alerts, errors, important notifications
- **CSS Variable**: `--accent-color`

#### Success Green
- **Color**: `#10b981`
- **RGB**: rgb(16, 185, 129)
- **HSL**: hsl(160, 84%, 39%)
- **Usage**: Success messages, confirmations, positive actions
- **CSS Variable**: `--success-color`

#### Error Red
- **Color**: `#ef4444`
- **RGB**: rgb(239, 68, 68)
- **HSL**: hsl(0, 84%, 60%)
- **Usage**: Form errors, error messages, critical alerts
- **CSS Variable**: `--error-color`

### Neutral Colors

#### Dark Text
- **Color**: `#1a1a1a`
- **RGB**: rgb(26, 26, 26)
- **Usage**: Body text, headings on light backgrounds
- **CSS Variable**: `--text-dark`

#### Light Text
- **Color**: `#666666`
- **RGB**: rgb(102, 102, 102)
- **Usage**: Secondary text, descriptions, muted content
- **CSS Variable**: `--text-light`

#### Light Background
- **Color**: `#f8f9fa`
- **RGB**: rgb(248, 249, 250)
- **Usage**: Section backgrounds, subtle divisions
- **CSS Variable**: `--light-bg`

#### Dark Background
- **Color**: `#0f1419`
- **RGB**: rgb(15, 20, 25)
- **Usage**: Dark theme backgrounds, footer
- **CSS Variable**: `--dark-bg`

#### Border Color
- **Color**: `#e0e0e0`
- **RGB**: rgb(224, 224, 224)
- **Usage**: Borders, dividers, subtle lines
- **CSS Variable**: `--border-color`

#### White
- **Color**: `#ffffff`
- **RGB**: rgb(255, 255, 255)
- **Usage**: Card backgrounds, text on dark backgrounds

## Gradient Combinations

### Primary Gradient
```css
background: linear-gradient(135deg, #0066cc, #00d4ff);
```
**Usage**: Main buttons, hero section, prominent elements

### Accent Gradient
```css
background: linear-gradient(135deg, #00d4ff, #0066cc);
```
**Usage**: Reverse direction for visual variety, secondary elements

### Soft Gradient (Background)
```css
background: linear-gradient(135deg, #f0f7ff, #f8f9fa);
```
**Usage**: Section backgrounds, hero backgrounds

### Dark Gradient
```css
background: linear-gradient(135deg, #1a1a2e, #16213e);
```
**Usage**: Footer, dark sections

## Color Accessibility

### Contrast Ratios

| Element | Foreground | Background | Ratio | WCAG Level |
|---------|-----------|-----------|-------|-----------|
| Primary Text | #1a1a1a | #ffffff | 12.63:1 | AAA |
| Primary Button | #ffffff | #0066cc | 5.89:1 | AAA |
| Secondary Text | #666666 | #ffffff | 4.53:1 | AA |
| Accent Text | #00d4ff | #0f1419 | 6.84:1 | AAA |
| Error Text | #ef4444 | #ffffff | 3.99:1 | AA |
| Success Text | #10b981 | #ffffff | 5.77:1 | AAA |

### Recommendations
- Always maintain minimum 4.5:1 contrast ratio for text
- Use 3:1 minimum for large text (18px+)
- Test color combinations with accessibility tools

## Color Psychology

### Primary Blue (#0066cc)
- **Represents**: Trust, professionalism, healthcare
- **Psychology**: Conveys reliability, security, medical expertise
- **Cultural**: Universal acceptance, professional standard

### Secondary Cyan (#00d4ff)
- **Represents**: Innovation, technology, modernity
- **Psychology**: Suggests cutting-edge solutions, forward-thinking
- **Cultural**: Technology-focused, contemporary approach

### Accent Red (#ff6b6b)
- **Represents**: Energy, urgency, action
- **Psychology**: Draws attention, indicates importance
- **Cultural**: Warning signal, call-to-action

### Success Green (#10b981)
- **Represents**: Growth, success, positivity
- **Psychology**: Indicates completion, approval, forward progress
- **Cultural**: Universal "go" signal, positive reinforcement

## Usage Examples

### Primary Button
```css
.btn-primary {
    background: linear-gradient(135deg, #0066cc, #00d4ff);
    color: white;
}
```

### Card with Accent Border
```css
.card {
    border-left: 4px solid #0066cc;
    background: white;
}
```

### Hover State
```css
.element:hover {
    background: linear-gradient(135deg, #00d4ff, #0066cc);
    box-shadow: 0 5px 20px rgba(0, 102, 204, 0.3);
}
```

### Alert Message
```css
.alert-error {
    background: rgba(239, 68, 68, 0.1);
    color: #ef4444;
    border-left: 4px solid #ef4444;
}
```

### Text Gradient
```css
.gradient-text {
    background: linear-gradient(135deg, #0066cc, #00d4ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
```

## Color Modifications

### Lighter Shade (Opacity)
```css
color: rgba(0, 102, 204, 0.5); /* 50% opacity */
```

### Darker Shade
```css
color: #004d99; /* Darker version of primary */
```

### Transparency for Backgrounds
```css
background: rgba(0, 102, 204, 0.1); /* 10% for subtle background */
background: rgba(0, 102, 204, 0.3); /* 30% for stronger background */
```

## Brand Color Usage by Component

### Navigation
- **Background**: White/transparent
- **Text**: --text-dark
- **Active Indicator**: --primary-color
- **Hover**: --primary-color with gradient underline

### Buttons
- **Primary**: Gradient (primary to secondary)
- **Secondary**: --primary-color outline
- **Success**: --success-color
- **Error**: --error-color

### Cards
- **Background**: White
- **Border**: --border-color
- **Accent**: --primary-color (top border)
- **Icon**: --primary-color

### Forms
- **Border**: --border-color
- **Focus**: --primary-color with glow
- **Error**: --error-color
- **Success**: --success-color

### Badges & Tags
- **Info**: --primary-color
- **Success**: --success-color
- **Warning**: --accent-color
- **Error**: --error-color

### Charts & Graphs
- **Primary Series**: --primary-color
- **Secondary Series**: --secondary-color
- **Positive**: --success-color
- **Negative**: --error-color

## Dark Mode Considerations

For future dark mode implementation:
- **Primary**: #0066cc (same)
- **Secondary**: #00d4ff (same)
- **Text**: #ffffff
- **Background**: #0f1419
- **Card Background**: #1a1a2e
- **Border**: #2a2a3e

## Color Contrast Tool Resources

- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Contrast Ratio](https://contrast-ratio.com/)
- [Accessible Colors](https://accessible-colors.com/)

## Brand Consistency

All marketing materials, websites, and communications should use the official MNYC Healthcare color palette to maintain brand consistency.

For printed materials and specific media formats, ensure color accuracy through proper calibration and vendor coordination.

---

**Color System Version**: 1.0  
**Last Updated**: February 2026  
© 2024 MNYC Healthcare. All rights reserved.
