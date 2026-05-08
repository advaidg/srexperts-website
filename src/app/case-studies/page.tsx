import type { Metadata } from "next";
import Link from "next/link";
import styles from "./case-studies.module.css";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "A selection of engagements that illustrate how we work, what we deliver, and the outcomes we have helped clients achieve.",
};

type CaseStudy = {
  no: string;
  sector: string;
  title: string;
  context: string;
  intervention: string;
  outcome: string;
};

const CASE_STUDIES: CaseStudy[] = [
  {
    no: "01",
    sector: "Manufacturing",
    title: "Operational transformation for a mid-market manufacturer",
    context:
      "A ₹200-crore industrial group facing margin compression and inconsistent delivery performance across three plants.",
    intervention:
      "Cross-functional diagnostic, line-balancing redesign, and a 90-day cost transformation co-led with the COO.",
    outcome:
      "Recovered 480 bps of EBITDA margin in 18 months. Working-capital cycle reduced by 22 days. On-time delivery from 71% to 94%.",
  },
  {
    no: "02",
    sector: "Financial Services",
    title: "Regulatory compliance overhaul for a regional NBFC",
    context:
      "An NBFC scaling its retail book ahead of an RBI inspection, with fragmented compliance documentation across legacy systems.",
    intervention:
      "End-to-end compliance audit, controls remediation, and a 60-day program to align documentation and reporting with current regulation.",
    outcome:
      "Cleared the inspection with zero supervisory observations. 60-day delivery against a 90-day window. Compliance ops re-architected for the next two regulatory cycles.",
  },
  {
    no: "03",
    sector: "Family Business",
    title: "Succession planning and structuring for a family business",
    context:
      "A second-generation promoter group preparing for a generational transition and a future capital event.",
    intervention:
      "Holding-structure redesign, governance framework, and a multi-year succession plan aligning ownership, control, and operating responsibility.",
    outcome:
      "Promoter holdings consolidated into a single SPV. Succession charter ratified by the board. Investor diligence cleared in the first capital round, two years later.",
  },
  {
    no: "04",
    sector: "Technology & SaaS",
    title: "Market entry and brand launch for a Series-A SaaS company",
    context:
      "A Series-A SaaS company entering a new geography with a thin brand presence and an unproven sales motion.",
    intervention:
      "Positioning, go-to-market design, brand launch, and demand-generation infrastructure delivered as a single program.",
    outcome:
      "From $0 to $2.1M ARR in the new market within 11 months. Four enterprise logos in the launch quarter. Pipeline coverage stable at 4× target.",
  },
  {
    no: "05",
    sector: "Real Estate",
    title: "Financial restructuring and capital raise for a developer",
    context:
      "A residential developer carrying high-cost debt with a stalled flagship project and constrained access to fresh capital.",
    intervention:
      "Cash-flow restructuring, lender negotiation, and a structured capital raise from an institutional alternatives investor.",
    outcome:
      "₹400 Cr structured capital raise closed in nine months. Lender book reduced by 38%. Flagship project re-launched on schedule with revised unit economics.",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <section className={`pageHero ${styles.hero}`}>
        <div className="container container--narrow">
          <div className="pageHero-meta">
            <span>Chapter · 05 / 07 · Case Studies</span>
            <span aria-hidden="true">CONFIDENTIAL · SANITIZED</span>
          </div>
          <span className="eyebrow" data-reveal="fade">Case Studies</span>
          <h1 className={styles.heroHead} data-reveal>The work, in detail.</h1>
          <p className={styles.heroBody} data-reveal="rise-sm">
            A selection of engagements that illustrate how we work, what we
            deliver, and the outcomes we have helped clients achieve. Each
            study follows the same structure — context, intervention, outcome
            — with quantifiable impact wherever the engagement allows it.
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="featured-h">
        <div className="container">
          <span className="eyebrow">Featured Engagements</span>
          <h2 id="featured-h" className={styles.sectionHead}>
            Selected work, sanitized for client confidentiality.
          </h2>

          <ol className={styles.list} data-reveal-stagger>
            {CASE_STUDIES.map((c, i) => (
              <li
                key={c.no}
                className={styles.item}
                style={{ ["--stagger-i" as string]: i }}
              >
                <article>
                  <header className={styles.itemHeader}>
                    <span className={styles.itemNo}>{c.no}</span>
                    <span className={styles.itemSector}>{c.sector}</span>
                  </header>

                  <h3 className={styles.itemTitle}>{c.title}</h3>

                  <dl className={styles.facts}>
                    <div className={styles.fact}>
                      <dt>Context</dt>
                      <dd>{c.context}</dd>
                    </div>
                    <div className={styles.fact}>
                      <dt>Intervention</dt>
                      <dd>{c.intervention}</dd>
                    </div>
                    <div className={styles.fact}>
                      <dt>Outcome</dt>
                      <dd className={styles.outcome}>{c.outcome}</dd>
                    </div>
                  </dl>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--ink section--tight">
        <div className="container container--narrow" style={{ textAlign: "center" }}>
          <h2 className={styles.ctaHead}>
            Discretion is part of the work.
          </h2>
          <p className={styles.ctaBody}>
            Many of our engagements stay private at the client&apos;s request.
            If you would like a confidential reference relevant to your
            situation, ask us.
          </p>
          <div style={{ marginTop: "2rem" }}>
            <Link href="/contact" className="btn btn--ghost">
              Request a Reference
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
