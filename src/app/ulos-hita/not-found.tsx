import type { Metadata } from "next";
import { UlosNotFound } from "@/components/ulos/detail/UlosNotFound";

export const metadata: Metadata = {
  title: "Ulos tidak ditemukan",
  robots: { index: false },
};

/** Not-found boundary for everything under Ulos Hita (PRD H5). */
export default function NotFound() {
  return <UlosNotFound />;
}
