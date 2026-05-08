import type { Metadata } from "next";
import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms governing use of the SR Experts website and our advisory engagements.",
};

export default function TermsPage() {
  return (
    <>
      <section className={`pageHero ${styles.hero}`}>
        <div className="container container--narrow">
          <div className="pageHero-meta">
            <span>Legal · Terms</span>
            <span aria-hidden="true">Effective: 1 May 2026</span>
          </div>
          <span className="eyebrow">Terms of Service</span>
          <h1 className={styles.heroHead}>
            The rules of the road, in plain language.
          </h1>
          <p className={styles.heroBody}>
            These terms govern your use of the SR Experts website. The terms of
            any specific advisory engagement are set out in a separate
            engagement letter, which prevails over anything below if the two
            ever conflict.
          </p>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container container--narrow">
          <div className={styles.body}>
            <section>
              <h2>1. About these terms</h2>
              <p>
                By accessing srexperts.in or any sub-page, you agree to the
                terms below. If you do not agree, please stop using the site.
              </p>
            </section>

            <section>
              <h2>2. Information on the site</h2>
              <p>
                Content on this website is provided for general information.
                It is not legal, financial, tax, or other professional advice
                and must not be relied on as such. For advice specific to your
                situation, please contact us through{" "}
                <a href="/contact" className="inline-link">
                  the contact page
                </a>
                .
              </p>
            </section>

            <section>
              <h2>3. Engagement letter governs the work</h2>
              <p>
                No advisory relationship is created by visiting this site, by
                emailing us, or by an introductory call. A relationship is
                created only after both parties sign a written engagement
                letter that names scope, fees, and key personnel.
              </p>
            </section>

            <section>
              <h2>4. Intellectual property</h2>
              <ul>
                <li>
                  Site content, brand marks, and the SRExperts name are owned
                  by SR Experts Advisory LLP.
                </li>
                <li>
                  You may share excerpts with attribution. Republishing in full
                  requires written permission.
                </li>
                <li>
                  Engagement work product is owned per the terms of the
                  relevant engagement letter — typically jointly, with a
                  perpetual licence to the client.
                </li>
              </ul>
            </section>

            <section>
              <h2>5. Disclaimers</h2>
              <p>
                The site is provided on an &ldquo;as is&rdquo; basis. We work
                hard to keep it accurate and available, but we do not warrant
                that it will be error-free, uninterrupted, or fit for any
                particular purpose.
              </p>
            </section>

            <section>
              <h2>6. Limitation of liability</h2>
              <p>
                To the fullest extent permitted by law, SR Experts is not
                liable for indirect, incidental, or consequential losses
                arising from use of this website. Limits applicable to
                advisory engagements are set out in the engagement letter.
              </p>
            </section>

            <section>
              <h2>7. Governing law</h2>
              <p>
                These terms are governed by the laws of India. Disputes will
                be subject to the exclusive jurisdiction of the courts at
                Mumbai, unless an engagement letter provides otherwise.
              </p>
            </section>

            <p className={styles.meta}>
              Effective 1 May 2026 · Questions? legal@srexperts.in
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
