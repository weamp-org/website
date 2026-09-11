import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Alt text for the default social share image.
export const alt = "WeAMP — We Address Meaningful Problems";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Brand fonts (same families as the site: Instrument Serif for headings,
// Manrope for body). TTFs vendored under assets/fonts (OFL-licensed).
const instrumentSerif = await readFile(
  join(process.cwd(), "assets/fonts/InstrumentSerif-Regular.ttf")
);
const manrope = await readFile(
  join(process.cwd(), "assets/fonts/Manrope-Regular.ttf")
);

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "white",
          fontFamily: "Manrope",
        }}
      >
        <div
          style={{
            fontFamily: "Instrument Serif",
            fontSize: 150,
            lineHeight: 1,
            color: "#171717",
          }}
        >
          WeAMP
        </div>
        <div
          style={{
            fontSize: 48,
            lineHeight: 1.2,
            color: "#525252",
            marginTop: 24,
          }}
        >
          We Address Meaningful Problems.
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Instrument Serif",
          data: instrumentSerif,
          style: "normal",
          weight: 400,
        },
        {
          name: "Manrope",
          data: manrope,
          style: "normal",
          weight: 400,
        },
      ],
    }
  );
}
