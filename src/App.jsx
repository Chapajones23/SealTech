import { useState, useEffect } from "react";
import { useRoute } from "./hooks/useRoute.js";
import { usePosts } from "./hooks/usePosts.js";
import { useInteractions } from "./hooks/useInteractions.js";
import { Navbar } from "./components/Navbar.jsx";
import { Footer } from "./components/Footer.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { BlogPage } from "./pages/BlogPage.jsx";
import { PostPage } from "./pages/PostPage.jsx";
import { ContactPage } from "./pages/ContactPage.jsx";
import { PrivacyPage } from "./pages/PrivacyPage.jsx";
import { AboutPage } from "./pages/AboutPage.jsx";
import { CareersPage } from "./pages/CareersPage.jsx";
import { PressPage } from "./pages/PressPage.jsx";
import { SecurityPage } from "./pages/SecurityPage.jsx";
import { TermsPage } from "./pages/TermsPage.jsx";
import { ProjectModal, CallModal } from "./pages/Modals.jsx";
import "./styles/main.css";

function App() {
  const route = useRoute();
  const postsState = usePosts();
  const [modal, setModal] = useState(null);

  useInteractions();

  const path = route.path.replace(/\/$/, "") || "/";
  const p = (a, b) => path === a || path === b;

  useEffect(() => {
    let title = "SealTech | Software Development & Technology Solutions";
    let description = "SealTech designs and builds modern web, mobile, and enterprise software systems. Engineering excellence for Africa's digital future.";

    if (p("/about", "/about.html")) {
      title = "About SealTech | Software Engineering Tanzania";
      description = "SealTech is a leading software engineering company in Dar es Salaam, Tanzania. We build robust web, mobile, and enterprise systems.";
    } else if (p("/blog", "/blog.html")) {
      title = "SealTech Insights | Software Engineering Blog";
      description = "Practical engineering advice, deep dives, tutorials, and insights on modern web development, Flutter, CI/CD, and database design.";
    } else if (p("/post", "/post.html")) {
      const slug = route.query.get("slug");
      const post = postsState.posts.find((item) => item.slug === slug);
      if (post) {
        title = `${post.title} | SealTech Insights`;
        description = post.excerpt;
      } else {
        title = "SealTech Insights";
        description = "Practical engineering advice and insights from the SealTech team.";
      }
    } else if (p("/contact", "/contact.html")) {
      title = "Contact SealTech | Custom Software Development";
      description = "Let's build something great. Get in touch with our team for web development, mobile apps, and custom enterprise software.";
    } else if (p("/careers", "/careers.html")) {
      title = "Careers at SealTech | Join Our Engineering Team";
      description = "We're hiring! Join SealTech in Dar es Salaam or remotely to build the next generation of African technology solutions.";
    } else if (p("/press", "/press.html")) {
      title = "Press & Media Kit | SealTech";
      description = "Press releases, news coverage, company facts, and media resources for SealTech software engineering.";
    } else if (p("/security", "/security.html")) {
      title = "Security Policy & Practices | SealTech";
      description = "Learn how SealTech secures client applications, manages data, and handles vulnerability reports.";
    } else if (p("/privacy", "/privacy.html")) {
      title = "Privacy Policy | SealTech";
      description = "We respect your data. Read our privacy policy to understand how we collect, use, and protect your information.";
    } else if (p("/terms", "/terms.html")) {
      title = "Terms of Service | SealTech";
      description = "Read our plain-language terms and conditions for development projects, licensing, and client partnership.";
    }

    // Update document title
    document.title = title;

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", description);

    // Update or create canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    const slugQuery = route.query.get("slug");
    const canonicalPath = slugQuery ? `${path}?slug=${slugQuery}` : path;
    canonicalLink.setAttribute("href", `https://sealtech.co.tz${canonicalPath}`);
  }, [path, route.query, postsState.posts]);

  return (
    <>
      <Navbar onOpenProject={() => setModal("project")} scrolled={path !== "/"} />
      {p("/blog", "/blog.html") ? (
        <BlogPage postsState={postsState} />
      ) : p("/post", "/post.html") ? (
        <PostPage postsState={postsState} slug={route.query.get("slug")} />
      ) : p("/contact", "/contact.html") ? (
        <ContactPage />
      ) : p("/privacy", "/privacy.html") ? (
        <PrivacyPage />
      ) : p("/about", "/about.html") ? (
        <AboutPage />
      ) : p("/careers", "/careers.html") ? (
        <CareersPage />
      ) : p("/press", "/press.html") ? (
        <PressPage />
      ) : p("/security", "/security.html") ? (
        <SecurityPage />
      ) : p("/terms", "/terms.html") ? (
        <TermsPage />
      ) : (
        <HomePage postsState={postsState} onOpenProject={() => setModal("project")} onOpenCall={() => setModal("call")} />
      )}
      <Footer />
      {modal === "project" && <ProjectModal onClose={() => setModal(null)} />}
      {modal === "call" && <CallModal onClose={() => setModal(null)} />}
    </>
  );
}

export default App;
