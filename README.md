# SealTech Website

Corporate website for **SealTech** — a software engineering company based in Dar es Salaam, Tanzania.  
Built with React 19 + Vite 7. No CSS framework, no router library, no build complexity.

---

## Tech Stack

| | |
|---|---|
| **Framework** | React 19 |
| **Build tool** | Vite 7 |
| **Styling** | Vanilla CSS (CSS variables, dark mode) |
| **Routing** | Custom SPA routing via `useRoute` hook |
| **Map** | Leaflet.js (contact page only) |
| **Data** | JSON file (`src/data/blog-posts.json`) |

No jQuery · No Bootstrap · No React Router · No npm build complexity

---

## Project Structure

```
SealTech/
├── index.html
├── vite.config.js
├── package.json
│
├── public/
│   ├── favicon.ico / favicon.jpg
│   ├── data/
│   │   └── blog-posts.json
│   └── assets/
│       ├── css/          # Legacy static CSS (unused by React app)
│       ├── js/           # Legacy static JS (unused by React app)
│       └── images/
│           ├── team/
│           └── blog/
│
└── src/
    ├── main.jsx          # React entry point
    ├── App.jsx           # Root component + routing
    ├── styles.css        # Global reset/base
    │
    ├── pages/
    │   ├── HomePage.jsx
    │   ├── AboutPage.jsx
    │   ├── CareersPage.jsx
    │   ├── PressPage.jsx
    │   ├── SecurityPage.jsx
    │   ├── TermsPage.jsx
    │   ├── PrivacyPage.jsx
    │   ├── BlogPage.jsx
    │   ├── PostPage.jsx
    │   ├── ContactPage.jsx
    │   └── Modals.jsx        # ProjectModal, CallModal
    │
    ├── components/
    │   ├── Navbar.jsx
    │   ├── Footer.jsx
    │   ├── HomeComponents.jsx  # TechStack, Services, Portfolio, Team, Why
    │   ├── Blog.jsx            # BlogCard, ContactForm, LatestInsights
    │   ├── Shared.jsx          # SectionHeader, Loading, ErrorState, Field
    │   └── Link.jsx            # SPA-aware <Link> + <Logo>
    │
    ├── hooks/
    │   ├── useRoute.js         # SPA routing (hash + pathname)
    │   ├── usePosts.js         # Blog post fetching + state
    │   ├── useTheme.js         # Dark/light/system theme
    │   └── useInteractions.js  # IntersectionObserver animations
    │
    ├── services/
    │   └── api.js              # Blog data fetching
    │
    ├── utils/
    │   └── navigation.js       # sortPosts, formatDate helpers
    │
    ├── constants/
    │   └── index.js            # SERVICES, PROJECTS, TEAM, THEME_MODES
    │
    ├── data/
    │   └── blog-posts.json     # 6 blog posts
    │
    └── styles/
        ├── main.css            # Core styles, dark mode, variables
        ├── pages.css           # Page-specific styles
        ├── navbar.css          # Navbar styles
        └── components.css      # Shared component styles
```

---

## Pages

| Route | Page |
|---|---|
| `/` | Homepage — hero, services, portfolio, team, blog preview |
| `/about` | About — mission, values, team |
| `/careers` | Careers — open positions, perks |
| `/press` | Press — media coverage, press kit |
| `/security` | Security — practices, vulnerability disclosure |
| `/terms` | Terms of Service |
| `/privacy` | Privacy Policy |
| `/blog` | Blog listing — filter by category, pagination |
| `/post?slug=...` | Individual blog post |
| `/contact` | Contact form + Leaflet map |

All routes also work with `.html` suffix (e.g. `/about.html`).

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) v18 or later
- npm (comes with Node.js)

### Install & Run

```bash
# 1. Clone the repo
git clone https://github.com/your-org/sealtech.git
cd sealtech

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

The app will be available at `http://localhost:5173` (or the next available port).  
The dev server is also exposed on your local network (`--host 0.0.0.0`).

### Build for Production

```bash
npm run build
```

Output goes to `dist/`. Preview the production build locally:

```bash
npm run preview
```

---

## Deployment

The build output in `dist/` is a static site — deploy anywhere:

| Platform | How |
|---|---|
| **Netlify** | Drag & drop `dist/` or connect repo (build command: `npm run build`) |
| **Vercel** | `vercel deploy` — auto-detects Vite |
| **GitHub Pages** | Push `dist/` to `gh-pages` branch |
| **VPS / cPanel** | Upload contents of `dist/` via FTP |

> For SPA routing to work on static hosts, configure the server to redirect all paths to `index.html`.  
> On Netlify add a `public/_redirects` file: `/* /index.html 200`

---

## Customisation

### Company info
- **Services / Projects / Team** — edit `src/constants/index.js`
- **Contact details** — edit `src/pages/ContactPage.jsx`
- **Map coordinates** — update Leaflet lat/lng in `ContactPage.jsx`

### Blog posts
Edit `src/data/blog-posts.json`. Each post:

```json
{
  "id": 7,
  "slug": "your-post-slug",
  "title": "Post Title",
  "excerpt": "Short summary...",
  "author": "Author Name",
  "authorRole": "Role",
  "date": "2026-07-01",
  "readTime": "5 min read",
  "category": "Engineering",
  "tags": ["Tag1", "Tag2"],
  "featured": false
}
```

Valid categories: `Engineering` · `Mobile` · `DevOps` · `Culture`

### Theme colours
All colours are CSS variables in `src/styles/main.css`:

```css
:root {
  --blue:   #2563EB;
  --cyan:   #0891B2;
  --purple: #7C3AED;
  --green:  #059669;
}
```

### Contact form
The form is currently a demo. To wire it up:

**Formspree (free):**
```jsx
// src/components/Blog.jsx — ContactForm
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**Custom API:**
```js
// Replace the setTimeout in ContactForm with:
fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) })
```

---

## Dark Mode

- Defaults to OS preference (`prefers-color-scheme`)
- Toggle in the navbar — persisted to `localStorage`
- No flash on load (theme applied before paint via `useTheme` hook)

---

## License

© 2026 SealTech Ltd. All rights reserved.  
*Dar es Salaam, Tanzania 🇹🇿*
