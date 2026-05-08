import type { Metadata } from "next";
import Link from "next/link";
import styles from "./services.module.css";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Five practices. One partnership. Strategy, finance, legal, technology, and marketing — coordinated under one roof.",
};

type Practice = {
  id: string;
  no: string;
  title: string;
  pitch: string;
  deliver: string[];
  forWho: string;
  recent: { sector: string; outcome: string };
};

const PRACTICES: Practice[] = [
  {
    id: "strategy",
    no: "01",
    title: "Strategy & Management Consulting",
    pitch: "The questions a CEO loses sleep over, answered with rigor.",
    deliver: [
      "Growth strategy and market entry",
      "Operational excellence and cost transformation",
      "Mergers, acquisitions, and integration support",
      "Turnaround and restructuring advisory",
      "Board and investor advisory",
      "Organizational design and leadership consulting",
    ],
    forWho:
      "Founders preparing for the next phase. Boards navigating transition. Management teams confronting complexity that internal capability cannot resolve alone.",
    recent: {
      sector: "Manufacturing",
      outcome:
        "Operating-model redesign across three plants. EBITDA margin recovered 480 bps in 18 months.",
    },
  },
  {
    id: "finance",
    no: "02",
    title: "Finance, CA & CS Services",
    pitch: "The financial backbone of a serious business.",
    deliver: [
      "Statutory and internal audit",
      "Direct and indirect taxation, including GST advisory",
      "Company secretarial services and ROC compliance",
      "Virtual CFO and financial planning",
      "Transaction advisory and due diligence",
      "Forensic accounting and investigation",
    ],
    forWho:
      "Businesses that have outgrown a single accountant. Founders preparing for funding rounds. Enterprises that need finance leadership without a full-time hire.",
    recent: {
      sector: "Series-A SaaS",
      outcome:
        "Diligence-readiness program ahead of a $40M round. Closed in 11 weeks with no material findings.",
    },
  },
  {
    id: "legal",
    no: "03",
    title: "Legal & Regulatory Compliance",
    pitch: "Counsel that protects the business and accelerates the deal.",
    deliver: [
      "Corporate and commercial contract advisory",
      "Regulatory compliance and filings",
      "Dispute resolution and litigation strategy",
      "Intellectual property and data protection",
      "Employment and labor law advisory",
      "Sector-specific regulatory navigation",
    ],
    forWho:
      "Businesses operating in regulated industries. Founders signing contracts that matter. Companies that need a legal partnership, not just legal coverage.",
    recent: {
      sector: "Regional NBFC",
      outcome:
        "Compliance overhaul ahead of an RBI inspection. Cleared with zero supervisory observations.",
    },
  },
  {
    id: "technology",
    no: "04",
    title: "Technology & Digital Transformation",
    pitch: "The infrastructure modern businesses are built on.",
    deliver: [
      "Custom software development",
      "AI strategy and implementation",
      "Cloud migration and architecture",
      "Cybersecurity audits and compliance",
      "Data engineering and analytics",
      "Digital product strategy",
    ],
    forWho:
      "Businesses where technology is no longer a back-office function. Founders building digital-first products. Enterprises modernizing operations.",
    recent: {
      sector: "Mid-market Insurer",
      outcome:
        "Cloud migration + cybersecurity audit. Six legacy applications retired, RTO improved from days to hours.",
    },
  },
  {
    id: "marketing",
    no: "05",
    title: "Marketing & Growth",
    pitch: "Brand, demand, and revenue, connected.",
    deliver: [
      "Brand strategy and positioning",
      "Performance marketing across channels",
      "Content and editorial strategy",
      "Search, social, and conversion optimization",
      "Sales enablement and lead generation",
      "Marketing analytics and attribution",
    ],
    forWho:
      "Businesses where growth has plateaued. Founders ready to invest in demand generation with discipline. Marketing teams that need senior strategy on top of execution.",
    recent: {
      sector: "B2B SaaS",
      outcome:
        "Demand-engine rebuild for a Series-B platform. Pipeline 2.4× in 90 days, blended CAC down 31%.",
    },
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <section className={`pageHero ${styles.hero}`}>
        <div className="container container--narrow">
          <div className="pageHero-meta">
            <span>Chapter · 03 / 07 · Services</span>
            <span aria-hidden="true">FIVE PRACTICES · ONE PARTNERSHIP</span>
          </div>
          <span className="eyebrow">Services</span>
          <h1 className={styles.heroHead}>
            Five practices. One partnership.
          </h1>
          <p className={styles.heroBody}>
            SR Experts delivers integrated advisory across the five disciplines
            that determine whether a business scales, stalls, or stumbles.
            Engage one practice or all five. The work is coordinated either
            way.
          </p>
        </div>

        {/* index list */}
        <div className={`container ${styles.indexWrap}`}>
          <ol className={styles.index}>
            {PRACTICES.map((p, i) => (
              <li key={p.id} style={{ ["--stagger-i" as string]: i }}>
                <a href={`#${p.id}`} className={styles.indexLink}>
                  <span className={styles.indexNo}>{p.no}</span>
                  <span className={styles.indexTitle}>{p.title}</span>
                  <span className={styles.indexJump} aria-hidden="true">
                    ↓
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* PRACTICE BLOCKS */}
      {PRACTICES.map((p, idx) => (
        <section
          id={p.id}
          key={p.id}
          aria-labelledby={`${p.id}-h`}
          className={`section ${idx % 2 === 1 ? "section--bone-deep" : ""}`}
        >
          <div className="container">
            <div className={styles.practiceGrid}>
              <header className={styles.practiceHeader}>
                <span className={styles.practiceNo}>{p.no}</span>
                <h2 id={`${p.id}-h`} className={styles.practiceTitle}>
                  {p.title}
                </h2>
                <p className={styles.practicePitch}>{p.pitch}</p>
              </header>

              <div className={styles.practiceBody}>
                <div>
                  <h3 className={styles.practiceSub}>What we deliver</h3>
                  <ul className={styles.deliverList}>
                    {p.deliver.map((item, i) => (
                      <li key={item} style={{ ["--stagger-i" as string]: i }}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className={styles.practiceSub}>Who it is for</h3>
                  <p className={styles.practiceFor}>{p.forWho}</p>

                  <div className={styles.recent}>
                    <span className={styles.recentLabel}>Recent engagement</span>
                    <p className={styles.recentOutcome}>
                      <strong>{p.recent.sector}.</strong> {p.recent.outcome}
                    </p>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-link"
                    style={{ marginTop: "1.5rem", display: "inline-block" }}
                  >
                    Engage this practice →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* PRICING & ENGAGEMENT PRINCIPLES */}
      <section className="section section--bone-deep" aria-labelledby="pricing-h">
        <div className="container">
          <header className={styles.pricingHeader}>
            <span className="eyebrow">Pricing & Engagement</span>
            <h2 id="pricing-h" className={styles.sectionHead}>
              How we charge — and what we will not do.
            </h2>
            <p className={styles.pricingIntro}>
              The default is fixed-fee, milestone-billed, with a written
              engagement letter that names the outcome. The exceptions are
              listed below.
            </p>
          </header>

          <ul className={styles.principles}>
            {[
              {
                title: "Fixed-fee where possible",
                body:
                  "Diagnostics and most projects are fixed-fee, billed against milestones. You know what the engagement costs before it starts.",
              },
              {
                title: "Hourly, only where the work is genuinely open-ended",
                body:
                  "Litigation, regulatory disputes, and a small set of advisory mandates run on hourly rates with a not-to-exceed cap and weekly burn updates.",
              },
              {
                title: "Retainers are scoped, not blank cheques",
                body:
                  "Monthly retainers come with a written deliverable list. We refuse retainers that exist to keep us on call.",
              },
              {
                title: "No success fees on advisory",
                body:
                  "Capital raises and M&A carry transaction-linked fees as the market expects. We do not stack contingent fees on advisory work.",
              },
              {
                title: "Quarterly value review",
                body:
                  "Every retained engagement gets a written review every quarter. If we are not earning the next quarter, we say so first.",
              },
              {
                title: "Indian and cross-border tax-receipted",
                body:
                  "GST-compliant invoicing in INR. SGD and USD invoicing through the Singapore desk for cross-border engagements.",
              },
            ].map((p, i) => (
              <li
                key={p.title}
                className={styles.principle}
                style={{ ["--stagger-i" as string]: i }}
              >
                <h3 className={styles.principleTitle}>{p.title}</h3>
                <p className={styles.principleBody}>{p.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* COMMON STARTING POINTS */}
      <section className="section" aria-labelledby="starts-h">
        <div className="container container--narrow">
          <header className={styles.startsHeader}>
            <span className="eyebrow">Common starting points</span>
            <h2 id="starts-h" className={styles.sectionHead}>
              Not sure which practice to start with?
            </h2>
            <p className={styles.pricingIntro}>
              Most engagements begin with one of the following. The
              cross-practice work follows naturally from there.
            </p>
          </header>

          <dl className={styles.starts}>
            {[
              {
                q: "We are preparing for a funding round.",
                a: "Start with Finance for diligence-readiness, then layer in Legal for the cap table and SHA, and Strategy for the investor narrative.",
              },
              {
                q: "We have outgrown a single accountant.",
                a: "Finance & CA Services. Often paired with a Virtual CFO retainer until you have hired the full-time finance leader.",
              },
              {
                q: "We are entering a new market.",
                a: "Strategy for the entry plan, Marketing & Growth for launch, Legal for the entity setup. The work is sequenced, not run in parallel.",
              },
              {
                q: "Our compliance posture has fallen behind.",
                a: "Legal & Regulatory diagnostic in week one. Remediation schedule by week three. Re-baselined controls within the quarter.",
              },
              {
                q: "Our growth has plateaued.",
                a: "Marketing & Growth for the demand side, Strategy for the offer side. We refuse engagements where only one of the two is in scope.",
              },
              {
                q: "We are restructuring or carving out.",
                a: "Strategy + Legal + Finance run as a single program. One brief. One steering committee. One report.",
              },
            ].map((s, i) => (
              <div
                key={s.q}
                className={styles.start}
                style={{ ["--stagger-i" as string]: i }}
              >
                <dt className={styles.startQ}>{s.q}</dt>
                <dd className={styles.startA}>{s.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CTA */}
      <section className="section--tight" style={{ paddingBlock: "var(--space-9)" }}>
        <div className="container container--narrow" style={{ textAlign: "center" }}>
          <h2 className={styles.ctaHead}>Engage one practice. Or all five.</h2>
          <p className={styles.ctaBody}>
            Tell us what you are facing. We will tell you whether we are the
            right partner to help.
          </p>
          <div style={{ marginTop: "2rem" }}>
            <Link href="/contact" className="btn btn--primary">
              Book a Discovery Call
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
