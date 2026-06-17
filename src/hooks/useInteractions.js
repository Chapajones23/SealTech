import { useEffect } from "react";

export function useInteractions() {
  useEffect(() => {
    const animated = document.querySelectorAll("[data-animate]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          setTimeout(
            () => entry.target.classList.add("animated"),
            Number(entry.target.dataset.delay || 0)
          );
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    animated.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  });
}
