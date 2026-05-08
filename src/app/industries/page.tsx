import type { Metadata } from "next";
import Link from "next/link";
import styles from "./industries.module.css";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Sector-specific expertise paired with cross-sector pattern recognition. SR Experts is built for both.",
};

const SECTORS = [
  {
    no: "01",
    name: "Financial Services",
    body:
      "Banks, NBFCs, fintech, asset management, insurance, and the regulated entities that depend on precision.",
  },
  {
    no: "02",
    name: "Real Estate & Construction",
    body:
      "Developers, REITs, property funds, and infrastructure businesses navigating capital, compliance, and growth.",
  },
  {
    no: "03",
    name: "Technology & SaaS",
    body:
      "Founders building products, enterprises transforming operations, and the businesses scaling on digital infrastructure.",
  },
  {
    no: "04",
    name: "Manufacturing & Industrials",
    body:
      "Family businesses professionalizing, mid-market manufacturers expanding, and industrial groups restructuring for the next decade.",
  },
  {
    no: "05",
    name: "Retail & Consumer",
    body:
      "Brands building demand, retailers navigating omnichannel, and consumer businesses competing in fragmented markets.",
  },
  {
    no: "06",
    name: "Healthcare & Life Sciences",
    body:
      "Hospitals, diagnostics, pharma, and the regulated businesses where compliance and growth must move together.",
  },
  {
    no: "07",
    name: "Professional Services",
    body:
      "Law firms, consultancies, and partnerships looking to operate with the discipline of an enterprise.",
  },
];

export default function IndustriesPage() {
  return (
    <>
      <section className={`pageHero ${styles.hero}`}>
        <div className="container container--narrow">
          <div className="pageHero-meta">
            <span>Chapter · 04 / 07 · Industries</span>
            <span aria-hidden="true">SEVEN SECTORS</span>
          </div>
          <span className="eyebrow" data-reveal="fade">Industries</span>
          <h1 className={styles.heroHead} data-reveal>
            Sector-specific expertise. <em>Cross-sector perspective.</em>
          </h1>
          <p className={styles.heroBody} data-reveal="rise-sm">
            The best advisors bring two things at once. Deep knowledge of your
            industry, and the pattern recognition that comes from working
            across many. SR Experts is built for both.
          </p>
        </div>
      </section>

      <section className="section section--bone-deep" aria-labelledby="sectors-h">
        <div className="container">
          <span className="eyebrow">Sectors We Serve</span>
          <h2 id="sectors-h" className={styles.sectionHead}>
            Seven sectors. One partnership.
          </h2>

          <div className={styles.grid} data-reveal-stagger>
            {SECTORS.map((s, i) => (
              <article
                key={s.no}
                className={styles.card}
                style={{ ["--stagger-i" as string]: i }}
              >
                <span className={styles.cardNo}>{s.no}</span>
                <h3 className={styles.cardTitle}>{s.name}</h3>
                <p className={styles.cardBody}>{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CROSS-SECTOR THEMES */}
      <section className="section" aria-labelledby="cross-h">
        <div className="container">
          <header className={styles.crossHeader}>
            <span className="eyebrow">The pattern across sectors</span>
            <h2 id="cross-h" className={styles.sectionHead}>
              Three themes that travel.
            </h2>
            <p className={styles.crossIntro}>
              Sectors look different from the outside. From the inside, the
              constraints converge. These are the three we keep encountering.
            </p>
          </header>

          <ol className={styles.themes} data-reveal-stagger>
            {[
              {
                no: "01",
                title: "Capital is no longer the bottleneck. Discipline is.",
                body:
                  "Across sectors, mid-market businesses can raise. What separates the ones that scale is the operating cadence underneath the capital — governance, data, and the ability to execute against a plan in writing.",
              },
              {
                no: "02",
                title: "Compliance has become a growth lever.",
                body:
                  "Founders who treated regulation as paperwork lost two years to a single observation. Founders who treated it as a moat compounded advantage in regulated channels their competitors could not enter.",
              },
              {
                no: "03",
                title: "The integrated answer beats the specialist answer.",
                body:
                  "The biggest decisions sit at the intersection of strategy, finance, legal, and technology. The right answer is rarely one practice. It is the four practices working off the same brief.",
              },
            ].map((t, i) => (
              <li
                key={t.no}
                className={styles.themeItem}
                style={{ ["--stagger-i" as string]: i }}
              >
                <span className={styles.themeNo}>{t.no}</span>
                <h3 className={styles.themeTitle}>{t.title}</h3>
                <p className={styles.themeBody}>{t.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FEATURED ENGAGEMENTS BY SECTOR */}
      <section className="section section--bone-deep" aria-labelledby="featured-h">
        <div className="container">
          <header className={styles.featuredHeader}>
            <span className="eyebrow">Recent work, by sector</span>
            <h2 id="featured-h" className={styles.sectionHead}>
              A glimpse of what we have shipped.
            </h2>
          </header>

          <ul className={styles.engagements} data-reveal-stagger>
            {[
              {
                sector: "Financial Services",
                summary:
                  "Compliance overhaul for a regional NBFC ahead of an RBI inspection. Cleared with zero observations.",
              },
              {
                sector: "Manufacturing",
                summary:
                  "Operational transformation at a ₹200 Cr industrial group. EBITDA margin recovered 480 bps in 18 months.",
              },
              {
                sector: "Family Business",
                summary:
                  "Succession charter and holding-structure redesign for a second-generation promoter group.",
              },
              {
                sector: "Technology & SaaS",
                summary:
                  "Market entry and brand launch for a Series-A SaaS company. $0 → $2.1M ARR in 11 months.",
              },
              {
                sector: "Real Estate",
                summary:
                  "₹400 Cr structured capital raise from an alternatives investor. Lender book reduced by 38%.",
              },
              {
                sector: "Healthcare",
                summary:
                  "Regulatory and IP advisory for a diagnostics chain expanding into three new states.",
              },
            ].map((e, i) => (
              <li
                key={e.sector}
                className={styles.engagement}
                style={{ ["--stagger-i" as string]: i }}
              >
                <span className={styles.engagementSector}>{e.sector}</span>
                <p className={styles.engagementSummary}>{e.summary}</p>
                <Link href="/case-studies" className={styles.engagementLink}>
                  Read case study →
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section--tight" style={{ paddingBlock: "var(--space-9)" }}>
        <div className="container container--narrow" style={{ textAlign: "center" }}>
          <h2 className={styles.ctaHead}>Don&apos;t see your sector?</h2>
          <p className={styles.ctaBody}>
            We have advised across 18+ industries. The disciplines travel.
            Tell us what you are facing and we will tell you whether the work
            fits.
          </p>
          <div style={{ marginTop: "2rem" }}>
            <Link href="/contact" className="btn btn--primary">
              Start the Conversation
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
