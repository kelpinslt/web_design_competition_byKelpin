import { NextResponse, type NextRequest } from "next/server";
import { artisans } from "@/data/artisans";
import { ulosCollection } from "@/data/ulos";
import { weavingHouses } from "@/data/weaving-houses";

/*
 * Real HTTP 404 with complete HTML for unknown detail slugs.
 *
 * Under Cache Components a notFound() in a dynamic page does set status
 * 404, but the response is Next's error shell: the message and title only
 * appear after JavaScript runs (verified on 2026-11-12 with
 * /penenun-hita/tidak-ada). So this proxy checks the slug against the
 * static data before rendering:
 * - known slug: passes through untouched (200);
 * - unknown slug: returns that section's prerendered "tidak ditemukan"
 *   page with status 404 — complete HTML, correct title, no JavaScript
 *   needed. (A rewrite cannot carry a 404 status.) A client-side
 *   navigation to an unknown slug receives this HTML instead of an RSC
 *   payload, and the App Router falls back to a full load of the same page.
 */
const sections: Record<string, Set<string>> = {
  "ulos-hita": new Set(ulosCollection.map((ulos) => ulos.slug)),
  "penenun-hita": new Set(artisans.map((artisan) => artisan.slug)),
  "rumah-tenun": new Set(weavingHouses.map((house) => house.slug)),
};
const NOT_FOUND_SLUG = "tidak-ditemukan";
/** Marks the proxy's own fetch of a not-found page so it is not intercepted again. */
const INTERNAL_HEADER = "x-partonun-not-found";

/** Decodes a path segment; malformed encodings (e.g. "%") count as unknown. */
function decode(segment: string | undefined): string | null {
  try {
    return decodeURIComponent(segment ?? "");
  } catch {
    return null;
  }
}

export async function proxy(request: NextRequest) {
  const [, section = "", rawSlug] = request.nextUrl.pathname.split("/");
  const known = sections[section];
  if (!known) return NextResponse.next();

  const slug = decode(rawSlug);
  if (slug === NOT_FOUND_SLUG && request.headers.get(INTERNAL_HEADER) === "1") {
    return NextResponse.next();
  }
  if (slug !== null && known.has(slug)) {
    return NextResponse.next();
  }

  const notFoundUrl = new URL(`/${section}/${NOT_FOUND_SLUG}`, request.url);
  const page = await fetch(notFoundUrl, { headers: { [INTERNAL_HEADER]: "1", accept: "text/html" } });
  if (!page.ok) {
    return NextResponse.rewrite(notFoundUrl);
  }
  return new NextResponse(page.body, {
    status: 404,
    headers: { "content-type": "text/html; charset=utf-8", "cache-control": "no-store" },
  });
}

export const config = {
  matcher: ["/ulos-hita/:slug", "/penenun-hita/:slug", "/rumah-tenun/:slug"],
};
