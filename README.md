# SealTech Website

Tovuti kamili ya kampuni ya SealTech — iliyojengwa upya kutoka mwanzo.  
Lightweight, fast, SEO-optimized, na dark mode kamili.

---

## Muundo wa Mradi (File Structure)

```
sealtech/
├── index.html              # Ukurasa mkuu (Homepage)
├── about.html              # Kuhusu SealTech
├── blog.html               # Orodha ya makala
├── post.html               # Ukurasa wa makala moja
├── contact.html            # Mawasiliano + ramani
├── robots.txt              # Mwongozo kwa search engines
├── sitemap.xml             # Sitemap ya SEO
├── favicon.ico             # Ikoni ya kivinjari
├── favicon.jpg             # Ikoni mbadala
│
├── assets/
│   ├── css/
│   │   └── main.css        # Stylesheet moja (42KB) — pagesall zote
│   ├── js/
│   │   ├── theme.js        # Dark/light mode controller
│   │   ├── main.js         # Navbar, counters, form, Leaflet map
│   │   ├── navigation.js   # Active section tracking (homepage)
│   │   └── pagination.js   # Blog data, filtering, pagination
│   ├── icons/
│   │   ├── favicon-32.png
│   │   └── favicon-180.png
│   └── logo/
│       ├── logo.svg        # Logo (SVG — bora zaidi)
│       └── logo.jpg        # Logo mbadala (JPG)
│
└── data/
    └── blog-posts.json     # Makala 6 za blog (data)
```

---

## Kurasa na Ukubwa

| Faili | Ukubwa |
|-------|--------|
| `index.html` | 31 KB |
| `about.html` | 15 KB |
| `blog.html` | 8 KB |
| `contact.html` | 18 KB |
| `post.html` | 13 KB |
| `assets/css/main.css` | 42 KB |
| `assets/js/` (jumla) | ~24 KB |
| **Jumla yote** | **~222 KB** |

---

## Vipengele Vikuu (Key Features)

### 🌗 Dark Mode
- Inafanya kazi mara moja bila "flash" (FOUC-free)
- Inahifadhiwa kwa `localStorage` — inakumbuka chaguo lako
- Inagundua mipangilio ya mfumo (OS preference) kiotomatiki
- Kitufe cha kubadilisha kiko kwenye navbar kila ukurasa

### ⚡ Utendaji (Performance)
- CSS moja tu — hakuna CSS nyingi wala preprocessor
- JavaScript rahisi — hakuna jQuery, hakuna framework nzito
- Picha zinapakia kwa `loading="lazy"` isipokuwa logo ya juu
- Leaflet map inapakiwa kwenye `contact.html` tu
- CSS `IntersectionObserver` kwa animations — hakuna scroll listeners

### 🔍 SEO
Kila ukurasa una:
- `<title>` wa kipekee
- `<meta description>` iliyoandikwa vizuri
- `<link rel="canonical">` sahihi
- Open Graph tags (Facebook, LinkedIn)
- Twitter Card meta
- JSON-LD Structured Data:
  - `index.html` → `Organization` + `WebSite`
  - `about.html` → `AboutPage` + microdata ya timu (`itemscope`)
  - `blog.html` → `Blog`
  - `contact.html` → `LocalBusiness` + `FAQPage`
- `robots.txt` na `sitemap.xml`

### 📱 Responsive Design
- Inafanya kazi vizuri kwenye simu, kompyuta kibao, na kompyuta
- Mobile navigation menu iliyojengwa ndani
- Grid inabadilika kiotomatiki kwa skrini ndogo

---

## Jinsi ya Kutumia (Quick Start)

### Kuendesha Locally
Hakuna installation inayohitajika. Fungua tu:

```bash
# Tumia Python server rahisi
cd sealtech/
python3 -m http.server 8080

# Kisha fungua kivinjari
open http://localhost:8080
```

Au tumia Live Server ya VS Code.

> ⚠️ **Muhimu:** Usifungue `index.html` moja kwa moja kwa `file://` — blog posts haitapakia vizuri. Tumia server ya ndani (localhost).

### Kupeleka Mtandaoni (Deployment)
Mradi huu ni static — unaweza kupeleka moja kwa moja kwenye:
- **Netlify** — drag & drop folda
- **Vercel** — `vercel deploy`
- **GitHub Pages** — push to `gh-pages` branch
- **VPS/cPanel** — upload faili zote via FTP

---

## Kubadilisha Maudhui (Customization)

### Maelezo ya Kampuni
Badilisha maelezo katika `index.html`:
- **Hero tagline:** Tafuta `"We build software"` 
- **Stats:** Tafuta `data-count` attributes
- **Services:** Badilisha kadi za huduma kwenye `#services`
- **Portfolio:** Badilisha kadi kwenye `#portfolio`

### Timu (About Page)
Fungua `about.html` na ubadilishe:
- Majina ya wanachama wa timu
- Vyeo (job titles)
- Biodata
- Viungo vya mitandao ya kijamii

