import Link from "next/link";
import styles from "./home.module.css";

const SERVICES = [
  {
    no: "01",
    title: "Strategy & Management Consulting",
    body:
      "Market entry, growth strategy, operational transformation, and turnaround advisory for businesses ready to scale.",
    href: "/services#strategy",
  },
  {
    no: "02",
    title: "Finance, CA & CS Services",
    body:
      "Audit, taxation, statutory compliance, financial planning, company secretarial work, and CFO advisory, executed with precision.",
    href: "/services#finance",
  },
  {
    no: "03",
    title: "Legal & Regulatory Compliance",
    body:
      "Corporate law, contract advisory, dispute resolution, regulatory filings, and end-to-end compliance for businesses operating in complex environments.",
    href: "/services#legal",
  },
  {
    no: "04",
    title: "Technology & Digital Transformation",
    body:
      "Custom software, AI integration, cloud migration, cybersecurity audits, and the digital infrastructure modern businesses run on.",
    href: "/services#technology",
  },
  {
    no: "05",
    title: "Marketing & Growth",
    body:
      "Brand strategy, performance marketing, content, and demand generation that connects spend to revenue.",
    href: "/services#marketing",
  },
];

const REASONS = [
  {
    title: "One Partnership. Every Discipline.",
    body:
      "Stop managing five vendors. Work with one team that already understands your business.",
  },
  {
    title: "Senior Talent on Every Engagement.",
    body: "Partners are on your engagements, not just on your invoices.",
  },
  {
    title: "Pricing Built for the Mid-Market.",
    body:
      "The expertise of a Big Four, structured for businesses without a Big Four budget.",
  },
  {
    title: "Outcomes, Not Hours.",
    body:
      "We measure success by what changes in your business, not by what we billed.",
  },
];

const PRACTICES_RAIL = [
  { no: "01", label: "Strategy" },
  { no: "02", label: "Finance" },
  { no: "03", label: "Legal" },
  { no: "04", label: "Technology" },
  { no: "05", label: "Marketing" },
];

