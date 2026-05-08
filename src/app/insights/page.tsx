import type { Metadata } from "next";
import Link from "next/link";
import styles from "./insights.module.css";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Analysis, frameworks, and field notes from our partners. Written for operators, not for awards.",
};

const CATEGORIES = [
  { tag: "Strategy & Markets", count: 4 },
  { tag: "Finance & Compliance", count: 3 },
  { tag: "Legal & Regulatory", count: 2 },
  { tag: "Technology & AI", count: 3 },
  { tag: "Growth & Marketing", count: 2 },
  { tag: "Industry Outlooks", count: 1 },
];

const ARTICLES = [
  {
    category: "Finance & Compliance",
    title:
      "Why mid-market boards are hiring fractional CFOs first — and full-time finance leaders second.",
    excerpt:
      "The shape of the finance org has shifted. The fractional model is no longer a stopgap. It is the design choice.",
    author: "SR Experts · Finance Practice",
    date: "April 2026",
    readMins: 6,
  },
  {
    category: "Legal & Regulatory",
    title:
      "The compliance moat. Why regulation is a growth lever, not a cost center.",
    excerpt:
      "Treating compliance as paperwork is how you lose two years to a single supervisory observation. Treating it as a moat is how you compound advantage.",
    author: "SR Experts · Legal Practice",
    date: "March 2026",
    readMins: 8,
  },
  {
    category: "Technology & AI",
    title:
      "AI in advisory. Separating leverage from theatre.",
    excerpt:
      "Most AI adoption in services firms is theatre — a co-pilot license and a press release. Real leverage requires re-architecting the workflow underneath.",
    author: "SR Experts · Technology Practice",
    date: "March 2026",
    readMins: 7,
  },
  {
    category: "Strategy & Markets",
    title:
      "Succession planning the second generation can actually live with.",
    excerpt:
      "Succession charters fail when they optimize for the founder's comfort. They succeed when they answer the next generation's actual questions.",
    author: "SR Experts · Strategy Practice",
    date: "February 2026",
    readMins: 9,
  },
  {
    category: "Finance & Compliance",
    title:
      "How to read a Term Sheet your investors will respect.",
    excerpt:
      "The clauses that founders panic about often do not matter. The clauses that determine future control rarely make the news.",
    author: "SR Experts · Finance Practice",
    date: "February 2026",
    readMins: 6,
  },
  {
    category: "Strategy & Markets",
    title:
      "The five questions every founder should ask before raising debt.",
    excerpt:
      "Equity is expensive. Debt is faster, cheaper, and unforgiving. Treat the decision with the rigor it deserves.",
    author: "SR Experts · Strategy Practice",
    date: "January 2026",
    readMins: 5,
  },
];

export default function InsightsPage() {
  return (
    <>
      <section className={`pageHero ${styles.hero}`}>
        <div className="container container--narrow">
          <div className="pageHero-meta">
            <span>Chapter · 06 / 07 · Insights</span>
            <span aria-hidden="true">FIELD NOTES</span>
          </div>
          <span className="eyebrow">Insights</span>
          <h1 className={styles.heroHead}>Perspectives from the practice.</h1>
          <p className={styles.heroBody}>
            Analysis, frameworks, and field notes from our partners. Written
            for operators, not for awards.
          </p>
        </div>
      </section>

      <section className="section section--bone-deep">
        <div className="container">
          <span className="eyebrow">Content Categories</span>
          <h2 className={styles.sectionHead}>What we write about.</h2>
          <ul className={styles.tagRow}>
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

      {/* FEATURED */}
      <section className="section" aria-labelledby="featured-h">
        <div className="container">
          <span className="eyebrow">Featured</span>
          <h2 id="featured-h" className={styles.sectionHead}>
            The argument we keep coming back to.
          </h2>

          <article className={styles.featured}>
            <div className={styles.featuredMeta}>
              <span className={styles.featuredTag}>{ARTICLES[0].category}</span>
              <span>{ARTICLES[0].date}</span>
              <span aria-hidden="true">·</span>
              <span>{ARTICLES[0].readMins} min read</span>
            </div>
            <h3 className={styles.featuredTitle}>{ARTICLES[0].title}</h3>
            <p className={styles.featuredExcerpt}>{ARTICLES[0].excerpt}</p>
            <div className={styles.featuredFoot}>
              <span>{ARTICLES[0].author}</span>
              <span className="inline-link">Read the essay →</span>
            </div>
          </article>
        </div>
      </section>

      {/* GRID */}
      <section className="section section--bone-deep" aria-labelledby="grid-h">
        <div className="container">
          <header className={styles.gridHeader}>
            <span className="eyebrow">Latest essays</span>
            <h2 id="grid-h" className={styles.sectionHead}>
              Field notes from the practice.
            </h2>
            <p className={styles.gridIntro}>
              Discipline-led writing. Practical frameworks. Honest assessments
              of what works in the Indian mid-market.
            </p>
          </header>

          <ul className={styles.articles}>
            {ARTICLES.slice(1).map((a, i) => (
              <li
                key={a.title}
                className={styles.article}
                style={{ ["--stagger-i" as string]: i }}
              >
                <div className={styles.articleThumb}>
                  <span className={styles.articleThumbCat}>
                    {a.category.split(" ")[0]}
                  </span>
                </div>
                <div className={styles.articleMeta}>
                  <span className={styles.articleTag}>{a.category}</span>
                  <h3 className={styles.articleTitle}>{a.title}</h3>
                  <p className={styles.articleExcerpt}>{a.excerpt}</p>
                  <div className={styles.articleFoot}>
                    <span>{a.date}</span>
                    <span aria-hidden="true">·</span>
                    <span>{a.readMins} min read</span>
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
