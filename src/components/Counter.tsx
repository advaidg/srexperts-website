"use client";

import { useEffect, useRef, useState } from "react";

type CounterProps = {
  /** Final value to count up to. Supports a numeric prefix and a suffix. */
  value: string;
  /** Animation duration in ms. */
  duration?: number;
};

/**
 * Animates a number from 0 → its final value the first time it scrolls into view.
 * Accepts strings like "120+", "78%", "9". The numeric portion is animated;
 * the suffix is appended at the end. Honours prefers-reduced-motion.
 */
export function Counter({ value, duration = 1400 }: CounterProps) {
  const [display, setDisplay] = useState<string>(() => {
    const match = value.match(/[\d.]+/);
    return match ? "0" + value.replace(match[0], "") : value;
  });
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const match = value.match(/[\d.]+/);
    if (!match) {
      setDisplay(value);
      return;
    }
    const target = parseFloat(match[0]);
    const suffix = value.slice(match.index! + match[0].length);
    const prefix = value.slice(0, match.index!);
    const isInt = Number.isInteger(target);

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      setDisplay(value);
      return;
    }

    const el = ref.current;
    if (!el) return;

    let started = false;
    let raf = 0;

    const start = () => {
      if (started) return;
      started = true;
      const t0 = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - t0) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        const v = target * eased;
        const formatted = isInt
          ? Math.round(v).toString()
          : v.toFixed(1);
        setDisplay(`${prefix}${formatted}${suffix}`);
        if (t < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            start();
            observer.disconnect();
          }
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value, duration]);

  return <span ref={ref}>{display}</span>;
}
