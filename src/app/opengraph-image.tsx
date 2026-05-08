import { ImageResponse } from "next/og";

export const alt = "SR Experts — The Only Expert You Need.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "linear-gradient(135deg, #0d1a35 0%, #1C3478 100%)",
          color: "#ffffff",
          fontFamily: "ui-sans-serif, system-ui",
          position: "relative",
        }}
      >
        {/* Decorative gold ring */}
        <div
          style={{
            position: "absolute",
            top: -200,
            right: -200,
            width: 500,
            height: 500,
            borderRadius: 999,
            background:
              "radial-gradient(circle, rgba(196,162,74,0.2) 0%, rgba(196,162,74,0) 70%)",
          }}
        />

        {/* Top: brand mark */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span
            style={{
              fontWeight: 700,
              fontSize: 22,
              letterSpacing: "6px",
              color: "#C4A24A",
            }}
          >
            SREXPERTS
          </span>
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: 999,
              background: "#C4A24A",
              marginTop: 6,
            }}
          />
        </div>

        {/* Middle: headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <span
            style={{
              fontSize: 116,
              fontWeight: 700,
              letterSpacing: "-3px",
              lineHeight: 1.0,
            }}
          >
            The Only Expert
          </span>
          <span
            style={{
              fontSize: 116,
              fontWeight: 500,
              fontStyle: "italic",
              letterSpacing: "-3px",
              lineHeight: 1.0,
              color: "#e8c96a",
            }}
          >
            You Need.
          </span>
        </div>

        {/* Bottom: support line + url */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            borderTop: "1px solid rgba(255,255,255,0.12)",
            paddingTop: 24,
          }}
        >
          <span
            style={{
              fontSize: 26,
              color: "rgba(255,255,255,0.6)",
              fontWeight: 300,
            }}
          >
            Strategy. Finance. Legal. Technology. Marketing.
          </span>
          <span
            style={{
              fontSize: 16,
              letterSpacing: "4px",
              color: "rgba(255,255,255,0.5)",
              fontWeight: 500,
            }}
          >
            SREXPERTS.IN
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
