"use client";

import { useEffect } from "react";

/**
 * Mounts a single IntersectionObserver that watches every element
 * with `data-reveal`. When such an element enters the viewport it
 * gets `data-reveal-shown="true"` and the corresponding CSS animates it.
 *
 * Honours `prefers-reduced-motion`: if the user has reduced motion on,
 * everything is shown instantly without observation.
 */
export function Reveal() {
  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const targets = document.querySelectorAll<HTMLElement>("[data-reveal]");

    if (prefersReduced) {
      targets.forEach((el) => {
        el.setAttribute("data-reveal-shown", "true");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-reveal-shown", "true");
            observer.unobserve(entry.target);
          }
        }
      },
      {
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.12,
      },
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
