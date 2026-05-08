import type { Metadata } from "next";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Every engagement at SR Experts begins with a conversation. No pitch deck, no preamble. Tell us what you are facing, and we will tell you whether we are the right partner to help.",
};

const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@srexperts.in";

const SUBJECT_PREFILL = "Discovery Call — SR Experts";
const BODY_PREFILL = `Hello SR Experts,

A bit about my situation:
- Company:
- Sector:
- What I am facing:
- What I would like to discuss:

Best,`;

const OFFICES = [
  {
    label: "Head Office",
    lines: [
      "SR Experts Advisory LLP",
      "Address line 1",
      "Address line 2",
      "City, State, India",
    ],
  },
  {
    label: "Phone",
    lines: ["+91 00000 00000"],
  },
  {
    label: "Email",
    lines: [CONTACT_EMAIL],
    href: `mailto:${CONTACT_EMAIL}`,
  },
  {
    label: "Connect",
    lines: ["LinkedIn"],
    href: "https://www.linkedin.com/",
  },
];

const PRACTICE_OPTIONS = [
  { value: "strategy", label: "Strategy & Management Consulting" },
  { value: "finance", label: "Finance, CA & CS Services" },
  { value: "legal", label: "Legal & Regulatory Compliance" },
  { value: "technology", label: "Technology & Digital Transformation" },
  { value: "marketing", label: "Marketing & Growth" },
  { value: "general", label: "Not sure yet" },
];

export default function ContactPage() {
  return (
    <>
      <section className={`pageHero ${styles.hero}`}>
        <div className="container container--narrow">
          <div className="pageHero-meta">
            <span>Chapter · 07 / 07 · Contact</span>
            <span aria-hidden="true">PARTNER-DIRECT · WITHIN 1 WORKING DAY</span>
          </div>
          <span className="eyebrow" data-reveal="fade">Contact</span>
          <h1 className={styles.heroHead} data-reveal>Let us understand the problem first.</h1>
          <p className={styles.heroBody} data-reveal="rise-sm">
            Every engagement at SR Experts begins with a conversation. No pitch
            deck, no preamble. Tell us what you are facing, and we will tell
            you whether we are the right partner to help.
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="reach-h">
        <div className="container">
          <h2 id="reach-h" className={styles.srOnly}>
            How to reach us
          </h2>

          <div className={styles.grid}>
            <article className={styles.card}>
              <span className="eyebrow">Start the conversation</span>
              <h3 className={styles.cardTitle}>
                A direct line to the partners.
              </h3>
              <p className={styles.cardBody}>
                Email us with a paragraph about your business and the problem
                you are working on. A partner will respond within one working
                day with whether the engagement fits.
              </p>

              <div className={styles.actions}>
                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
                    SUBJECT_PREFILL,
                  )}&body=${encodeURIComponent(BODY_PREFILL)}`}
                  className="btn btn--primary"
                >
                  Email a partner
                  <span className="btn-arrow" aria-hidden="true">
                    →
                  </span>
                </a>
                <a href={`mailto:${CONTACT_EMAIL}`} className="inline-link">
                  Or just write to {CONTACT_EMAIL}
                </a>
              </div>

              <details className={styles.guidance}>
                <summary>What to include in your first email</summary>
                <ul>
                  <li>Your name, role, and company.</li>
                  <li>The sector you operate in.</li>
                  <li>Which practice area is closest — or that you are unsure.</li>
                  <li>The constraint you are working on, in your own words.</li>
                </ul>
              </details>
            </article>

            <aside className={styles.offices}>
              {OFFICES.map((o) => (
                <div key={o.label} className={styles.office}>
                  <span className={styles.officeLabel}>{o.label}</span>
                  <div className={styles.officeLines}>
                    {o.lines.map((line) =>
                      o.href ? (
                        <a key={line} href={o.href} className={styles.officeLink}>
                          {line}
                        </a>
                      ) : (
                        <span key={line}>{line}</span>
                      ),
                    )}
                  </div>
                </div>
              ))}
            </aside>
          </div>

          {/* Hint of the future form structure */}
          <div className={styles.future} aria-hidden="true">
            <span className="eyebrow eyebrow--mist">Coming soon</span>
            <p>
              An on-page form will replace the email step. The shape will look
              like this:
            </p>
            <ul className={styles.futureFields}>
              <li>Name</li>
              <li>Company</li>
              <li>Email</li>
              <li>Phone</li>
              <li>
                Practice area
                <span className={styles.muted}>
                  {" "}
                  ({PRACTICE_OPTIONS.length} options)
                </span>
              </li>
              <li>Brief description of your need</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--ink section--tight">
        <div className="container container--narrow" style={{ textAlign: "center" }}>
          <h2 className={styles.closingHead}>
            Discretion is part of the work.
          </h2>
          <p className={styles.closingBody}>
            Every conversation is confidential. Every engagement is governed by
            an NDA the moment scope becomes specific.
          </p>
        </div>
      </section>
    </>
  );
}
