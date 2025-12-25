# Vidhyom Landing Page - Development Guide

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📦 Tech Stack

- **Framework**: React 19.2.0
- **Build Tool**: Vite 7.2.4
- **Styling**: Tailwind CSS 4.1.18
- **Smooth Scroll**: Lenis 1.3.16
- **Icons**: React Icons 5.5.0
- **Fonts**: Google Fonts (Cookie, Lobster, Manrope)

## 🎨 Customization Guide

### Changing Colors

All colors are defined using Tailwind classes. Main color scheme:

```jsx
// Primary CTA - Green
className="bg-green-500 hover:bg-green-600"

// Secondary - Blue
className="bg-blue-500 hover:bg-blue-600"

// Premium - Purple
className="bg-purple-500 hover:bg-purple-600"

// Alert/Problem - Red/Orange
className="bg-red-500" or "bg-orange-500"
```

### Updating Content

Each section is self-contained. To update content:

1. Navigate to the section folder
2. Edit the component file
3. Update the data arrays or text directly

Example - Updating Features:
```jsx
// src/Components/LandingPage.jsx/FeatureSection/FeatureSection.jsx
const features = [
  {
    icon: "🎯",
    title: "Your Feature Title",
    description: "Your description",
    gradient: "from-blue-500 to-cyan-500"
  },
  // Add more features...
]
```

### Adding New Sections

1. Create new folder: `src/Components/LandingPage.jsx/YourSection/`
2. Create component: `YourSection.jsx`
3. Import in `LandingPage.jsx`:
```jsx
import YourSection from './YourSection/YourSection'
```
4. Add to render order in `LandingPage.jsx`

## 🎯 Section-Specific Guides

### Hero Section
- **Files**: `HeroSection.jsx`, `Navbar.jsx`, `Content.jsx`, `BottomSection.jsx`
- **Fonts**: Uses Cookie and Lobster (loaded in index.html)
- **Image**: Update `/public/Hero-png.avif` for hero image
- **CTA**: Edit buttons in `Content.jsx`

### Navbar
- **Logo**: Update path in `Navbar.jsx` (currently `/logo/SVG/logo_black.svg`)
- **Links**: Edit navigation items in `Navbar.jsx`
- **Sticky**: Add `sticky top-0 z-50` to make navbar sticky

### Pricing
- **Plans**: Edit `plans` array in `PricingSection.jsx`
- **Currency**: Change `₹` to your currency symbol
- **Payment**: Add payment integration when ready (currently "Coming Soon")

### FAQ
- **Questions**: Edit `faqs` array in `FAQSection.jsx`
- **Accordion**: Uses React state for open/close functionality

### Footer
- **Links**: Update all href attributes in `Footer.jsx`
- **Social**: Add actual social media URLs
- **Legal**: Create Privacy Policy, Terms pages and link them

## 🔧 Common Tasks

### Update Logo
1. Place logo in `/public/logo/SVG/`
2. Update path in `Navbar.jsx`:
```jsx
<img src="/logo/SVG/your-logo.svg" alt="Logo" />
```

### Change Fonts
1. Update Google Fonts link in `index.html`
2. Update font-family in components:
```jsx
style={{ fontFamily: 'YourFont, sans-serif' }}
```

### Modify Smooth Scrolling
Edit settings in `src/App.jsx`:
```jsx
<ReactLenis
  options={{
    lerp: 0.1,        // Smoothness (0.1 = smooth, 1 = instant)
    duration: 1.5,    // Animation duration
    smoothWheel: true // Enable smooth wheel scrolling
  }}
>
```

### Add Analytics
Add tracking code in `index.html` before `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

### SEO Optimization
Update meta tags in `index.html`:
- Title
- Description
- Keywords
- Open Graph tags

## 📱 Responsive Design

All sections are mobile-first:
- **Mobile**: Default styles
- **Tablet**: `md:` prefix (768px+)
- **Desktop**: `lg:` prefix (1024px+)
- **Large Desktop**: `xl:` prefix (1280px+)

### Testing Responsiveness
1. Open DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Test on different screen sizes

## 🎨 Design Tokens

### Spacing
- Section padding: `py-16 lg:py-24`
- Container: `max-w-350` (1400px)
- Grid gaps: `gap-6 lg:gap-8`

### Border Radius
- Cards: `rounded-2xl` (16px)
- Buttons: `rounded-full`
- Icons: `rounded-xl` (12px)

### Shadows
- Default: `shadow-lg`
- Hover: `shadow-xl` or `shadow-2xl`

## 🐛 Troubleshooting

### Smooth scrolling not working
- Check Lenis import in `App.jsx`
- Verify CSS in `index.css`
- Clear browser cache

### Images not loading
- Check file path (case-sensitive)
- Ensure images are in `/public/` folder
- Use absolute paths: `/image.jpg` not `./image.jpg`

### Fonts not loading
- Check Google Fonts link in `index.html`
- Verify font names match exactly
- Check browser console for errors

### Build errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install

# Clear Vite cache
rm -rf .vite
npm run dev
```

## 📊 Performance Tips

1. **Optimize Images**
   - Use WebP format
   - Compress images (TinyPNG, Squoosh)
   - Use appropriate sizes

2. **Lazy Loading**
   - Add `loading="lazy"` to images
   - Use React.lazy() for code splitting

3. **Minimize Bundle**
   - Remove unused dependencies
   - Tree-shake imports
   - Use production build

4. **Caching**
   - Set proper cache headers
   - Use CDN for static assets

## 🚢 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
1. Connect GitHub repo
2. Build command: `npm run build`
3. Publish directory: `dist`

### Manual
```bash
npm run build
# Upload 'dist' folder to your hosting
```

## 📝 Best Practices

1. **Component Structure**
   - One component per file
   - Keep components small and focused
   - Use meaningful names

2. **Styling**
   - Use Tailwind utility classes
   - Avoid inline styles when possible
   - Keep consistent spacing

3. **Code Quality**
   - Run `npm run lint` before committing
   - Use meaningful variable names
   - Add comments for complex logic

4. **Git Workflow**
   - Commit frequently
   - Write clear commit messages
   - Use feature branches

## 🔐 Security

- Never commit API keys
- Use environment variables for secrets
- Validate all user inputs
- Keep dependencies updated

## 📞 Support

For issues or questions:
- Check documentation first
- Review console errors
- Search existing issues
- Create detailed bug reports

---

**Happy Coding! 🚀**

