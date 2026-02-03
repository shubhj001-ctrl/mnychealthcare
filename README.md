# MNYC Healthcare - Modern Website

A beautifully designed, fully responsive website for MNYC Healthcare with advanced animations and interactive features.

## Features

### 🎨 Design & UX
- **Modern, Professional Design** - Clean and contemporary aesthetic
- **Responsive Layout** - Works flawlessly on desktop, tablet, and mobile devices
- **Beautiful Animations** - Smooth fade-in, slide, and floating animations
- **Gradient Effects** - Modern gradient backgrounds and text effects
- **Interactive Elements** - Hover effects and transitions throughout

### ✨ Animations & Effects
- Fade-in animations on page load
- Floating card animations in hero section
- Hover effects on cards with elevation
- Smooth scroll behavior
- Counter animations for statistics
- Parallax scrolling effects
- Form field focus animations
- Navigation underline animations

### 📱 Interactive Features
- **Mobile Navigation** - Responsive hamburger menu
- **Contact Form** - Fully validated with real-time error messages
- **Form Validation** - Email, phone, and text validation
- **Toast Notifications** - Success/error notifications
- **Smooth Scrolling** - Smooth anchor link scrolling
- **Active Navigation** - Highlights current section
- **Intersection Observer** - Animations trigger on scroll into view

### 📑 Sections

1. **Navigation** - Sticky header with smooth scroll navigation
2. **Hero Section** - Eye-catching landing area with call-to-action
3. **About Section** - Company overview with feature cards
4. **Services Section** - Detailed service offerings with descriptions
5. **Statistics Section** - Animated counter display
6. **Contact Section** - Contact information and interactive form
7. **Footer** - Links and company information

## File Structure

```
src/
├── index.html       # Main HTML file
├── styles.css       # Complete styling with animations
├── script.js        # Interactive JavaScript functionality
└── README.md        # This file
```

## How to Use

### 1. Open in Browser
Simply open `index.html` in your web browser:
```bash
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

### 2. Set Up Local Server (Recommended)
For better performance, use a local server:

**Using Python:**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Using Node.js (with http-server):**
```bash
npm install -g http-server
http-server
```

**Using VS Code:**
Install "Live Server" extension, then right-click `index.html` and select "Open with Live Server"

Then visit: `http://localhost:8000` (or as indicated by your server)

## Customization

### Colors
Edit the CSS variables at the top of `styles.css`:
```css
:root {
    --primary-color: #0066cc;
    --secondary-color: #00d4ff;
    --accent-color: #ff6b6b;
    /* ... more colors ... */
}
```

### Company Information
Update contact details in `index.html`:
- Phone number
- Email address
- Physical address
- Social media links

### Content
Modify the text, headings, and descriptions to match your company's information.

## Browser Compatibility

- ✅ Chrome/Chromium (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Edge (Latest)
- ✅ Mobile Browsers

## Features Breakdown

### Advanced Animations
- CSS keyframe animations for smooth transitions
- Intersection Observer for scroll-triggered animations
- Transform and opacity animations
- Gradient animations

### Form Validation
- Real-time validation feedback
- Email format validation
- Phone number format validation
- Minimum character length checks
- Error message display

### Responsive Design
- Mobile-first approach
- Flexible grid layouts
- Media queries for all screen sizes
- Hamburger menu for mobile
- Touch-friendly buttons and links

### Performance
- Optimized CSS and JavaScript
- Smooth animations with GPU acceleration
- Efficient DOM queries
- Minimal reflows and repaints

## JavaScript Functionality

### Key Functions
- `animateCounters()` - Animate statistics on scroll
- `validateEmail()` - Validate email format
- `validatePhone()` - Validate phone format
- `showNotification()` - Display toast notifications
- `animateOnScroll()` - Trigger animations on scroll

### Event Listeners
- Mobile menu toggle
- Form submission and validation
- Scroll animations
- Navigation link clicks

## Form Integration

Currently, the form validates and displays a success message. To integrate with a backend service:

1. Create a server endpoint
2. Modify the form submission handler in `script.js`
3. Send form data using fetch or AJAX

Example:
```javascript
fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
})
```

## Accessibility

- Semantic HTML structure
- Proper heading hierarchy
- ARIA labels where needed
- Keyboard navigation support
- Color contrast compliance

## Performance Tips

1. Minimize CSS and JavaScript for production
2. Optimize images and add lazy loading
3. Use CDN for Font Awesome icons
4. Enable gzip compression on server
5. Implement caching strategies

## Future Enhancements

- Blog section with latest updates
- Client testimonials carousel
- Team member profiles
- Appointment booking system
- Live chat support
- Dark mode toggle
- Multi-language support

## Support

For issues or improvements, please contact the development team.

## License

© 2024 MNYC Healthcare. All rights reserved.

---

**Created with ❤️ for Modern Healthcare Solutions**
