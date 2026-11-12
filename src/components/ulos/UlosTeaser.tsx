import Link from "next/link";
import type { Ulos } from "@/types/content";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { ulosPath } from "@/lib/ulos";

type UlosTeaserProps = {
  ulos: Ulos;
  ratio?: "portrait" | "tall" | "square";
  sizes: string;
  /** Show the short narrative under the name. */
  withTeaser?: boolean;
};

/**
 * A single Ulos type as its cover, name and category, linking to Detail
 * Ulos. Used on Beranda, Detail Ulos, Detail Penenun and Rumah Tenun.
 */
export function UlosTeaser({ ulos, ratio = "portrait", sizes, withTeaser = false }: UlosTeaserProps) {
  return (
    <Link href={ulosPath(ulos)} className="group block">
      <MediaFrame media={ulos.image} ratio={ratio} sizes={sizes} bare />
      <h3 className="mt-4 font-serif text-h3 text-(--fg)">{ulos.name}</h3>
      <p className="mt-1 text-small text-(--fg-muted)">{ulos.category}</p>
      {withTeaser ? <p className="prose-measure mt-3 line-clamp-3 text-body text-(--fg-muted)">{ulos.shortDescription}</p> : null}
    </Link>
  );
}
