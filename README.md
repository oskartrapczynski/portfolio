# Oskar T.T's Portfolio

A modern, animated portfolio website built with Astro, React, Tailwind CSS, and shadcn/ui featuring a cyberpunk neon aesthetic.

## 🚀 Features

- **Neon Cyberpunk Design**: Black, gray, and white color scheme with cyan/blue neon accents
- **Smooth Animations**: Scroll-triggered animations, parallax effects, and micro-interactions using Framer Motion
- **Fully Responsive**: Mobile-first design that works on all devices
- **Performance Optimized**: Built with Astro for optimal loading speed
- **Interactive Components**: Filterable project showcase, smooth scrolling navigation
- **Developer-First**: Showcases programming projects prominently while highlighting creative hobbies

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/)
- **UI Library**: [React](https://reactjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: Space Mono, Inter

## 📦 Installation

1. **Install dependencies**:

```bash
npm install
```

2. **Start development server**:

```bash
npm run dev
```

3. **Build for production**:

```bash
npm run build
```

4. **Preview production build**:

```bash
npm run preview
```

## 🎨 Customization

### Update Personal Information

1. **Hero Section** (`src/components/Hero.tsx`):
   - Update social media links in the `socialLinks` array
   - Modify the title and description

2. **About Section** (`src/components/About.tsx`):
   - Edit skills and technologies in the `skills` array
   - Update bio text

3. **Projects Section** (`src/components/Projects.tsx`):
   - Replace placeholder projects in the `projects` array
   - Add your own project images to `/public/images/`
   - Update project links and descriptions

4. **Contact Section** (`src/components/Contact.tsx`):
   - Update email and location
   - Modify social links

### Color Scheme

Edit colors in `tailwind.config.mjs`:

```javascript
colors: {
  neon: {
    cyan: '#00ffff',
    blue: '#0ff',
    purple: '#a78bfa',
  },
}
```

### Fonts

Change fonts in `src/layouts/Layout.astro`:

```html
<link
  href="https://fonts.googleapis.com/css2?family=YOUR_FONT&display=swap"
  rel="stylesheet"
/>
```

## 📁 Project Structure

```
/
├── public/
│   └── images/          # Project images
├── src/
│   ├── components/
│   │   ├── ui/         # shadcn/ui components
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   ├── Navigation.tsx
│   │   └── Footer.tsx
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   ├── styles/
│   │   └── globals.css
│   └── lib/
│       └── utils.ts
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## 🎯 Sections

1. **Hero**: Animated landing with name, title, and social links
2. **About**: Skills showcase organized by category (Development, Music, DJing, Video, 2D/3D Graphics)
3. **Projects**: Filterable portfolio grid with project cards
4. **Contact**: Get in touch section with email and location
5. **Footer**: Copyright and quick links

## 🌟 Animation Features

- Scroll-triggered fade-in animations
- Parallax floating elements
- Neon glow effects on hover
- Smooth page scrolling
- Grid background with scanline effect
- Glitch text effects
- 3D rotating geometric shapes

## 📝 Adding Projects

To add a new project, edit `src/components/Projects.tsx`:

```typescript
{
  title: "Your Project",
  description: "Project description",
  category: ['development'], // or 'music', 'video', 'graphics'
  image: "/images/your-project.jpg",
  tags: ["React", "Node.js"],
  githubUrl: "https://github.com/yourusername/project",
  liveUrl: "https://yourproject.com",
}
```

## 🚀 Deployment

This site can be deployed to:

- [Vercel](https://vercel.com/)
- [Netlify](https://netlify.com/)
- [Cloudflare Pages](https://pages.cloudflare.com/)
- [GitHub Pages](https://pages.github.com/)

Simply connect your repository and deploy!

## 📄 License

MIT License - Feel free to use this template for your own portfolio!

## 🤝 Credits

Built by Oskar T.T using modern web technologies and creative passion.
