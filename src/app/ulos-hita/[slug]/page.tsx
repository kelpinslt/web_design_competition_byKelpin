import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { UlosDetail, ulosDetailMetadata } from "@/components/ulos/detail/UlosDetail";
import { getCatalogUlos, getUlosBySlug } from "@/lib/ulos";

/*
 * Detail Ulos, inside Ulos Hita (PRD V3.0 D2/E3; Master Execution Prompt v3 §7.3).
 *
 * All ten types are prerendered. `params` is awaited outside <Suspense>, so
 * an unknown slug calls notFound() before anything streams and the response
 * is a real HTTP 404 (Cache Components has no `dynamicParams = false`).
 */
export function generateStaticParams() {
  return getCatalogUlos().map((ulos) => ({ slug: ulos.slug }));
}

export async function generateMetadata({ params }: PageProps<"/ulos-hita/[slug]">): Promise<Metadata> {
  const ulos = getUlosBySlug((await params).slug);
  return ulos ? ulosDetailMetadata(ulos) : { title: "Ulos tidak ditemukan", robots: { index: false } };
}

export default async function DetailUlosPage({ params }: PageProps<"/ulos-hita/[slug]">) {
  const ulos = getUlosBySlug((await params).slug);
  if (!ulos) notFound();
  return <UlosDetail ulos={ulos} />;
}
