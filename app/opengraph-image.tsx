import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — ${site.role}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#08090a",
        color: "#ece7dc",
        padding: "64px 72px",
        fontFamily: "sans-serif",
        backgroundImage:
          "linear-gradient(to right, #ece7dc0d 1px, transparent 1px), linear-gradient(to bottom, #ece7dc0d 1px, transparent 1px)",
        backgroundSize: "88px 88px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: 20,
          letterSpacing: "0.18em",
          color: "#8b867d",
        }}
      >
        <span>TYRIQUE.DEV</span>
        <span>SOFTWARE ENGINEER</span>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            fontSize: 132,
            lineHeight: 0.88,
            letterSpacing: "-0.06em",
            fontWeight: 700,
          }}
        >
          <span>Tyrique</span>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 132,
            lineHeight: 0.88,
            letterSpacing: "-0.06em",
            fontWeight: 700,
            color: "#b4aea4",
          }}
        >
          <span>de Bruin</span>
          <span style={{ color: "#ff6b2c" }}>.</span>
        </div>
        <div style={{ display: "flex", marginTop: 34, fontSize: 25, color: "#b4aea4" }}>
          Enterprise AI platforms, multi-tenant backends
        </div>
        <div style={{ display: "flex", fontSize: 25, color: "#b4aea4" }}>
          and the infrastructure underneath.
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          borderTop: "1px solid #ffffff33",
          paddingTop: 22,
          fontSize: 18,
          letterSpacing: "0.12em",
          color: "#8b867d",
        }}
      >
        <span>CENTURION, SOUTH AFRICA</span>
        <span>3 YEARS SHIPPING</span>
        <span>tyrique.dev</span>
      </div>
    </div>,
    { ...size },
  );
}
