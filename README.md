# Portfolio — Personal Portfolio Website
https://portfolio-shabareshkumar.vercel.app/


A production-ready personal portfolio built with Next.js, Tailwind CSS, and Framer Motion.

## ✨ Features

- Dark glassmorphism theme with purple/violet glow accents
- Infinite horizontal scroll animation for achievements (pauses on hover)
- Fully responsive design (mobile, tablet, desktop)
- Smooth scroll-triggered animations with Framer Motion
- Skill progress bars with animated fill
- Contact form UI (ready for backend integration)
- All content controlled via single config file

## 🛠 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript
- **Deployment**: Vercel

## 📝 Customization

All content is controlled via a single file: `data/config.ts`

Fill in your details:
- Personal info (name, title, email, phone, location)
- Stats (experience, projects, awards, clients)
- Skills with proficiency levels
- Projects with images and links
- Achievements with dates
- Testimonials
- Social links (LinkedIn, GitHub, Twitter, Portfolio)

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 📦 Deployment

### 1. Initialize Git

```bash
git init
git add .
git commit -m "Initial commit"
```

### 2. Push to GitHub

```bash
git remote add origin https://github.com/your-username/portfolio.git
git branch -M main
git push -u origin main
```

### 3. Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click "New Project" → Import your repository
3. Click "Deploy" — Vercel auto-detects Next.js configuration
4. Your site will be live in ~2 minutes!

## 📁 Project Structure

```
/portfolio
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Main page with all sections
│   └── globals.css         # Global styles & animations
├── components/
│   ├── Navbar.tsx          # Navigation with mobile menu
│   ├── Hero.tsx            # Hero section with profile
│   ├── About.tsx           # About section
│   ├── Skills.tsx          # Skills with progress bars
│   ├── Projects.tsx        # Project showcase grid
│   ├── Achievements.tsx    # Infinite scroll achievements
│   ├── Testimonials.tsx    # Client testimonials
│   ├── Contact.tsx         # Contact form
│   └── Footer.tsx          # Footer with social links
├── data/
│   └── config.ts           # ⭐ EDIT THIS FILE
├── public/                 # Add your images here
├── next.config.ts          # Next.js configuration
├── tailwind.config.js      # Tailwind configuration
└── package.json
```

## 🎨 Sections

1. **Navbar** - Sticky navigation with smooth scroll links
2. **Hero** - Name, title, CTA buttons, profile image, stats
3. **About** - Bio, contact info, what you do
4. **Skills** - Tech stack with animated progress bars
5. **Projects** - Portfolio showcase with images
6. **Achievements** - Horizontal auto-scroll with pause on hover
7. **Testimonials** - Client feedback cards
8. **Contact** - Contact form (UI only, ready for backend)
9. **Footer** - Social links and copyright

## ✅ Quality Checklist

- ✅ Zero build errors
- ✅ Zero TypeScript errors
- ✅ Zero console warnings
- ✅ Fully responsive
- ✅ Smooth animations
- ✅ Clean code structure
- ✅ Production-ready
- ✅ Vercel deployment ready

## 🔧 Customization Tips

### Adding Images
Place images in the `public/` folder and reference them in `config.ts`:
```typescript
profileImage: "/profile.jpg"
```

### Changing Colors
Edit `app/globals.css` to change the purple theme:
```css
/* Change purple-600 to your color */
bg-gradient-to-r from-purple-600 to-violet-600
```

### Adding More Sections
Create a new component in `components/` and import it in `app/page.tsx`

## 📄 License

Free to use for personal portfolios.
