import Link from "next/link";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";
import styles from "./Header.module.css";

const NAV = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/insights", label: "Insights" },
  { href: "/case-studies", label: "Case Studies" },
];

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Logo size={20} />
        <nav className={styles.nav} aria-label="Main">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className={styles.link}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="/contact" className={styles.cta}>
          Contact
          <span aria-hidden="true">→</span>
        </Link>
        <MobileMenu />
      </div>
    </header>
  );
}
