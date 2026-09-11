import { ImageResponse } from "next/og";

// Alt text for the default social share image.
export const alt = "WeAMP — We Address Meaningful Problems";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              fontSize: 28,
              letterSpacing: 8,
              color: "#737373",
              marginBottom: 24,
            }}
          >
            WEAMP
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              fontSize: 84,
              lineHeight: 1.1,
              color: "#171717",
              textAlign: "center",
            }}
          >
            <span style={{ color: "#2f7d3f" }}>We</span> Address Meaningful
            Problems.
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
