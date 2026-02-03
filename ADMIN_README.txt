# 🔐 ADMIN PANEL QUICK START

## Access the Admin Panel

**URL**: `http://localhost:port/#admin` or `https://yoursite.com/#admin`

## Login Credentials

| Field | Value |
|-------|-------|
| **Admin ID** | `master.mnyc` |
| **Password** | `Shubh@0924` |

---

## What You Can Do

### ✅ Add Testimonials
- Fill out the form on the left
- Select star rating
- Add client name, role, and testimonial text
- Click "Add Testimonial"

### ✅ Edit Testimonials
- Click "Edit" on any testimonial
- Modify details in the modal
- Click "Save Changes"

### ✅ Delete Testimonials
- Click "Delete" on any testimonial
- Confirm deletion
- Testimonial is removed

---

## Key Features

- 🔒 **Secure Authentication**: Login required
- 💾 **Auto-Save**: All data stored in localStorage
- 🔄 **Real-time Sync**: Changes appear on main site immediately
- 📱 **Responsive**: Works on all devices
- 🎨 **Unique Design**: Different from main website
- ⭐ **Star Ratings**: 1-5 star system for testimonials

---

## File Structure

```
src/
├── index.html              (Main website)
├── admin.html              (Admin panel - standalone)
├── about.html              (About page)
├── contact.html            (Contact page)
├── styles.css              (Main styles)
├── script.js               (Main scripts)
└── ADMIN_PANEL_GUIDE.md   (Full documentation)
```

---

## How It Works

1. **Secure URL**: Admin panel only accessible via `/#admin` hash
2. **Login Authentication**: Verify credentials before access
3. **LocalStorage**: All testimonials stored in browser
4. **Real-time Sync**: Main site automatically loads latest testimonials
5. **No Backend Required**: Works completely client-side

---

## Important Notes

⚠️ **Security Reminder:**
- This is client-side authentication
- For production, implement server-side validation
- Never commit credentials to public repositories
- Change password regularly

📝 **Data Storage:**
- Testimonials stored in browser localStorage
- Persists across sessions
- Can be viewed in DevTools → Application → Local Storage

🔄 **Synchronization:**
- Changes sync across browser tabs automatically
- Main website automatically loads new testimonials
- No page refresh needed

---

## URLs Reference

- Main Website: `/` or `/index.html`
- About Page: `/about.html`
- Contact Page: `/contact.html`
- Admin Panel: `/#admin`

---

## Browser Developer Tools Access

To view stored testimonials:
1. Open DevTools (F12 or Right-click → Inspect)
2. Go to **Application** tab
3. Select **Local Storage**
4. Look for `mnycTestimonials` key
5. You'll see JSON data of all testimonials

---

## Success Indicators

✅ Admin panel loads with login form
✅ Can login with correct credentials
✅ Dashboard displays with add form
✅ Can add new testimonials
✅ Testimonials appear in "Existing Testimonials" list
✅ Can edit testimonials
✅ Can delete testimonials
✅ Main website carousel shows new testimonials

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Admin panel won't load | Check URL is `/#admin`, clear cache |
| Login fails | Verify credentials exactly match |
| Changes not visible on main site | Refresh main page, check localStorage |
| Lost password | Edit admin.html file directly |

---

For detailed documentation, see **ADMIN_PANEL_GUIDE.md**
