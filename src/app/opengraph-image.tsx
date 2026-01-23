import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const runtime = "edge";
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
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #05070d 0%, #0a0f1f 60%, #070a12 100%)",
          color: "#e9eefc",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ fontSize: 64, fontWeight: 700, marginBottom: 18 }}>{site.name}</div>
        <div style={{ fontSize: 28, lineHeight: 1.35, maxWidth: 900 }}>{site.headline}</div>
        <div style={{ fontSize: 20, marginTop: 22, color: "#7fd1ff" }}>
          QA Automation | Desenvolvimento | LGPD
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
