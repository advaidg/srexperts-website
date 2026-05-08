import type { Metadata } from "next";
import Link from "next/link";
import { Counter } from "@/components/Counter";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About",
  description:
    "SR Experts was founded on a simple observation. The advisory market is broken for everyone outside the Fortune 500. We built SR Experts to close that gap.",
};

const PHILOSOPHY = [
  {
    word: "Accessible",
    body:
      "Our partners are reachable, our pricing is transparent, and our work product is built for execution, not for shelf display.",
  },
  {
    word: "Accountable",
    body: "We measure ourselves against your outcomes, not our utilization.",
  },
  {
    word: "Integrated",
    body:
      "Our consulting, financial, legal, technology, and marketing teams work as one. No handoffs. No finger-pointing. No briefing the same context to four different vendors.",
  },
];

const NUMBERS = [
  { value: "120+", label: "Engagements completed" },
  { value: "18", label: "Industries served" },
  { value: "9", label: "Countries of operation" },
  { value: "78%", label: "Repeat engagement rate" },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className={`pageHero ${styles.hero}`}>
        <div className="container container--narrow">
          <div className="pageHero-meta">
            <span>Chapter · 02 / 07 · About</span>
            <span aria-hidden="true">EST · 2026</span>
          </div>
          <span className="eyebrow" data-reveal="fade">
            About
          </span>
          <h1 className={styles.heroHead} data-reveal>
            Built for the businesses the big firms forgot.
          </h1>
          <p className={styles.heroBody} data-reveal="rise-sm">
            SR Experts was founded on a simple observation. The advisory market
            is broken for everyone outside the Fortune 500. Boutique firms lack
            breadth. Big Four firms lack interest. Mid-market businesses are
            left navigating critical decisions with fragmented support.
          </p>
          <p className={styles.heroBodyEm} data-reveal="rise-sm">
            We built SR Experts to close that gap.
          </p>
        </div>
      </section>

      {/* ORIGIN — TIMELINE */}
      <section className="section section--bone-deep" aria-labelledby="origin-h">
        <div className="container">
          <header className={styles.headerRow}>
            <span className="eyebrow">Origin</span>
            <h2 id="origin-h" className={styles.sectionHead}>
              A short history. A long ambition.
            </h2>
          </header>

          <ol className={styles.timeline} data-reveal-stagger>
            {[
              {
                year: "2024",
                title: "The thesis",
                body:
                  "Three founding partners walk away from senior roles at consulting, finance, and legal firms. The thesis: integrated advisory, partner-led, calibrated for mid-market India. No boutique. No Big Four overhead.",
              },
              {
                year: "2025",
                title: "First fifty",
                body:
                  "Fifty engagements across nine sectors in twelve months. Seventy-eight percent of clients sign a second engagement. The integrated model is no longer a thesis — it is a track record.",
              },
              {
                year: "2026",
                title: "Cross-border",
                body:
                  "Singapore desk opens. Cross-border M&A and capital advisory becomes a fourth column. Headcount doubles. Hiring stays partner-track only.",
              },
              {
                year: "Now",
                title: "Built for the next decade",
                body:
                  "Five integrated practices. Seven sectors. Three offices. One bar — the work has to deliver an outcome the client can measure in their P&L.",
              },
            ].map((t, i) => (
              <li
                key={t.year}
                className={styles.timelineItem}
                style={{ ["--stagger-i" as string]: i }}
              >
                <span className={styles.timelineYear}>{t.year}</span>
                <h3 className={styles.timelineTitle}>{t.title}</h3>
                <p className={styles.timelineBody}>{t.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="section section--bone-deep" aria-labelledby="philosophy-h">
        <div className="container">
          <div className={styles.headerRow}>
            <span className="eyebrow">Our Philosophy</span>
            <h2 id="philosophy-h" className={styles.sectionHead}>
              We believe expertise should be accessible, accountable, and
              integrated.
            </h2>
          </div>

          <dl className={styles.principles} data-reveal-stagger>
            {PHILOSOPHY.map((p, i) => (
              <div
                key={p.word}
                className={styles.principle}
                style={{ ["--stagger-i" as string]: i }}
              >
                <dt className={styles.principleTerm}>{p.word}</dt>
                <dd className={styles.principleBody}>{p.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* APPROACH */}
      <section className="section" aria-labelledby="approach-h">
        <div className="container">
          <div className={styles.approachGrid}>
            <div>
              <span className="eyebrow">Our Approach</span>
              <h2 id="approach-h" className={styles.sectionHead}>
                Every engagement begins with a structured diagnostic.
              </h2>
            </div>
            <div className={styles.approachBody}>
              <p>
                We map the business landscape, identify the constraint, and
                design an intervention that addresses root cause, not symptoms.
                Then we execute, alongside your team, until the outcome is
                real.
              </p>
              <p className={styles.approachQuote}>
                This is not a sales pitch. It is the discipline that separates
                advisory from theatre.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="section section--ink" aria-labelledby="leadership-h">
        <div className="container">
          <span className="eyebrow">Leadership</span>
          <h2 id="leadership-h" className={styles.leaderHead}>
            Partners who have sat on both sides of the table.
          </h2>
          <p className={styles.leaderBody}>
            Our partners bring experience from leading consulting firms,
            top-tier law practices, Big Four accounting, and high-growth
            technology companies. We have advised regulators, founders, and
            boards. We bring that perspective to every engagement.
          </p>

          <div className={styles.leaderGrid}>
            {[
              {
                name: "Sridhar Iyer",
                monogram: "SI",
                role: "Founding Partner",
                practice: "Strategy & M&A",
                bio: "Two decades across consulting, corporate development, and the operator seat. Built and exited two operating businesses before founding SR Experts. Boards and founders call him for the questions that have no obvious answer.",
                credentials: ["IIM-A", "CFA", "Board advisor"],
              },
              {
                name: "Aisha Mehta, FCA",
                monogram: "AM",
                role: "Partner",
                practice: "Finance, Tax & CFO Advisory",
                bio: "Eighteen years across statutory audit, M&A diligence, and finance leadership. Has held interim CFO mandates from Series A through pre-IPO. Lead author of the firm's diligence playbook.",
                credentials: ["FCA", "Ex-Big Four", "Pre-IPO CFO"],
              },
              {
                name: "Rohan Khanna",
                monogram: "RK",
                role: "Partner",
                practice: "Legal & Regulatory",
                bio: "Corporate, M&A, and regulated-industry counsel. Lead negotiator on cross-border transactions exceeding $1B in aggregate value. Appears regularly before sector regulators.",
                credentials: ["Bar Council of India", "LL.M.", "Ex-AZB"],
              },
              {
                name: "Kabir Sen",
                monogram: "KS",
                role: "Partner",
                practice: "Technology & Digital",
                bio: "Engineering leadership at two unicorns before turning to advisory. Hands-on with cloud, security, and applied AI delivery — not just strategy decks. Holds three patents in distributed systems.",
                credentials: ["Ex-Series-B CTO", "IIT", "AWS Hero"],
              },
              {
                name: "Priya Verma",
                monogram: "PV",
                role: "Partner",
                practice: "Marketing & Growth",
                bio: "Brand, demand, and revenue across consumer and B2B. Scaled the growth function inside a unicorn from $2M to $80M ARR. Now does the same for many.",
                credentials: ["Ex-CMO", "ISB", "Cannes Lion"],
              },
            ].map((p, i) => (
              <article
                key={p.name}
                className={styles.leaderCard}
                style={{ ["--stagger-i" as string]: i }}
              >
                <div className={styles.leaderPhoto} aria-hidden="true">
                  <span className={styles.leaderMonogram}>{p.monogram}</span>
                </div>
                <div className={styles.leaderMeta}>
                  <h3 className={styles.leaderName}>{p.name}</h3>
                  <p className={styles.leaderRole}>
                    {p.role} · {p.practice}
                  </p>
                  <p className={styles.leaderCred}>{p.bio}</p>
                  <ul className={styles.leaderTags}>
                    {p.credentials.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* NUMBERS */}
      <section className="section" aria-labelledby="numbers-h">
        <div className="container">
          <span className="eyebrow">Our Numbers</span>
          <h2 id="numbers-h" className={styles.numbersHead}>
            What we have done so far.
          </h2>
          <dl className={styles.numbers} data-reveal-stagger>
            {NUMBERS.map((n, i) => (
              <div
                key={n.label}
                className={styles.numberItem}
                style={{ ["--stagger-i" as string]: i }}
              >
                <dt className={styles.numberValue}>
                  <Counter value={n.value} />
                </dt>
                <dd className={styles.numberLabel}>{n.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* WHERE WE WORK */}
      <section className="section section--bone-deep" aria-labelledby="offices-h">
        <div className="container">
          <header className={styles.headerRow}>
            <span className="eyebrow">Where We Work</span>
            <h2 id="offices-h" className={styles.sectionHead}>
              Three desks. One firm.
            </h2>
          </header>

          <div className={styles.offices} data-reveal-stagger>
            {[
              {
                city: "Mumbai",
                role: "Headquarters",
                body:
                  "Finance, legal, and the firm's central operations. The desk most engagements pass through.",
                meta: "BKC · Operating since 2024",
              },
              {
                city: "Bengaluru",
                role: "Tech & Capital",
                body:
                  "Founder advisory, technology delivery, and investor-facing work. The desk closest to the venture and product economy.",
                meta: "Indiranagar · Operating since 2025",
              },
              {
                city: "Singapore",
                role: "Cross-border",
                body:
                  "Cross-border M&A, structuring, and capital advisory for businesses operating across South and South-East Asia.",
                meta: "Raffles Place · Operating since 2026",
              },
              {
                city: "Remote",
                role: "Execution Pods",
                body:
                  "Sector-aligned delivery teams that ship the work alongside the partner on each engagement. India and South-East Asia time-zones.",
                meta: "Across India · Always-on",
              },
            ].map((o, i) => (
              <article
                key={o.city}
                className={styles.officeCard}
                style={{ ["--stagger-i" as string]: i }}
              >
                <div className={styles.officeTop}>
                  <h3 className={styles.officeCity}>{o.city}</h3>
                  <span className={styles.officeRole}>{o.role}</span>
                </div>
                <p className={styles.officeBody}>{o.body}</p>
                <p className={styles.officeMeta}>{o.meta}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section--tight" style={{ paddingBlock: "var(--space-9)" }}>
        <div className="container container--narrow" style={{ textAlign: "center" }}>
          <h2 className={styles.ctaHead}>Want to see how we work?</h2>
          <p className={styles.ctaBody}>
            A 30-minute conversation is the fastest way to know whether SR
            Experts is the right partner for your next chapter.
          </p>
          <div style={{ marginTop: "2rem" }}>
            <Link href="/contact" className="btn btn--primary">
              Schedule a Discovery Call
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
