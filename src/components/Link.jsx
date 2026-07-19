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
      <img
        src="/assets/images/seallogo.svg"
        alt="SealTech"
        className="nav-logo-img"
      />

      <span className="logo-text">SealTech</span>
    </Link>
  );
}
