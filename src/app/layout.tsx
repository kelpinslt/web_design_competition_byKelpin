import type { Metadata, Viewport } from "next";
import { Bodoni_Moda, DM_Serif_Display, Manrope } from "next/font/google";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SkipLink } from "@/components/layout/SkipLink";
import { PageTransition } from "@/components/motion/PageTransition";
import { SiteHeader } from "@/components/navigation/SiteHeader";
import { site } from "@/lib/site";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

/** Wordmark only: high-contrast Didone capitals, after the owner's typography reference. */
const bodoniModa = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  axes: ["opsz"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} | ${site.tagline.replace(/\.$/, "")}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  openGraph: {
    siteName: site.name,
    title: site.name,
    description: site.description,
    locale: site.locale,
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#100e0c",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className={`${dmSerif.variable} ${manrope.variable} ${bodoniModa.variable}`}>
      <body className="min-h-dvh">
        <SkipLink />
        <SiteHeader />
        <main id="konten" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <SiteFooter />
        <PageTransition />
      </body>
    </html>
  );
}
