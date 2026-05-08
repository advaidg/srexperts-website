"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./MobileMenu.module.css";

const NAV = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/insights", label: "Insights" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/contact", label: "Contact" },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close menu when route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll while open
  useEffect(() => {
    if (open) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        className={styles.toggle}
        data-open={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span className={styles.bar} />
        <span className={styles.bar} />
      </button>

      <div
        id="mobile-menu"
        className={styles.panel}
        data-open={open}
        aria-hidden={!open}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
      >
        <nav className={styles.nav} aria-label="Mobile">
          <ul className={styles.list}>
            {NAV.map((item, i) => (
              <li
                key={item.href}
                className={styles.item}
                style={{ ["--i" as string]: i }}
              >
                <Link
                  href={item.href}
                  className={styles.link}
                  data-active={pathname === item.href}
                >
                  <span className={styles.no}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className={styles.label}>{item.label}</span>
                  <span className={styles.arrow} aria-hidden="true">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className={styles.foot}>
            <span className={styles.footEyebrow}>The Only Expert You Need.</span>
            <a
              href="mailto:hello@srexperts.in"
              className={styles.footMail}
            >
              hello@srexperts.in
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
