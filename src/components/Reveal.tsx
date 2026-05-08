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

    // Opt-in to hiding rules. Until this class is on <html>, every
    // [data-reveal] / [data-reveal-stagger] element is fully visible.
    // This guarantees that JS failure can never produce an empty page.
    document.documentElement.classList.add("js-reveal");

    const targets = document.querySelectorAll<HTMLElement>(
      "[data-reveal], [data-reveal-stagger]",
    );

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

    // Safety net: if anything is still hidden after 1.5s, reveal it.
    // Catches edge cases (deep-linked anchors above the fold, observer
    // never firing on tall elements, etc.).
    const safety = window.setTimeout(() => {
      document
        .querySelectorAll<HTMLElement>(
          "[data-reveal]:not([data-reveal-shown]), [data-reveal-stagger]:not([data-reveal-shown])",
        )
        .forEach((el) => el.setAttribute("data-reveal-shown", "true"));
    }, 1500);

    return () => {
      observer.disconnect();
      clearTimeout(safety);
    };
  }, []);

  return null;
}
