import type { Metadata } from "next";
import Link from "next/link";
import styles from "./insights.module.css";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Analysis, frameworks, and field notes from our partners. Written for operators, not for awards.",
};

const CATEGORIES = [
  { tag: "Strategy & Markets", count: 0 },
  { tag: "Finance & Compliance", count: 0 },
  { tag: "Legal & Regulatory", count: 0 },
  { tag: "Technology & AI", count: 0 },
  { tag: "Growth & Marketing", count: 0 },
  { tag: "Industry Outlooks", count: 0 },
];

export default function InsightsPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container container--narrow">
          <span className="eyebrow" data-reveal="fade">Insights</span>
          <h1 className={styles.heroHead} data-reveal>Perspectives from the practice.</h1>
          <p className={styles.heroBody} data-reveal="rise-sm">
            Analysis, frameworks, and field notes from our partners. Written
            for operators, not for awards.
          </p>
        </div>
      </section>

      <section className="section section--bone-deep">
        <div className="container">
          <span className="eyebrow">Content Categories</span>
          <h2 className={styles.sectionHead}>What we write about.</h2>
          <ul className={styles.tagRow} data-reveal-stagger>
            {CATEGORIES.map((c, i) => (
              <li
                key={c.tag}
                className={styles.tag}
                style={{ ["--stagger-i" as string]: i }}
              >
                <span>{c.tag}</span>
                <em className={styles.tagCount}>{String(c.count).padStart(2, "0")}</em>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="grid-h">
        <div className="container">
          <header className={styles.gridHeader}>
            <span className="eyebrow">Latest</span>
            <h2 id="grid-h" className={styles.sectionHead}>
              The first articles will appear here.
            </h2>
            <p className={styles.gridIntro}>
              Our partners are preparing the inaugural set of essays. Until
              they ship, here is what to expect — discipline-led writing,
              practical frameworks, and honest assessments of what works in
              the Indian mid-market.
            </p>
          </header>

          {/* Placeholder grid — replace with real MDX index when content lands */}
          <ul className={styles.articles}>
            {Array.from({ length: 6 }).map((_, i) => (
              <li key={i} className={styles.article} aria-hidden="true">
                <div className={styles.articleThumb} />
                <div className={styles.articleMeta}>
                  <span className={styles.articleTag}>
                    {CATEGORIES[i % CATEGORIES.length].tag}
                  </span>
                  <h3 className={styles.articleTitle}>
                    Article title forthcoming.
                  </h3>
                  <p className={styles.articleExcerpt}>
                    A short excerpt that previews the argument and invites the
                    reader to keep going.
                  </p>
                  <div className={styles.articleFoot}>
                    <span>Coming soon</span>
                    <span aria-hidden="true">·</span>
                    <span>5 min read</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container container--narrow" style={{ textAlign: "center" }}>
          <h2 className={styles.ctaHead}>Want our writing in your inbox?</h2>
          <p className={styles.ctaBody}>
            We will not be publishing on a fixed schedule. We will publish when
            we have something worth your time. Tell us where to send it.
          </p>
          <div style={{ marginTop: "2rem" }}>
            <Link href="/contact" className="btn btn--primary">
              Subscribe
              <span className="btn-arrow" aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
