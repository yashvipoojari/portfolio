# Personal Portfolio — Senior Software Engineer

A dark, modern portfolio built with **React 18 + TypeScript + Vite + Tailwind CSS + Framer Motion**. All personal content lives in a single JSON file — no component edits required to personalize.

---

## Stack

| Layer        | Technology                                            |
|--------------|-------------------------------------------------------|
| Framework    | React 18 + TypeScript                                 |
| Build tool   | Vite 5                                                |
| Styling      | Tailwind CSS 3 + custom CSS (index.css)               |
| Animation    | Framer Motion 11                                      |
| Icons        | lucide-react                                          |
| Font         | Kanit (Google Fonts)                                  |

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Install & run

```bash
# 1. Clone / unzip the project
cd portfolio

# 2. Install dependencies
npm install

# 3. Start dev server (hot-reload at http://localhost:5173)
npm run dev

# 4. Production build (output → dist/)
npm run build

# 5. Preview production build locally
npm run preview
```

---

## Project Structure

```
portfolio/
├── index.html                    # Entry HTML (Kanit font loaded here)
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── tsconfig.node.json
├── public/
│   └── favicon.svg
└── src/
    ├── main.tsx                  # React root
    ├── App.tsx                   # Sections composer
    ├── index.css                 # Tailwind + custom styles + marquee keyframes
    ├── data/
    │   └── portfolio.json        # ← ALL content lives here
    ├── types/
    │   └── portfolio.ts          # TypeScript interfaces
    ├── hooks/
    │   └── usePortfolio.ts       # Typed data hook
    └── components/
        ├── Navbar.tsx
        ├── SocialLinks.tsx
        ├── HeroSection.tsx
        ├── AboutSection.tsx
        ├── SkillsSection.tsx
        ├── ExperienceSection.tsx
        ├── ServicesSection.tsx
        ├── ProjectsSection.tsx
        ├── ProjectCard.tsx
        ├── TestimonialsSection.tsx
        └── Footer.tsx
```

---

## Editing Content

**All profile, experience, project, and testimonial data is in one file:**

```
src/data/portfolio.json
```

The `usePortfolio()` hook provides typed access to the data across all components. No component changes are needed for content updates.

### Profile

```jsonc
"profile": {
  "name": "Your Full Name",
  "shortName": "Nick",           // Used in hero headline and navbar
  "tagline": "One-line pitch.",
  "role": "Senior Software Engineer",
  "specialization": "Full-Stack · AI/LLM · Cloud",
  "location": "City, Country",
  "yearsOfExperience": 8,
  "bio": "Two-to-three paragraph bio...",
  "avatarSvg": "<svg>...</svg>", // Inline SVG or replace with <img> in HeroSection
  "social": {
    "github": "https://github.com/you",
    "instagram": "",             // Empty string = link hidden automatically
    "linkedin": "https://linkedin.com/in/you",
    "email": "you@example.com",
    "phone": "+1 555 000 0000",
    "website": "https://yoursite.dev"
  }
}
```

**Empty social fields are hidden automatically** — no conditional rendering needed in components.

### Skills

```jsonc
"skills": {
  "categories": [
    { "name": "Languages", "items": ["TypeScript", "Python", "Go"] },
    { "name": "Frontend",  "items": ["React", "Next.js"] }
  ]
}
```

### Experience

```jsonc
"experience": [
  {
    "company": "Acme Corp",
    "role": "Senior Engineer",
    "period": "2022 – Present",
    "location": "Remote",
    "summary": "Short summary sentence.",
    "highlights": [
      "First bullet shown",
      "Second bullet shown",
      "Third bullet shown",
      "Fourth bullet (hidden — only first 3 rendered)"
    ]
  }
]
```

### Projects

```jsonc
"projects": [
  {
    "id": "proj-1",            // Unique string ID
    "title": "Project Name",
    "subtitle": "Category",
    "description": "What it does.",
    "stack": ["React", "Python"],
    "role": "Lead Engineer",
    "year": "2024",
    "link": "https://github.com/you/repo",  // Empty = LIVE PROJECT button hidden
    "image": "",                             // Empty = dark placeholder shown
    "highlight": true                        // true = sorted to top + Featured badge
  }
]
```

## Adding a Project Image

Replace the empty `"image"` field with a URL or relative path:

```jsonc
"image": "https://your-cdn.com/screenshot.png"
// or place file in /public and use:
"image": "/my-project.png"
```

---

## Services Section

Services are currently hardcoded in `src/components/ServicesSection.tsx` (see the `TODO` comment at the top). To make them data-driven:

1. Add a `"services"` array to `portfolio.json`
2. Add `services` to `src/types/portfolio.ts`
3. Expose it from `usePortfolio()`
4. Update `ServicesSection.tsx` to read from the hook

---

## Customising Design Tokens

| Property              | Location                          |
|-----------------------|-----------------------------------|
| Background color      | `tailwind.config.js` → `bg`       |
| Chrome gradient       | `src/index.css` → `.hero-heading` |
| Accent gradient       | `src/index.css` → `.btn-gradient` |
| Marquee speed         | `src/index.css` → `animation`     |
| Card sticky offset    | `src/index.css` → `.sticky-card`  |
| Font family           | `tailwind.config.js` → `fontFamily.kanit` |

---

## Accessibility

- Reduced-motion: marquee pauses and becomes a horizontal scroll snap carousel
- All icon-only links have `aria-label`
- Sections use semantic `<section>`, `<header>`, `<footer>`, `<main>`, `<nav>`
- Keyboard-navigable navbar
- Color contrast targets WCAG AA for text on dark backgrounds

---

## Deployment

The build output is a static site (`dist/`) deployable anywhere:

```bash
npm run build
# Deploy dist/ to Vercel, Netlify, GitHub Pages, Cloudflare Pages, etc.
```

**Vercel** (recommended — zero config):

```bash
npx vercel --prod
```

---

## License

MIT — use freely for your own portfolio.
