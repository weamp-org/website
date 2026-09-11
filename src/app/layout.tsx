import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Manrope, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ScrollToTop } from "@/components/scroll-to-top";
import {
  SITE_EMAIL,
  SITE_NAME,
  SITE_SOCIALS,
  SITE_TAGLINE,
  SITE_URL,
} from "@/lib/site";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-instrument-serif",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — ${SITE_TAGLINE}`,
    template: `%s · ${SITE_NAME}`,
  },
  description:
    "WeAMP is a group of people who work together to address meaningful problems, contributing towards a better world.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description:
      "WeAMP is a group of people who work together to address meaningful problems, contributing towards a better world.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description:
      "WeAMP is a group of people who work together to address meaningful problems, contributing towards a better world.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    alternateName: SITE_TAGLINE,
    url: SITE_URL,
    email: SITE_EMAIL,
    sameAs: SITE_SOCIALS,
  };
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
  };
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "h-full",
        "antialiased",
        manrope.variable,
        instrumentSerif.variable,
        "font-sans"
      )}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SiteHeader />
          <main className="flex flex-1 flex-col">{children}</main>
          <SiteFooter />
          <ScrollToTop />
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Analytics />
      </body>
    </html>
  );
}
