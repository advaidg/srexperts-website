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
      <section className={styles.hero}>
        <div className="container container--narrow">
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
