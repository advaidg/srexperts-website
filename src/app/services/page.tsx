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
          <span className="eyebrow" data-reveal="fade">Services</span>
          <h1 className={styles.heroHead} data-reveal>
            Five practices. One partnership.
          </h1>
          <p className={styles.heroBody} data-reveal="rise-sm">
            SR Experts delivers integrated advisory across the five disciplines
            that determine whether a business scales, stalls, or stumbles.
            Engage one practice or all five. The work is coordinated either
            way.
          </p>
        </div>

        {/* index list */}
        <div className={`container ${styles.indexWrap}`}>
          <ol className={styles.index} data-reveal-stagger>
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
              <header className={styles.practiceHeader} data-reveal>
                <span className={styles.practiceNo}>{p.no}</span>
                <h2 id={`${p.id}-h`} className={styles.practiceTitle}>
                  {p.title}
                </h2>
                <p className={styles.practicePitch}>{p.pitch}</p>
              </header>

              <div className={styles.practiceBody}>
                <div data-reveal="rise-sm">
                  <h3 className={styles.practiceSub}>What we deliver</h3>
                  <ul className={styles.deliverList} data-reveal-stagger>
                    {p.deliver.map((item, i) => (
                      <li key={item} style={{ ["--stagger-i" as string]: i }}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div data-reveal="rise-sm">
                  <h3 className={styles.practiceSub}>Who it is for</h3>
                  <p className={styles.practiceFor}>{p.forWho}</p>
                  <Link href="/contact" className="inline-link" style={{ marginTop: "1.5rem", display: "inline-block" }}>
                    Engage this practice →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

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
