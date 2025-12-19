# Senior Flutter & Frontend Developer Portfolio

A modern, professional, and visually stunning portfolio website built with React, TypeScript, and Tailwind CSS.

---

## 🎨 Design System

### Theme
- **Style**: Dark & Bold
- **Primary Color**: Purple (#8B5CF6 / HSL 262 83% 58%)
- **Background**: Deep dark tones (HSL 240 10% 4%)
- **Typography**: Inter (sans-serif) + JetBrains Mono (code)

### Custom Utilities
- `.text-gradient` - Purple gradient text effect
- `.glow` / `.glow-sm` - Purple glow box shadows
- `.glass` - Glassmorphism effect with backdrop blur
- `.gradient-border` - Animated gradient border effect

---

## 📄 Page Structure

### 1. Navbar (`src/components/portfolio/Navbar.tsx`)
- Fixed position with glassmorphism on scroll
- Responsive with mobile hamburger menu
- Smooth scroll navigation to sections
- Resume download button

### 2. Hero Section (`src/components/portfolio/HeroSection.tsx`)
- Animated gradient orbs in background
- Floating tech keywords (Flutter, React, BLoC, etc.)
- Typing-style entrance animations
- "Available for opportunities" badge
- Primary CTA: View My Work
- Secondary CTA: Download Resume
- Social links (GitHub, LinkedIn, Email)
- Scroll indicator animation

### 3. About Section (`src/components/portfolio/AboutSection.tsx`)
- Professional bio (2 paragraphs)
- 4 value cards with icons:
  - Clean Architecture
  - Performance-Driven
  - Scalable Solutions
  - Quality First
- Hover effects and gradient overlays

### 4. Skills Section (`src/components/portfolio/SkillsSection.tsx`)
- 4 skill categories:
  - Flutter / Mobile (95% expertise)
  - Frontend / React (85% expertise)
  - Databases (90% expertise)
  - DevOps & Tools (80% expertise)
- Animated progress bars on scroll
- Color-coded category indicators

### 5. Projects Section (`src/components/portfolio/ProjectsSection.tsx`)
Case study format for each project:

#### Project 1: Hospital Management System
- **Type**: Enterprise Automation Platform
- **Features**: Employee management, patient records, lab systems, real-time notifications
- **Tech**: Flutter, BLoC, WebSocket, SQLite, Clean Architecture
- **Impact**: 40% reduction in operational delays

#### Project 2: Pharmacy Application
- **Type**: Medication Ordering Platform
- **Features**: Smart search, secure ordering, order tracking
- **Tech**: Flutter, Provider, Hive, REST API
- **Impact**: 60% faster ordering, 75% fewer errors

#### Project 3: Warehouse Automation System
- **Type**: Inventory Optimization Platform
- **Features**: Real-time tracking, automated workflows, live dashboards
- **Tech**: Flutter, GetX, SQLite, WebSocket, Docker
- **Impact**: 85% error reduction, 30% efficiency increase

### 6. Contact Section (`src/components/portfolio/ContactSection.tsx`)
- Resume download button (prominent)
- Direct contact links:
  - Email
  - GitHub
  - LinkedIn
  - Location (Open to Remote)

### 7. Footer (`src/components/portfolio/Footer.tsx`)
- Logo/brand
- Quick navigation links
- Social media icons
- Copyright

---

## ✨ Animations & Interactions

Built with **Framer Motion**:
- Scroll-triggered fade-in and slide-up animations
- Hero section with pulsing gradient orbs
- Floating tech keywords with gentle bob animation
- Skill bars animate when scrolled into view
- Project cards with staggered entrance
- Navbar glassmorphism transition on scroll
- Mobile menu slide animations
- Scroll indicator bounce animation

---

## 🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| React 18 | UI Framework |
| TypeScript | Type Safety |
| Tailwind CSS | Styling |
| Framer Motion | Animations |
| Lucide React | Icons |
| shadcn/ui | UI Components |
| Vite | Build Tool |

---

## 📁 File Structure

```
src/
├── components/
│   ├── portfolio/
│   │   ├── Navbar.tsx
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── Footer.tsx
│   └── ui/
│       └── ... (shadcn components)
├── pages/
│   └── Index.tsx
├── index.css (design system tokens)
└── main.tsx

tailwind.config.ts (extended theme with custom animations)
index.html (SEO optimized)
```

---

## 🔧 Customization

### To personalize this portfolio:

1. **Personal Info**: Update name, title, and bio in `HeroSection.tsx` and `AboutSection.tsx`

2. **Social Links**: Update URLs in `HeroSection.tsx`, `ContactSection.tsx`, and `Footer.tsx`

3. **Resume**: Add your PDF to `/public/resume.pdf`

4. **Projects**: Modify the `projects` array in `ProjectsSection.tsx`

5. **Skills**: Adjust skill levels in `SkillsSection.tsx`

6. **Colors**: Modify `--primary` in `src/index.css` to change accent color

---

## 📱 Responsive Design

- **Mobile**: Stacked layouts, hamburger menu, optimized touch targets
- **Tablet**: 2-column grids where appropriate
- **Desktop**: Full layout with all visual effects

---

## 🚀 SEO Features

- Semantic HTML structure (`<main>`, `<section>`, `<nav>`, `<footer>`)
- Optimized meta tags (title, description, keywords)
- Open Graph tags for social sharing
- Canonical URL
- Single H1 per page
- Descriptive alt attributes ready for images

---

## 📦 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

---

## 🔗 Project Info

**URL**: https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID

## How can I edit this code?

**Use Lovable**: Visit the [Lovable Project](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and start prompting.

**Use your preferred IDE**: Clone this repo and push changes.

```sh
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
npm i
npm run dev
```

## How can I deploy this project?

Open [Lovable](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and click on Share -> Publish.

## Custom Domain

Navigate to Project > Settings > Domains and click Connect Domain.
Read more: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)

---

## 📄 License

This portfolio template is free to use and customize for personal use.