### Mawasiliano
Fungua `contact.html` na ubadilishe placeholder zifuatazo:
```html
<!-- Anwani ya barua pepe -->
hello@sealtech.co.tz  →  barua-pepe-yako@kampuni.co.tz

<!-- Nambari ya simu -->
+255 700 000 000  →  +255 7XX XXX XXX

<!-- Ramani: coordinates za Dar es Salaam -->
lat: -6.778872, lng: 39.239753  →  coordinates zako
```

### Rangi za Kivuli (Colors)
Rangi zote ziko kwenye `assets/css/main.css` chini ya `:root {}`:

```css
:root {
  --blue:   #2563EB;   /* Rangi kuu */
  --cyan:   #0891B2;   /* Rangi ya pili */
  --purple: #7C3AED;   /* Rangi ya tatu */
  --green:  #059669;   /* Rangi ya mafanikio */
}
```

### Fonti
Tovuti inatumia **DM Sans** — rahisi kubadilisha:
1. Nenda [fonts.google.com](https://fonts.google.com)
2. Chagua fonti yako
3. Badilisha kiungo cha Google Fonts kwenye kila `<head>`
4. Badilisha `--font` kwenye `main.css`

### Blog Posts
Badilisha makala kwenye `data/blog-posts.json`. Muundo wa makala moja:

```json
{
  "id": 7,
  "slug": "jina-la-makala",
  "title": "Kichwa cha Makala Yako",
  "excerpt": "Muhtasari mfupi wa makala...",
  "author": "Jina la Mwandishi",
  "authorRole": "Cheo cha Mwandishi",
  "date": "2026-07-01",
  "readTime": "5 min read",
  "category": "Engineering",
  "tags": ["Tag1", "Tag2"],
  "featured": false
}
```

**Makategoria yanayokubaliwa:** `Engineering`, `Mobile`, `DevOps`, `Culture`

---

## Kuboresha Fomu ya Mawasiliano

Kwa sasa fomu inafanya kazi ya uonyesho (demo) tu. Ili kuifanya ifanye kazi kweli:

**Chaguo 1 — Formspree (bure):**
```html
<form id="contactForm" action="https://formspree.io/f/FORM-ID" method="POST">
```

**Chaguo 2 — Backend yako mwenyewe:**
Badilisha `setTimeout` kwenye `assets/js/main.js`:
```javascript
// Badilisha hii:
setTimeout(() => { ... }, 1200);

// Kuwa hivi:
fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
}).then(res => { ... });
```

---

## Teknolojia Zilizotumika

| Teknolojia | Matumizi |
|-----------|---------|
| HTML5 Semantic | Muundo wa kurasa |
| CSS Variables | Theming (light/dark) |
| Vanilla JavaScript | Interactivity yote |
| [Leaflet.js](https://leafletjs.com) | Ramani ya mawasiliano |
| [DM Sans](https://fonts.google.com/specimen/DM+Sans) | Fonti kuu |
| JSON | Data ya blog |
| IntersectionObserver API | Scroll animations |

**Hakuna:**
- ❌ jQuery
- ❌ Bootstrap
- ❌ React / Vue / Angular
- ❌ npm / node_modules
- ❌ Build tools (Webpack, Vite, dll)

---

## Mambo Yanayohitaji Kubadilishwa (TODOs)

- [ ] Badilisha `hello@sealtech.co.tz` na barua pepe halisi
- [ ] Badilisha `+255 700 000 000` na nambari halisi
- [ ] Ongeza viungo vya kweli vya Twitter, LinkedIn, GitHub
- [ ] Peleka fomu kwa backend au Formspree
- [ ] Ongeza maudhui kamili ya makala za blog (`post.html`)
- [ ] Badilisha picha za portfolio na screenshots halisi
- [ ] Ongeza Google Analytics au Plausible analytics

---

## Muundo wa Rangi (Color Palette)

| Jina | Hex | Matumizi |
|------|-----|---------|
| Blue | `#2563EB` | Rangi kuu, vitufe, viungo |
| Blue Dark | `#1D4ED8` | Hover states |
| Cyan | `#0891B2` | Highlights za pili |
| Purple | `#7C3AED` | Makategoria ya mobile |
| Green | `#059669` | Mafanikio, DevOps |
| Orange | `#EA580C` | Onyo, accent |

**Light Mode:** Mandharinyuma `#F8FAFC`, Maandishi `#0F172A`  
**Dark Mode:** Mandharinyuma `#0B0F1A`, Maandishi `#F0F6FF`

---

## Leseni

Haki zote zimehifadhiwa © 2026 SealTech Ltd.  
Msimbo huu umetengezwa kwa matumizi ya SealTech pekee.

---

*Iliyotengenezwa na SealTech Engineering Team — Dar es Salaam, Tanzania 🇹🇿*