function AnimatedHeadline({ line1, line2 }: { line1: string; line2: string }) {
  const renderLine = (line: string, base: number) =>
    [...line].map((char, i) => (
      <span
        key={`${base}-${i}`}
        style={{ ["--letter-i" as string]: base + i }}
      >
        {char === " " ? " " : char}
      </span>
    ));

  return (
    <>
      <span className={styles.line} aria-hidden="true">
        {renderLine(line1, 0)}
      </span>
      <span className={`${styles.line} ${styles.heroEm}`} aria-hidden="true">
        {renderLine(line2, line1.length + 4)}
      </span>
    </>
  );
}

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className={styles.hero} aria-labelledby="hero-h">
        <div className={styles.heroBg}>
          <div className="grain" aria-hidden="true" />
        </div>

        {/* meta row */}
        <div className={styles.heroMeta}>
          <span>
            <span className="dot" aria-hidden="true" />
            <strong>Live</strong> · Mumbai · Bengaluru · Singapore
          </span>
          <span aria-hidden="true">SR/01 · {new Date().getFullYear()}</span>
        </div>

        {/* main row */}
        <div className={styles.heroBody}>
          <div>
            <span className={`eyebrow ${styles.heroEyebrow}`} data-reveal="fade">
              Integrated Advisory
            </span>
            <h1
              id="hero-h"
              className={`${styles.heroTitle} letterRise`}
              aria-label="The Only Expert You Need."
            >
              <AnimatedHeadline line1="The Only Expert" line2="You Need." />
            </h1>

            <p className={styles.heroSub} data-reveal="rise-sm">
              Strategy, finance, legal, technology, and marketing, delivered by
              one firm. Built for the businesses that built India.
            </p>
            <p className={styles.heroSupport} data-reveal="rise-sm">
              The depth of a Big Four. The agility of a partner who actually
              picks up the phone.
            </p>
            <div className={styles.heroCtas} data-reveal="rise-sm">
              <Link href="/contact" className="btn btn--primary">
                Book a Discovery Call
                <span className="btn-arrow" aria-hidden="true">
                  →
                </span>
              </Link>
              <Link href="/services" className="btn btn--ghost">
                Explore Our Services
              </Link>
            </div>
          </div>

          <aside className={styles.heroCard} data-reveal aria-hidden="true">
            <div className={styles.heroCardTop}>
              <span>Engagement Profile</span>
              <em>Active</em>
            </div>
            <div className={styles.heroCardStats}>
              <div className={styles.heroCardStat}>
                <span className={styles.heroCardValue}>120+</span>
                <span className={styles.heroCardLabel}>Engagements</span>
              </div>
              <div className={styles.heroCardStat}>
                <span className={styles.heroCardValue}>18</span>
                <span className={styles.heroCardLabel}>Industries</span>
              </div>
              <div className={styles.heroCardStat}>
                <span className={styles.heroCardValue}>9</span>
                <span className={styles.heroCardLabel}>Countries</span>
              </div>
              <div className={styles.heroCardStat}>
                <span className={styles.heroCardValue}>78%</span>
                <span className={styles.heroCardLabel}>Repeat rate</span>
              </div>
            </div>
            <p className={styles.heroCardQuote}>
              &ldquo;Most firms sell hours. We deliver clarity.&rdquo;
            </p>
          </aside>
        </div>

        {/* hero foot */}
        <div className={styles.heroFoot}>
          <div className={styles.heroFootLeft}>
            <span>EST · 2026</span>
            <span aria-hidden="true">·</span>
            <span>EN-IN</span>
          </div>
          <span className="scroll-cue" aria-hidden="true">
            Scroll
          </span>
          <div className={styles.heroFootLeft}>
            <span>SREXPERTS.IN</span>
          </div>
        </div>
      </section>

      {/* PRACTICE RAIL */}
      <div className={styles.railWrap} aria-hidden="true">
        <div className={styles.rail}>
          <div className={styles.railLabel}>
            Five practices · One partnership
          </div>
          <ul className={styles.railList}>
            {PRACTICES_RAIL.map((p) => (
              <li key={p.no} className={styles.railItem}>
                <span className={styles.railNo}>{p.no}</span>
                <span>{p.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* PROBLEM */}
      <section className="section section--bone-deep" aria-labelledby="problem-h">
        <div className="container container--narrow">
          <span className="eyebrow" data-reveal="fade">
            The Problem We Solve
          </span>
          <h2 id="problem-h" className={styles.problemHead} data-reveal>
            World-class advisory was reserved for the Fortune 500.
          </h2>
          <div className={styles.problemBody} data-reveal="rise-sm">
            <p>
              For decades, mid-market and growing businesses were left to
              stitch together fragmented advice from a dozen vendors — each
              with their own agenda, none with the full picture.
            </p>
            <p className={styles.problemTurn}>SR Experts changes that.</p>
            <p>
              We deliver integrated consulting, financial, legal, technology,
              and marketing expertise under one roof, calibrated for businesses
              that need answers, not theatre.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="section" aria-labelledby="services-h">
        <div className="container">
          <header className={styles.servicesHeader}>
            <div>
              <span className="eyebrow">What We Do</span>
              <h2 id="services-h">
                A single advisory partnership across five integrated practices.
              </h2>
            </div>
            <Link href="/services" className="inline-link">
              Explore all services →
            </Link>
          </header>

          <ol className={styles.serviceList} data-reveal-stagger>
            {SERVICES.map((s, i) => (
              <li key={s.no} style={{ ["--stagger-i" as string]: i }}>
                <Link href={s.href} className={styles.serviceRow}>
                  <span className={styles.serviceNo}>{s.no}</span>
                  <div className={styles.serviceBody}>
                    <h3>{s.title}</h3>
                    <p>{s.body}</p>
                  </div>
                  <span className={styles.serviceArrow} aria-hidden="true">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* WHY */}
      <section className="section section--ink" aria-labelledby="why-h">
        <div className="container">
          <span className="eyebrow">Why SR Experts</span>
          <h2 id="why-h" className={styles.whyHead}>
            Most firms sell hours. We deliver clarity.
          </h2>

          <div className={styles.whyGrid} data-reveal-stagger>
            {REASONS.map((r, i) => (
              <article
                key={r.title}
                className={styles.whyCard}
                style={{ ["--stagger-i" as string]: i }}
              >
                <h3 className={styles.whyTitle}>{r.title}</h3>
                <p className={styles.whyBody}>{r.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TRUSTED BY */}
      <section className="section section--tight" aria-labelledby="trust-h">
        <div className="container container--narrow" style={{ textAlign: "center" }}>
          <span className="eyebrow">Trusted By</span>
          <h2 id="trust-h" className={styles.trustHead}>
            A growing roster of founders, family businesses, and emerging
            enterprises across India and beyond.
          </h2>
          <div className={styles.logoWall} aria-label="Client logo wall (placeholder)">
            {Array.from({ length: 6 }).map((_, i) => (
              <span key={i} className={styles.logoTile}>
                <span className={styles.logoTilePlaceholder}>Client {i + 1}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section" aria-labelledby="cta-h">
        <div className="container">
          <div className={styles.finalCta}>
            <div>
              <span className="eyebrow">A 30-minute conversation</span>
              <h2 id="cta-h" className={styles.finalHead}>
                Most firms sell hours. We deliver clarity.
              </h2>
              <p className={styles.finalSub}>
                A 30-minute conversation is the fastest way to know whether SR
                Experts is the right partner for your next chapter.
              </p>
            </div>
            <div className={styles.finalAction}>
              <Link href="/contact" className="btn btn--primary">
                Schedule a Discovery Call
                <span className="btn-arrow" aria-hidden="true">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
