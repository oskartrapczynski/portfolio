# Quick Start Guide

## 🎯 Get Started in 5 Minutes

### 1. Install Dependencies

```bash
cd Oskar T.T-portfolio
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

Visit `http://localhost:4321` in your browser.

### 3. Quick Customization Checklist

#### Essential Updates

- [ ] Replace "Oskar T.T" with your name in all components
- [ ] Update social media links in `Hero.tsx`
- [ ] Change email and location in `Contact.tsx`
- [ ] Add your projects to `Projects.tsx`
- [ ] Update skills in `About.tsx`

#### Images

- [ ] Add project screenshots to `/public/images/`
- [ ] Replace placeholder images in project cards
- [ ] Add a favicon to `/public/favicon.svg`

#### Content

- [ ] Write your bio/description
- [ ] List your actual tech stack
- [ ] Add real project links

## 🎨 Customization Guide

### Change Colors

Edit `tailwind.config.mjs`:

```javascript
neon: {
  cyan: '#00ffff',    // Your primary accent
  blue: '#0ff',       // Your secondary accent
  purple: '#a78bfa',  // Additional accent
}
```

### Change Fonts

Edit `src/layouts/Layout.astro`, replace Google Fonts link:

```html
<link
  href="https://fonts.googleapis.com/css2?family=YOUR_FONT&display=swap"
  rel="stylesheet"
/>
```

Then update `src/styles/globals.css`:

```css
body {
  font-family: 'YOUR_FONT', sans-serif;
}
```

### Add New Sections

1. Create component in `src/components/YourSection.tsx`
2. Import in `src/pages/index.astro`
3. Add to page: `<YourSection client:load />`

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project on Vercel
3. Deploy automatically!

### Netlify

1. Push code to GitHub
2. Connect repository on Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Build Locally

```bash
npm run build
npm run preview
```

## 🎯 Project Structure Quick Reference

```
src/
├── components/
│   ├── Hero.tsx        → Landing section with your name
│   ├── About.tsx       → Skills and bio
│   ├── Projects.tsx    → Portfolio items
│   ├── Contact.tsx     → Contact info
│   ├── Navigation.tsx  → Top nav bar
│   └── Footer.tsx      → Bottom footer
├── layouts/
│   └── Layout.astro    → Page wrapper
├── pages/
│   └── index.astro     → Main page
└── styles/
    └── globals.css     → Global styles & animations
```

## 💡 Tips

1. **Performance**: Images should be optimized and under 500KB
2. **SEO**: Update meta tags in `Layout.astro`
3. **Analytics**: Add Google Analytics in `Layout.astro`
4. **Testing**: Test on mobile devices before deploying
5. **Animations**: Adjust animation speeds in component files

## 🐛 Common Issues

### Animations not working?

- Make sure `client:load` is added to components in `index.astro`

### Styles not applying?

- Check that Tailwind CSS is properly configured
- Restart dev server after config changes

### Build errors?

- Run `npm install` again
- Check Node.js version (should be 18+)
- Clear cache: `rm -rf node_modules .astro dist`

## 📚 Learn More

- [Astro Documentation](https://docs.astro.build)
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com/)

Happy building! 🚀
