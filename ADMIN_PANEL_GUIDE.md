# Admin Panel - User Guide

## 🔐 Accessing the Admin Panel

### How to Access:
1. Go to your website URL: `https://yourwebsite.com/#admin`
2. You will be redirected to the admin login page
3. The admin panel is **completely hidden** and cannot be accessed by regular users unless they know the exact URL hash

### Login Credentials:
- **Admin ID**: `master.mnyc`
- **Password**: `Shubh@0924`

---

## 📋 Admin Panel Features

### 1. **Authentication**
- Secure login system with Admin ID and Password
- Login session is stored in localStorage
- Automatic logout option on the dashboard

### 2. **Testimonials Management**

#### **Add New Testimonial:**
1. Fill in the "Add Testimonial" form on the left side
2. Enter **Client Name** (e.g., "Dr. Sarah Johnson")
3. Enter **Position/Role** (e.g., "Healthcare Director")
4. Select **Rating** by clicking the stars (1-5 stars)
5. Enter the **Testimonial Text** in the textarea
6. Click "Add Testimonial" button
7. The testimonial will appear in the list on the right side

#### **Edit Testimonial:**
1. Click the **"Edit"** button on any testimonial card
2. A modal window will open with the testimonial details
3. Make your changes to any field
4. Click "Save Changes" to update
5. The testimonial will be updated both in the admin panel and on the main website

#### **Delete Testimonial:**
1. Click the **"Delete"** button on any testimonial card
2. Confirm the deletion when prompted
3. The testimonial will be removed from storage and the website

#### **View Testimonials:**
- All existing testimonials are displayed in the "Existing Testimonials" section
- Each testimonial shows:
  - Client name and role
  - Star rating
  - Full testimonial text
  - Edit and Delete buttons

---

## 💾 Data Storage

### How It Works:
- All testimonials are stored in **browser's localStorage**
- Data persists even if you close the browser
- Testimonials are synchronized across browser tabs in real-time
- Storage key: `mnycTestimonials`

### Viewing Stored Data:
- Open browser's Developer Tools (F12 or Right-click → Inspect)
- Go to **Application** tab → **Local Storage**
- Look for entry with key: `mnycTestimonials`
- You'll see all testimonials in JSON format

---

## 🔄 Testimonial Synchronization

### Main Website Display:
1. When you add/edit/delete testimonials in the admin panel
2. The changes are automatically saved to localStorage
3. The testimonials section on the main website loads from localStorage
4. **The carousel will update with the new testimonials**

### How It Updates:
- JavaScript listens for changes to localStorage
- When testimonials change, the carousel refreshes automatically
- All browser tabs see the changes in real-time

---

## 🎨 Admin Panel Design

### Unique Design Features:
- **Dark theme** with red accent color (#ff6b6b) - completely different from main website
- **Clean, modern interface** with glass morphism effects
- **Responsive design** that works on desktop and mobile
- **Professional dashboard layout** with separate sections for adding and managing testimonials

### Color Scheme:
- Background: Dark (#1a1a1a, #2d2d2d)
- Accents: Red (#ff6b6b, #ee5a6f)
- Text: White (#ffffff)
- Success: Green (#10b981)

---

## 🔒 Security Notes

### Current Security Level:
- **Client-side authentication** using hardcoded credentials
- Works for small to medium deployments
- Suitable for internal/trusted admin use

### For Production Use (Recommended):
1. Move authentication to a backend server
2. Use encrypted password hashing (bcrypt, etc.)
3. Implement JWT tokens
4. Use HTTPS only
5. Add rate limiting to prevent brute force attacks
6. Consider adding 2-factor authentication

### Best Practices:
- ✅ Never share the URL hash (#admin) publicly
- ✅ Change credentials regularly
- ✅ Use a secure password manager
- ✅ Log out after editing testimonials
- ✅ Clear browser history after accessing admin panel on shared computers

---

## 📱 Mobile Access

- The admin panel is fully responsive
- Works on tablets and mobile devices
- Touch-friendly buttons and interfaces
- Scrollable testimonials list on small screens

---

## 🆘 Troubleshooting

### Admin Panel Not Loading:
1. Check if you're using the correct URL: `/#admin`
2. Clear browser cache and refresh
3. Try in an incognito/private window
4. Check browser console (F12) for errors

### Testimonials Not Showing on Website:
1. Refresh the main website page
2. Clear localStorage (if you want to reset)
3. Check if testimonials were saved (Developer Tools → Local Storage)
4. Verify the carousel is loading testimonials correctly

### Forgotten Password:
- Contact the site administrator
- You can update the password in the admin.html file
- Search for `CORRECT_ID` and `CORRECT_PASSWORD` constants

---

## 📝 Adding Default Testimonials

To pre-load testimonials when the site launches:

1. Open admin.html in a text editor
2. Find the section that loads testimonials from localStorage
3. You can add initial testimonials by updating the localStorage in JavaScript
4. Alternatively, add testimonials manually through the admin panel

---

## 🎯 Default Testimonials (Pre-loaded)

The website comes with default testimonials. You can:
- **Keep them**: They'll display on the carousel
- **Edit them**: Click Edit button to modify
- **Delete them**: Click Delete button to remove
- **Add more**: Use the Add Testimonial form

---

## 📊 Analytics & Monitoring

Currently, the admin panel doesn't include:
- Analytics/statistics
- User activity logs
- Backup options

These can be added in future updates for enhanced administration capabilities.

---

## 🔄 Version Info

- **Admin Panel Version**: 1.0
- **Last Updated**: February 2026
- **Storage Format**: JSON in localStorage
- **Browser Compatibility**: All modern browsers (Chrome, Firefox, Safari, Edge)

---

## 📞 Support

For issues or feature requests, contact the development team.

---

**Remember**: Keep the admin URL (#admin) secret! Only authorized administrators should know about it.
