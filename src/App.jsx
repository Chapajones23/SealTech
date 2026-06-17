import { useState } from "react";
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
