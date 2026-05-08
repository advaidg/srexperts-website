import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#1C3478",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          fontFamily: "ui-sans-serif, system-ui",
          fontWeight: 700,
          fontSize: 88,
          letterSpacing: "-3px",
          position: "relative",
        }}
      >
        SR
        <span
          style={{
            position: "absolute",
            top: 30,
            right: 36,
            width: 14,
            height: 14,
            borderRadius: 999,
            background: "#C4A24A",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
