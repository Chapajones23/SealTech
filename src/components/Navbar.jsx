import { useState, useEffect } from "react";
import { useTheme } from "../hooks/useTheme.js";
import { Link, Logo } from "./Link.jsx";
import { useRoute } from "../hooks/useRoute.js";

export function Navbar({ onOpenProject, scrolled }) {
  const [open, setOpen] = useState(false);
  const [themeMode, nextTheme] = useTheme();
  const { path } = useRoute();
  const [hash, setHash] = useState(() => window.location.hash);

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  // Highlight nav link for section currently in view while scrolling
  useEffect(() => {
    if (path !== "/") return;
    const ids = ["services", "portfolio", "developers"];
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!els.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setHash(`#${id}`);
            history.replaceState(null, "", `#${id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    els.forEach((el) => obs.observe(el));
    return () => els.forEach((el) => obs.unobserve(el));
  }, [path]);

  const isActive = (href) => {
    const url = new URL(href, window.location.origin);
    if (url.hash) return path === (url.pathname === "/" ? "/" : url.pathname) && hash === url.hash;
    return path === url.pathname || path === url.pathname.replace(/\.html$/, "");
  };

  const handleSectionLink = (e, href) => {
    const url = new URL(href, window.location.origin);
    if (url.hash && (path === "/" || path === url.pathname)) {
      e.preventDefault();
      const el = document.querySelector(url.hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
      history.pushState(null, "", url.hash);
      setHash(url.hash);
    }
    setOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`} id="navbar">
      <div className="nav-container">
        <Logo />
        <ul
          className={`nav-links ${open ? "mobile-open is-open" : ""}`}
          id="navLinks"
        >
          <li>
            <Link href="/#services" className={isActive("/#services") ? "active" : ""} onClick={(e) => handleSectionLink(e, "/#services")}>Services</Link>
          </li>
          <li>
            <Link href="/#portfolio" className={isActive("/#portfolio") ? "active" : ""} onClick={(e) => handleSectionLink(e, "/#portfolio")}>Portfolio</Link>
          </li>
          <li>
            <Link href="/#developers" className={isActive("/#developers") ? "active" : ""} onClick={(e) => handleSectionLink(e, "/#developers")}>Developers</Link>
          </li>
          <li>
            <Link href="/blog" className={isActive("/blog") ? "active" : ""} onClick={() => setOpen(false)}>Blog</Link>
          </li>
          <li>
            <Link href="/about" className={isActive("/about") ? "active" : ""} onClick={() => setOpen(false)}>Company</Link>
          </li>
        </ul>
        <div className="nav-actions">
          <Link href="/contact" className="btn-ghost">
            Contact
          </Link>
          <button className="btn-primary nav-cta" onClick={onOpenProject}>
            Start Project
          </button>
          <button
            className="theme-toggle"
            type="button"
            onClick={nextTheme}
            aria-label={`Theme mode: ${themeMode}`}
          >
            <span className="theme-toggle-icon" aria-hidden="true">◐</span>
            <span className="theme-toggle-label">
              {themeMode[0].toUpperCase() + themeMode.slice(1)}
            </span>
          </button>
        </div>
        <button
          className={`hamburger ${open ? "open is-active" : ""}`}
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
