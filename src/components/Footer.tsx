import Link from "next/link";
import { Logo } from "./Logo";
import styles from "./Footer.module.css";

const PRACTICES = [
  { href: "/services#strategy", label: "Strategy" },
  { href: "/services#finance", label: "Finance" },
  { href: "/services#legal", label: "Legal" },
  { href: "/services#technology", label: "Technology" },
  { href: "/services#marketing", label: "Marketing" },
];

const COMPANY = [
  { href: "/about", label: "About" },
  { href: "/insights", label: "Insights" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/contact", label: "Contact" },
];

const LEGAL = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/disclaimer", label: "Disclaimer" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.lockup}>
          <Logo variant="reversed" size={26} />
          <p className={styles.tagline}>The Only Expert You Need.</p>
          <p className={styles.fineprint}>
            Integrated advisory across strategy, finance, legal, technology,
            and marketing — built for the businesses that built India.
          </p>
        </div>

        <FooterColumn title="Practices" items={PRACTICES} />
        <FooterColumn title="Company" items={COMPANY} />
        <FooterColumn title="Legal" items={LEGAL} />
      </div>

      <div className={styles.baseline}>
        <span>© {year} SR Experts. All rights reserved.</span>
        <span className={styles.signOff}>
          Discretion is part of the work.
        </span>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: { href: string; label: string }[];
}) {
  return (
    <div className={styles.col}>
      <h4 className={styles.colTitle}>{title}</h4>
      <ul className={styles.colList}>
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className={styles.colLink}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
