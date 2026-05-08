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
      "Stop managing five vendors. Work with one team that already understands your business, your numbers, and your context.",
  },
  {
    title: "Senior Talent on Every Engagement.",
    body:
      "Partners are on your engagements, not just on your invoices. The person who pitched the work is the person doing the work.",
  },
  {
    title: "Pricing Built for the Mid-Market.",
    body:
      "The expertise of a Big Four, structured for businesses without a Big Four budget. Fixed-fee where possible. No surprise invoices.",
  },
  {
    title: "Outcomes, Not Hours.",
    body:
      "We measure success by what changes in your business, not by what we billed. Engagement value is reviewed every quarter.",
  },
  {
    title: "Discretion as a Discipline.",
    body:
      "Most of our work never reaches a case study. NDAs are signed before scope is specified. References on request only.",
  },
  {
    title: "Built in India, for India.",
    body:
      "We understand promoter dynamics, regulatory texture, and the operating reality of growing in this country. No imported playbooks.",
  },
];

const PRACTICES_RAIL = [
  { no: "01", label: "Strategy" },
  { no: "02", label: "Finance" },
  { no: "03", label: "Legal" },
  { no: "04", label: "Technology" },
  { no: "05", label: "Marketing" },
];

const PROCESS = [
  {
    step: "01",
    title: "Diagnostic",
    body:
      "Two to four weeks of structured discovery — interviews, data work, and constraint mapping. The goal is a single page that names the actual problem.",
  },
  {
    step: "02",
    title: "Design",
    body:
      "An intervention scoped to root cause, not symptoms. Sequenced, costed, and stress-tested with the management team before anything is committed.",
  },
  {
    step: "03",
    title: "Execution",
    body:
      "We work alongside your team. Cadence is weekly, in writing. Decisions are logged. Course corrections are explicit, not implied.",
  },
  {
    step: "04",
    title: "Hand-off",
    body:
      "Documentation, dashboards, and the institutional memory required to keep the change durable after we leave the room.",
  },
];

const TRUSTED_BY = [
  { sector: "Family Office", city: "Bengaluru" },
  { sector: "Tier-2 NBFC", city: "Mumbai" },
  { sector: "SaaS Series-B", city: "Singapore" },
  { sector: "Industrial Group", city: "Chennai" },
  { sector: "PE-backed Retail", city: "Delhi NCR" },
  { sector: "Hospital Network", city: "Hyderabad" },
];

const STAT_STRIP = [
  { value: "120+", label: "Engagements completed" },
  { value: "78%", label: "Repeat engagement rate" },
  { value: "<24h", label: "Partner response window" },
  { value: "9", label: "Countries of operation" },
];

function AnimatedHeadline({ line1, line2 }: { line1: string; line2: string }) {
  const renderLine = (line: string, base: number) =>
    [...line].map((char, i) => (
      <span
        key={`${base}-${i}`}
        style={{ ["--letter-i" as string]: base + i }}
      >
        {char === " " ? " " : char}
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

        <div className={styles.heroMeta}>
          <span>
            <span className="dot" aria-hidden="true" />
            <strong>Live</strong> · Mumbai · Bengaluru · Singapore
          </span>
          <span aria-hidden="true">SR/01 · {new Date().getFullYear()}</span>
        </div>

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
          <header className={styles.whyHeader}>
            <span className="eyebrow">Why SR Experts</span>
            <h2 id="why-h" className={styles.whyHead}>
              Most firms sell hours.
              <br />
              <em>We deliver clarity.</em>
            </h2>
            <p className={styles.whyIntro}>
              Six reasons clients come to us — and stay. None of them are
              about hours billed.
            </p>
          </header>

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

          <dl className={styles.whyStats} data-reveal>
            {STAT_STRIP.map((s) => (
              <div key={s.label} className={styles.whyStat}>
                <dt>{s.value}</dt>
                <dd>{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section" aria-labelledby="process-h">
        <div className="container">
          <header className={styles.processHeader}>
            <span className="eyebrow">How an engagement unfolds</span>
            <h2 id="process-h">Four phases. No theatre.</h2>
            <p className={styles.processIntro}>
              The same discipline runs through every engagement, whether it is a
              two-week diagnostic or a two-year transformation.
            </p>
          </header>

          <ol className={styles.processList} data-reveal-stagger>
            {PROCESS.map((p, i) => (
              <li
                key={p.step}
                className={styles.processItem}
                style={{ ["--stagger-i" as string]: i }}
              >
                <span className={styles.processStep}>{p.step}</span>
                <h3 className={styles.processTitle}>{p.title}</h3>
                <p className={styles.processBody}>{p.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* TRUSTED BY */}
      <section className="section section--bone-deep section--tight" aria-labelledby="trust-h">
        <div className="container">
          <header className={styles.trustHeader}>
            <span className="eyebrow">Trusted By</span>
            <h2 id="trust-h" className={styles.trustHead}>
              Founders, family businesses, and emerging enterprises across India
              and beyond.
            </h2>
            <p className={styles.trustNote}>
              Most clients prefer that their engagements stay private. The
              chips below describe sectors and locations, not specific names.
              References available on request.
            </p>
          </header>

          <ul className={styles.chipWall} data-reveal-stagger>
            {TRUSTED_BY.map((c, i) => (
              <li
                key={`${c.sector}-${c.city}`}
                className={styles.chip}
                style={{ ["--stagger-i" as string]: i }}
              >
                <span className={styles.chipSector}>{c.sector}</span>
                <span className={styles.chipCity}>{c.city}</span>
              </li>
            ))}
          </ul>
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
