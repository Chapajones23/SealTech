import { useEffect, useState } from "react";

export function useRoute() {
  const [route, setRoute] = useState(() => ({
    path: window.location.pathname,
    query: new URLSearchParams(window.location.search),
  }));

  useEffect(() => {
    const update = () =>
      setRoute({
        path: window.location.pathname,
        query: new URLSearchParams(window.location.search),
      });
    window.addEventListener("popstate", update);
    return () => window.removeEventListener("popstate", update);
  }, []);

  return route;
}
