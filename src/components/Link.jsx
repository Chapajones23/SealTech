import { SERVICES, PROJECTS, TEAM } from "../constants/index.js";
import { navigate } from "../utils/navigation.js";

export function Link({ href, children, className, ...props }) {
  return (
    <a
      href={href}
      className={className}
      onClick={(event) => {
        const url = new URL(href, window.location.origin);
        if (
          url.origin !== window.location.origin ||
          href.startsWith("#")
        )
          return;
        event.preventDefault();
        navigate(`${url.pathname}${url.search}${url.hash}`);
      }}
      {...props}
    >
      {children}
    </a>
  );
}

export function Logo() {
  return (
    <Link href="/" className="nav-logo">
      <span className="logo-icon">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <rect width="32" height="32" rx="8" fill="url(#logoGrad)" />
          <path
            d="M8 16C8 11.582 11.582 8 16 8s8 3.582 8 8-3.582 8-8 8"
            stroke="#fff"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle cx="16" cy="16" r="3" fill="#fff" />
          <defs>
            <linearGradient
              id="logoGrad"
              x1="0"
              y1="0"
              x2="32"
              y2="32"
            >
              <stop stopColor="#2563EB" />
              <stop offset="1" stopColor="#06B6D4" />
            </linearGradient>
          </defs>
        </svg>
      </span>
      <span className="logo-text">SealTech</span>
    </Link>
  );
}
