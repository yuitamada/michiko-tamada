import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "玉田美知子 絵本作家";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#faf7f2",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 24,
        }}
      >
        <div
          style={{
            width: 80,
            height: 80,
            background: "#5b7a50",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 40,
            color: "#faf7f2",
          }}
        >
          玉
        </div>
        <div style={{ fontSize: 56, fontWeight: 300, color: "#1c1c1c", letterSpacing: "0.12em" }}>
          玉田美知子
        </div>
        <div style={{ fontSize: 18, color: "#7a7570", letterSpacing: "0.25em" }}>
          MICHIKO TAMADA — 絵本作家
        </div>
      </div>
    ),
    { ...size }
  );
}
