# SealTech Website

> Engineering excellence for Africa's digital future.

Modern, production-ready website for **SealTech** — a software development & technology solutions company based in Dar es Salaam, Tanzania.

---

## Project Structure

```
SealTech/
│
├── public/                         # Static assets served directly by browser
│   ├── images/                     # Compressed images (WebP preferred)
│   ├── icons/                      # Small icons & favicons
│   │   └── favicon.jpg
│   ├── logos/                      # Company logos
│   │   ├── logo.svg                # Primary logo (vector)
│   │   └── logo.jpg                # Logo fallback (raster)
│   └── illustrations/              # Graphics & decorative SVGs
│
├── src/                            # Source code
│   ├── pages/                      # Main HTML pages
│   │   ├── index.html              # Landing/home page
│   │   ├── about.html              # About Us
│   │   ├── blog.html               # Blog listing (paginated)
│   │   ├── post.html               # Individual blog post
│   │   └── contact.html            # Contact page + Leaflet map
│   │   ├── about.css               # About page styles
│   │   ├── blog.css                # Blog page styles
│   │   └── contact.css             # Contact page styles
│   │
│   ├── layouts/                    # Page layout templates
│   │   ├── main-layout.html        # Base layout (navbar + footer)
│   │   └── blog-layout.html        # Blog layout (+ pagination scripts)
│   │
│   ├── components/                 # Reusable UI components
│   │   ├── navbar/
│   │   │   ├── navbar.html         # Navigation markup
│   │   │   └── navbar.css          # Navigation styles
│   │   ├── footer/
│   │   │   ├── footer.html         # Footer markup
│   │   │   └── footer.css          # Footer styles
│   │   ├── cards/
│   │   │   ├── service-card.html   # Service card template
│   │   │   ├── blog-card.html      # Blog card template
│   │   │   └── project-card.html   # Portfolio card template
│   │   └── buttons/
│   │       └── button.css          # All button variants
│   │
│   ├── sections/                   # Landing page sections
│   │   ├── hero/
│   │   │   ├── hero.html
│   │   │   └── hero.css
│   │   ├── services/
│   │   │   ├── services.html
│   │   │   ├── techstack.html
│   │   │   └── services.css
│   │   ├── portfolio/
│   │   │   └── portfolio.html
│   │   ├── developers/
│   │   │   ├── developers.html
│   │   │   └── why-sealtech.html
│   │   ├── blog-preview/           # (rendered dynamically by blog.js)
│   │   └── team/
│   │       ├── team.html
│   │       └── cta.html
│   │
│   ├── styles/                     # Global CSS modules
│   │   ├── main.css                # Master import file (@import all below)
│   │   ├── variables.css           # CSS custom properties (colors, spacing, etc.)
│   │   ├── reset.css               # CSS reset + base element styles
│   │   ├── layout.css              # Container, grid, section helpers
│   │   └── animations.css          # Scroll animations + responsive breakpoints
│   │
│   ├── scripts/                    # JavaScript modules
│   │   ├── main.js                 # Entry point: init + code typer + counters
│   │   ├── navigation.js           # Navbar scroll + hamburger + active links
│   │   ├── animations.js           # Scroll animations + parallax + floating shapes
│   │   ├── pagination.js           # Blog pagination logic
│   │   ├── blog.js                 # Blog renderer (renderLatestInsights, renderBlogPage, renderPostPage)
│   │   ├── contact.js              # Leaflet map + form validation + char counter
│   │   └── utils.js                # animateCounter and shared helpers
│   │
│   ├── data/                       # Static data files
│   │   ├── blog-posts.js           # BLOG_POSTS array (6 posts)
│   │   └── team.json               # Team member data
│   │
│   ├── config/                     # Site configuration
│   │   └── site-config.js          # URLs, contact info, SEO defaults, map coords
│   │
│   └── seo/                        # SEO files
│       ├── sitemap.xml             # XML sitemap (all pages + blog posts)
│       ├── robots.txt              # Crawler rules
│       ├── meta/
│       │   ├── home-meta.html      # Home page OG + Twitter meta tags
│       │   ├── about-meta.html     # About page meta tags
│       │   └── services-meta.html  # Services page meta tags
│       └── structured-data/
│           ├── organization.json   # Schema.org Organization
│           ├── breadcrumbs.json    # Schema.org BreadcrumbList
│           └── faq.json            # Schema.org FAQPage
│
├── dist/                           # Production build output
│
├── README.md
└── package.json
```

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| HTML | Semantic HTML5 |
| CSS | Custom Properties, CSS Modules |
| JS | Vanilla ES6+ (no framework) |
| Fonts | Syne (headings) + DM Sans (body) via Google Fonts |
| Maps | Leaflet.js + OpenStreetMap (no API key) |
| Icons | Inline SVG |

---

## Design Tokens (`src/styles/variables.css`)

| Token | Value | Use |
|-------|-------|-----|
| `--primary` | `#2563EB` | Buttons, links, highlights |
| `--accent` | `#06B6D4` | Gradient accents |
| `--bg` | `#F8FAFC` | Page background |
| `--text-dark` | `#0F172A` | Headings |
| `--radius` | `12px` | Cards, inputs |

---

## Location

**NaiZuri Haute Couture, Kijitonyama, Dar es Salaam**  
Plus Code: `66CQ+FW5`  
Coordinates: `-6.778872, 39.239753`

---

## Team

| Name | Role |
|------|------|
| Michael Chapa | CEO & Full-Stack Developer |
| Lusajo JOB | CFO & Payment Integration Engineer |
| Alfred Kalinga | COO & Cloud Engineer |

---

*Kazi hii ilifanywa kwa moyo wa Afrika. 🌍*