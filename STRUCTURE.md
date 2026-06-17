# SealTech - Professional React App

A modern React application showcasing the SealTech company website with blog, portfolio, and contact features.

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx      # Navigation component
│   ├── Footer.jsx      # Footer component
│   ├── Link.jsx        # Custom link component
│   ├── Shared.jsx      # Shared utility components
│   ├── HomeComponents.jsx  # Home page sections
│   └── Blog.jsx        # Blog-related components
├── pages/              # Page-level components
│   ├── HomePage.jsx    # Home page
│   ├── BlogPage.jsx    # Blog listing page
│   ├── PostPage.jsx    # Individual blog post
│   ├── ContactPage.jsx # Contact page
│   ├── StaticPage.jsx  # Static content pages
│   └── Modals.jsx      # Modal components
├── hooks/              # Custom React hooks
│   ├── useRoute.js     # Client-side routing
│   ├── usePosts.js     # Blog posts data hook
│   ├── useInteractions.js  # Animation interactions
│   └── useTheme.js     # Theme switching hook
├── services/           # API and external services
│   └── api.js          # API endpoint functions
├── utils/              # Utility functions
│   └── navigation.js   # Navigation helpers
├── constants/          # App constants
│   └── index.js        # Constants (services, projects, team)
├── styles/             # CSS stylesheets
│   ├── main.css
│   ├── components.css
│   ├── navbar.css
│   └── pages.css
├── data/               # Static data files
│   └── blog-posts.json
├── App.jsx             # Main app component
├── main.jsx            # Entry point
└── styles.css          # Global styles
```

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:5173` to view the app.

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

## Environment Configuration

Create a `.env.local` file with the following variables:

```
VITE_API_BASE_URL=http://your-api-url
VITE_BLOG_POSTS_API_URL=http://your-api-url/api/posts
VITE_CONTACT_API_URL=http://your-api-url/api/contact
VITE_PROJECT_API_URL=http://your-api-url/api/projects
VITE_CALL_API_URL=http://your-api-url/api/calls
VITE_NEWSLETTER_API_URL=http://your-api-url/api/newsletter
```

## Features

- 🎨 Modern, responsive design
- 🌓 Dark/Light/System theme support
- 📝 Blog system with API integration
- 📱 Mobile-friendly navigation
- 🚀 Client-side routing without page reloads
- ♿ Accessible component structure
- 🎯 Intersection Observer animations
- 📧 Contact and project request forms

## Technology Stack

- **React 19** - UI framework
- **Vite** - Build tool and dev server
- **Modern CSS** - Styling with CSS Grid and Flexbox
- **Fetch API** - Client-side API calls

## API Integration

The app expects the following API endpoints:

- `GET /api/posts` - Fetch blog posts (falls back to `data/blog-posts.json`)
- `POST /api/contact` - Submit contact form
- `POST /api/projects` - Submit project inquiry
- `POST /api/calls` - Schedule a call
- `POST /api/newsletter` - Subscribe to newsletter

## Component Architecture

### Page Components
- **HomePage**: Hero section, services, portfolio, team, latest blog posts
- **BlogPage**: Blog listing with sort functionality
- **PostPage**: Individual blog post with related articles
- **ContactPage**: Contact form and information
- **StaticPage**: Dynamic static pages (About, Privacy, etc.)

### UI Components
- **Navbar**: Navigation with theme toggle
- **Footer**: Footer with links
- **Link**: Custom link for client-side navigation
- **Blog components**: Card, newsletter, contact form
- **Modals**: Project and call request modals

### Hooks
- **useRoute**: Client-side routing state
- **usePosts**: Blog posts data management
- **useInteractions**: Intersection Observer animations
- **useTheme**: Theme management with localStorage

## License

© SealTech 2026. All rights reserved.
