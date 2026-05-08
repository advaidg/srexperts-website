import type { Metadata } from "next";
import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How SR Experts collects, uses, and protects information shared with us.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className={`pageHero ${styles.hero}`}>
        <div className="container container--narrow">
          <div className="pageHero-meta">
            <span>Legal · Privacy</span>
            <span aria-hidden="true">Effective: 1 May 2026</span>
          </div>
          <span className="eyebrow">Privacy Policy</span>
          <h1 className={styles.heroHead}>How we treat your information.</h1>
          <p className={styles.heroBody}>
            This policy describes the information SR Experts Advisory LLP
            (&ldquo;SR Experts&rdquo;, &ldquo;we&rdquo;) collects when you use
            this website or engage us for advisory services, how we use it, and
            the rights you have over it.
          </p>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container container--narrow">
          <div className={styles.body}>
            <section>
              <h2>1. Information we collect</h2>
              <p>
                We collect information you provide directly — your name, email
                address, phone number, company, and any context you include in
                an enquiry — and a minimal set of operational data when you
                use our website (browser type, IP address truncated, pages
                viewed). We do not use third-party advertising trackers.
              </p>
            </section>

            <section>
              <h2>2. How we use it</h2>
              <ul>
                <li>To respond to your enquiry and assess engagement fit.</li>
                <li>To deliver advisory services you have engaged us for.</li>
                <li>
                  To meet our statutory and regulatory obligations (KYC,
                  anti-money-laundering, professional standards).
                </li>
                <li>
                  To improve the quality of our service through aggregated,
                  anonymised analytics.
                </li>
              </ul>
            </section>

            <section>
              <h2>3. What we do not do</h2>
              <ul>
                <li>We do not sell or rent your information to anyone.</li>
                <li>
                  We do not share client information with other clients or with
                  third parties, except where compelled by law or with your
                  written consent.
                </li>
                <li>We do not use client data to train AI models.</li>
              </ul>
            </section>

            <section>
              <h2>4. Where data is stored</h2>
              <p>
                Operational data is stored on infrastructure hosted in India
                and Singapore. Engagement work product is stored on encrypted
                project workspaces accessible only to the partners and
                associates assigned to your engagement.
              </p>
            </section>

            <section>
              <h2>5. Retention</h2>
              <p>
                We retain enquiry information for up to 24 months. Engagement
                records are retained for the duration required by professional
                standards and applicable law (typically 7 to 10 years).
              </p>
            </section>

            <section>
              <h2>6. Your rights</h2>
              <p>
                You may request access to, correction of, or deletion of your
                personal information at any time by writing to{" "}
                <a href="mailto:privacy@srexperts.in" className="inline-link">
                  privacy@srexperts.in
                </a>
                . We will respond within 30 days.
              </p>
            </section>

            <section>
              <h2>7. Changes to this policy</h2>
              <p>
                We may update this policy. Material changes will be posted on
                this page with a new effective date and, where appropriate,
                communicated to existing clients in writing.
              </p>
            </section>

            <p className={styles.meta}>
              Effective 1 May 2026 · Questions? privacy@srexperts.in
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
