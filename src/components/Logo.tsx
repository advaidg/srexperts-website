import Link from "next/link";

type Variant = "default" | "reversed";

type LogoProps = {
  variant?: Variant;
  size?: number;
  withTagline?: boolean;
};

export function Logo({ variant = "default", size = 22, withTagline = false }: LogoProps) {
  const reversed = variant === "reversed";
  const wordColor = reversed ? "#ffffff" : "var(--color-navy)";
  const dotColor = reversed ? "#ffffff" : "var(--color-gold)";
  const taglineColor = reversed ? "rgba(255,255,255,0.55)" : "var(--color-mist)";

  return (
    <Link
      href="/"
      aria-label="SR Experts — home"
      style={{ display: "inline-flex", flexDirection: "column", gap: 4 }}
    >
      <span
        style={{
          fontFamily: "var(--font-syne)",
          fontWeight: 700,
          fontSize: size,
          letterSpacing: "-0.015em",
          color: wordColor,
          display: "inline-flex",
          alignItems: "baseline",
          gap: 2,
          lineHeight: 1,
        }}
      >
        SRExperts
        <span
          aria-hidden="true"
          style={{
            width: size * 0.18,
            height: size * 0.18,
            borderRadius: "50%",
            background: dotColor,
            display: "inline-block",
            transform: "translateY(-50%)",
            marginLeft: 1,
          }}
        />
      </span>
      {withTagline && (
        <span
          style={{
            fontSize: size * 0.42,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: taglineColor,
            fontWeight: 400,
          }}
        >
          The Only Expert You Need
        </span>
      )}
    </Link>
  );
}
