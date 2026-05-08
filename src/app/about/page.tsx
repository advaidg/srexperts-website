import type { Metadata } from "next";
import Link from "next/link";
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
      <section className={styles.hero}>
        <div className="container container--narrow">
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

          {/* placeholder cards for founder profiles */}
          <div className={styles.leaderGrid}>
            {Array.from({ length: 3 }).map((_, i) => (
              <article key={i} className={styles.leaderCard}>
                <div className={styles.leaderPhoto} aria-hidden="true" />
                <div className={styles.leaderMeta}>
                  <h3 className={styles.leaderName}>Partner Name</h3>
                  <p className={styles.leaderRole}>Practice Lead</p>
                  <p className={styles.leaderCred}>
                    Prior firms · credentials · sector focus
                  </p>
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
                <dt className={styles.numberValue}>{n.value}</dt>
                <dd className={styles.numberLabel}>{n.label}</dd>
              </div>
            ))}
          </dl>
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
