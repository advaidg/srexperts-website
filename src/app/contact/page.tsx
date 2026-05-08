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
    label: "Mumbai · Headquarters",
    lines: [
      "SR Experts Advisory LLP",
      "Level 18, One BKC",
      "Bandra Kurla Complex",
      "Mumbai 400 051, Maharashtra",
    ],
  },
  {
    label: "Bengaluru · Tech & Capital",
    lines: [
      "12th Floor, Prestige Atrium",
      "Indiranagar 100ft Road",
      "Bengaluru 560 038, Karnataka",
    ],
  },
  {
    label: "Singapore · Cross-border",
    lines: [
      "Level 33, One Raffles Place",
      "1 Raffles Place",
      "Singapore 048 616",
    ],
  },
  {
    label: "Phone",
    lines: ["+91 22 6890 4400"],
  },
  {
    label: "Email",
    lines: [CONTACT_EMAIL],
    href: `mailto:${CONTACT_EMAIL}`,
  },
  {
    label: "Connect",
    lines: ["LinkedIn · Company page"],
    href: "https://www.linkedin.com/company/srexperts",
  },
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
          <span className="eyebrow">Contact</span>
          <h1 className={styles.heroHead}>Let us understand the problem first.</h1>
          <p className={styles.heroBody}>
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

        </div>
      </section>

      {/* WHAT HAPPENS NEXT */}
      <section className="section section--bone-deep" aria-labelledby="next-h">
        <div className="container">
          <header className={styles.nextHeader}>
            <span className="eyebrow">What happens next</span>
            <h2 id="next-h" className={styles.cardTitle}>
              The first ten days from your email.
            </h2>
            <p className={styles.cardBody}>
              We treat the first ten days like a real engagement, because they
              are. The early signal is the same signal you will see for the
              rest of the relationship.
            </p>
          </header>

          <ol className={styles.next}>
            {[
              {
                window: "Within 1 working day",
                title: "A partner reads your email.",
                body:
                  "Not an associate, not an inbox bot. The partner with the closest practice fit responds with whether the engagement is the right fit and what is missing.",
              },
              {
                window: "Within 5 days",
                title: "A 30-minute scoping call.",
                body:
                  "Your team and ours, on the same line. We listen for context and constraints. We do not pitch services we cannot ship.",
              },
              {
                window: "Within 2 weeks",
                title: "Sample diagnostic + proposal.",
                body:
                  "A short written diagnostic with three observations from a partner who has run engagements like yours, plus a fixed-fee proposal scoped to the actual need.",
              },
              {
                window: "On signature",
                title: "NDA, kickoff, calendar.",
                body:
                  "Master NDA in place. Kickoff scheduled within five working days. Weekly cadence and named partners on the engagement letter — not in the appendix.",
              },
            ].map((s, i) => (
              <li
                key={s.window}
                className={styles.nextItem}
                style={{ ["--stagger-i" as string]: i }}
              >
                <span className={styles.nextWindow}>{s.window}</span>
                <h3 className={styles.nextTitle}>{s.title}</h3>
                <p className={styles.nextBody}>{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ENGAGEMENT FORMATS */}
      <section className="section" aria-labelledby="formats-h">
        <div className="container">
          <header className={styles.formatsHeader}>
            <span className="eyebrow">Engagement Formats</span>
            <h2 id="formats-h" className={styles.cardTitle}>
              Three shapes the work usually takes.
            </h2>
          </header>

          <div className={styles.formats}>
            {[
              {
                name: "Diagnostic",
                length: "2 – 4 weeks",
                price: "Fixed fee",
                body:
                  "A focused look at one constraint. Interviews, data work, and a written hypothesis. The cheapest way to find out whether we are the right partner.",
                bullets: [
                  "1 partner + 1 senior",
                  "Written diagnostic ≤ 12 pages",
                  "Roadmap with sequencing & cost",
                ],
              },
              {
                name: "Project",
                length: "3 – 6 months",
                price: "Milestone-billed",
                body:
                  "A defined transformation, scoped end-to-end. We co-deliver with your team against a written outcome and a calendar of milestones.",
                bullets: [
                  "Cross-practice when needed",
                  "Weekly written cadence",
                  "Outcome named in week one",
                ],
              },
              {
                name: "Retainer",
                length: "Ongoing",
                price: "Monthly, scoped",
                body:
                  "An always-on partner relationship. Scoped to a deliverable list, reviewed every quarter. We refuse retainers that exist to keep us on call.",
                bullets: [
                  "Named partner per practice",
                  "Quarterly value review",
                  "Cancel on 30 days written notice",
                ],
              },
            ].map((f, i) => (
              <article
                key={f.name}
                className={styles.format}
                style={{ ["--stagger-i" as string]: i }}
              >
                <header className={styles.formatHead}>
                  <h3 className={styles.formatName}>{f.name}</h3>
                  <span className={styles.formatPrice}>{f.price}</span>
                </header>
                <span className={styles.formatLength}>{f.length}</span>
                <p className={styles.formatBody}>{f.body}</p>
                <ul className={styles.formatBullets}>
                  {f.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </article>
            ))}
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
