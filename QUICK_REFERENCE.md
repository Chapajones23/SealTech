# SealTech Project Quick Reference

## Project Structure at a Glance

### Source Code (`src/`)
```
src/
├── App.jsx                # Main app component (routing hub)
├── main.jsx               # React entry point
├── styles.css             # Global styles
├── components/            # Reusable UI components
├── pages/                 # Full page components
├── hooks/                 # Custom React hooks
├── services/              # API client functions
├── utils/                 # Helper functions
├── constants/             # App-wide constants
├── styles/                # CSS files
└── data/                  # Static data
```

## Quick Commands

```bash
# Development
npm run dev              # Start dev server at http://localhost:5173

# Production
npm run build            # Build for production
npm run preview          # Preview production build

# Environment Setup
cp .env.example .env.local   # Create local env file
```

## Key Files & Their Purpose

| File | Purpose |
|------|---------|
| `src/App.jsx` | Route handling, modal state, main layout |
| `src/components/Navbar.jsx` | Navigation with theme toggle |
| `src/pages/HomePage.jsx` | Home page with all sections |
| `src/hooks/useRoute.js` | Client-side routing state |
| `src/services/api.js` | API endpoint functions |
| `src/constants/index.js` | SERVICES, PROJECTS, TEAM data |
| `src/utils/navigation.js` | Helper functions for navigation/formatting |

## Component Tree

```
App (Routing & Modals)
├── Navbar
├── HomePage
│   ├── TechStack
│   ├── Services
│   ├── Portfolio
│   ├── Developers
│   ├── Why
│   ├── Team
│   └── LatestInsights
├── BlogPage
│   └── BlogCard[]
├── PostPage
│   └── BlogCard[] (related)
├── ContactPage
│   ├── ContactForm
│   └── ContactInfo
├── StaticPage
├── ProjectModal
├── CallModal
└── Footer
```

## Adding New Features

### New Page
1. Create file in `src/pages/PageName.jsx`
2. Import in `src/App.jsx`
3. Add routing logic in App component

### New Component
1. Create file in `src/components/ComponentName.jsx`
2. Export function with Props
3. Import in pages or other components

### New Hook
1. Create file in `src/hooks/useHookName.js`
2. Export function with useEffect/useState as needed
3. Use in components

### New Utility Function
1. Add to `src/utils/navigation.js`
2. Export the function
3. Import where needed

### New API Endpoint
1. Add function to `src/services/api.js`
2. Update `.env.example` with new endpoint
3. Use in components/hooks

## Environment Variables

Create `.env.local`:
```
VITE_API_BASE_URL=http://localhost:3000
VITE_BLOG_POSTS_API_URL=http://localhost:3000/api/posts
VITE_CONTACT_API_URL=http://localhost:3000/api/contact
VITE_PROJECT_API_URL=http://localhost:3000/api/projects
VITE_CALL_API_URL=http://localhost:3000/api/calls
VITE_NEWSLETTER_API_URL=http://localhost:3000/api/newsletter
```

## Common Imports

```javascript
// Components
import { Link, Logo } from "@/components/Link.jsx";
import { Navbar } from "@/components/Navbar.jsx";
import { SectionHeader } from "@/components/Shared.jsx";

// Hooks
import { useRoute } from "@/hooks/useRoute.js";
import { usePosts } from "@/hooks/usePosts.js";
import { useTheme } from "@/hooks/useTheme.js";

// Utils
import { navigate, formatDate, sortPosts } from "@/utils/navigation.js";

// API
import { fetchPosts, submitContact } from "@/services/api.js";

// Constants
import { SERVICES, TEAM } from "@/constants/index.js";
```

## Useful CSS Classes

- `.hero` - Hero section styling
- `.btn-primary` - Primary button style
- `.gradient-text` - Gradient text effect
- `.container` - Content container with max-width
- `.blog-grid` - Blog card grid layout
- `.section-header` - Section title styling
- `data-animate` - Intersection observer animations

## Browser Support

- Modern browsers with ES6+ support
- React 19+
- No IE support

## Performance Considerations

- Uses Intersection Observer for animations
- Lazy loads blog posts data
- Implements client-side routing (no full page reloads)
- CSS is split across multiple files for modularity

## File Size

Current structure allows for easy code splitting with Vite:
- Main app bundle minimal (just routing)
- Components bundle for UI
- Pages bundle for routes
- API calls bundled with services

---

**Last Updated:** 2026-06-15
**Version:** 2.0 (Restructured)
