import type { Metadata, Viewport } from "next";
import { Newsreader } from "next/font/google";
import localFont from "next/font/local";
import { Suspense } from "react";
import { Header, HeaderView } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { OpenOnView } from "@/components/stripe/OpenOnView";
import { site } from "@/data/site";
import "./globals.css";

/*
 * Archivo (SIL OFL, licence in ./fonts): instanced to the range the design uses (wdth 62–100,
 * wght 600–900) and subset to Latin + the brand's signs (↗ → ↺ ▶ ™). 36 KB instead of 144 KB.
 * Built from google/fonts ofl/archivo with fontTools, see docs/striped/10-performance-report.md.
 */
const archivo = localFont({
  src: "./fonts/archivo-62-100-w600-900.woff2",
  weight: "600 900",
  variable: "--font-archivo",
  display: "swap",
  declarations: [{ prop: "font-stretch", value: "62% 100%" }],
});
// The text face is never the LCP element, so it isn't preloaded (it was 217 KB with opsz).
const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "STRIPED · a little piece of this world.", template: "%s · STRIPED" },
  description:
    "STRIPED™ by dylAn. the clothes. the music. the world. small runs, hand-finished pieces, made in LA.",
  robots: { index: false, follow: false }, // demo: never indexed
  openGraph: { siteName: "STRIPED", type: "website", images: ["/images/site/polaroid-10-1600.webp"] },
};

export const viewport: Viewport = { themeColor: "#0055b5" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${archivo.variable} ${newsreader.variable}`} suppressHydrationWarning>
      <head>
        {/* Marks that JS runs, so motion may hide content it is about to reveal (never before). */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <a
          href="#main"
          className="t-ui sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-paper focus:px-4 focus:py-3"
        >
          skip to content
        </a>
        {/* usePathname is URL data: Cache Components wants it inside Suspense. The fallback is the same header, static. */}
        <Suspense fallback={<HeaderView tone="paper" />}>
          <Header />
        </Suspense>
        <main id="main">{children}</main>
        <Footer />
        <Suspense fallback={null}>
          <OpenOnView />
        </Suspense>
      </body>
    </html>
  );
}
