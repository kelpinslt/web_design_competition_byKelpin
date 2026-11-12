import type { Metadata } from "next";
import { UlosNotFound } from "@/components/ulos/detail/UlosNotFound";

/*
 * "Ulos tidak ditemukan", prerendered as a complete static page so the
 * message, title and metadata are in the HTML itself. src/proxy.ts serves
 * this HTML with a real HTTP 404 status for unknown Detail Ulos slugs.
 */
export const metadata: Metadata = {
  title: "Ulos tidak ditemukan",
  robots: { index: false, follow: true },
};

export default function UlosTidakDitemukan() {
  return <UlosNotFound />;
}
