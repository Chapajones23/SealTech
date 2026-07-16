import { useEffect } from "react";

export function useInteractions() {
  useEffect(() => {
    // Create a single IntersectionObserver instance for all animated elements
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(
              () => {
                entry.target.classList.add("animated");
                entry.target.__animatedClassApplied = true;
              },
              Number(entry.target.dataset.delay || 0)
            );
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    const run = () => {
      const animated = document.querySelectorAll("[data-animate]");
      animated.forEach((element) => {
        if (element.__animatedClassApplied) {
          // If React's reconciliation stripped the animated class, restore it
          if (!element.classList.contains("animated")) {
            element.classList.add("animated");
          }
        } else if (!element.__isAnimated) {
          element.__isAnimated = true;
          observer.observe(element);
        }
      });
    };

    // Run initial scan
    run();

    // Listen for DOM changes to detect new animated elements or React class resets
    const mutationObserver = new MutationObserver(() => {
      run();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
}


