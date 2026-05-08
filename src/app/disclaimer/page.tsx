import type { Metadata } from "next";
import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "Important notes about how to read and rely on the content on the SR Experts website.",
};

export default function DisclaimerPage() {
  return (
    <>
      <section className={`pageHero ${styles.hero}`}>
        <div className="container container--narrow">
          <div className="pageHero-meta">
            <span>Legal · Disclaimer</span>
            <span aria-hidden="true">Effective: 1 May 2026</span>
          </div>
          <span className="eyebrow">Disclaimer</span>
          <h1 className={styles.heroHead}>
            Read this once. Then read the engagement letter.
          </h1>
          <p className={styles.heroBody}>
            This disclaimer applies to everything published on srexperts.in,
            including case studies, insights, frameworks, and engagement
            descriptions. It also applies to introductory conversations and
            scoping calls.
          </p>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container container--narrow">
          <div className={styles.body}>
            <section>
              <h2>1. General information only</h2>
              <p>
                Content on this site is published for general information.
                Nothing here is a substitute for advice that takes your facts,
                jurisdiction, and constraints into account. Before you act on
                anything you read here, talk to a qualified advisor.
              </p>
            </section>

            <section>
              <h2>2. No advisory relationship by access</h2>
              <p>
                Browsing this site, downloading material, or reaching out by
                email or phone does not create a client relationship. A
                relationship begins only after a written engagement letter is
                signed by both parties.
              </p>
            </section>

            <section>
              <h2>3. Case studies are sanitized</h2>
              <p>
                Case studies on this site describe real engagements but have
                been sanitized to preserve client confidentiality. Specific
                names, jurisdictions, and identifiable details are omitted or
                generalised. References to outcomes reflect what was achieved
                in the specific engagement and are not representations of
                future results.
              </p>
            </section>

            <section>
              <h2>4. Forward-looking statements</h2>
              <p>
                Where this site discusses outlooks, market conditions, or
                future scenarios, those statements reflect our view at the
                time of writing. Markets and regulations change. We do not
                undertake to update past content as that change occurs.
              </p>
            </section>

            <section>
              <h2>5. Third-party links and references</h2>
              <p>
                Where we link to or reference third-party content, we do so for
                convenience and accuracy. We do not endorse or take
                responsibility for content hosted by third parties.
              </p>
            </section>

            <section>
              <h2>6. Regulated services</h2>
              <p>
                Some services described on this site are subject to
                professional regulation in the jurisdictions where they are
                rendered. Eligibility to provide a particular service to a
                particular client may depend on residency, registration, or
                the rules of the relevant professional body. Specific
                eligibility is confirmed in the engagement letter.
              </p>
            </section>

            <section>
              <h2>7. Get advice that fits your situation</h2>
              <p>
                If you are facing a real decision, please reach out through{" "}
                <a href="/contact" className="inline-link">
                  the contact page
                </a>
                . A 30-minute scoping call costs you nothing and is the
                fastest way to know whether SR Experts is the right partner
                for what you are working on.
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
