import Image from "next/image";
import Link from "next/link";
import { ViewTransition } from "react";
import type { Ulos } from "@/types/content";
import { IllustrationTag } from "@/components/ui/MediaFrame";
import { ulosPath, ulosTransitionName } from "@/lib/ulos";

type CarouselCardProps = {
  ulos: Ulos;
  /** Position in the track; staggers the load-in reveal from the centre out. */
  index: number;
};

/**
 * One floating portrait card: the cloth leads, name and category below
 * (v3 §7.2). On hover or focus the cover zooms toward the motif and a short
 * narrative teaser rises over it. The photo shares a ViewTransition name
 * with the Detail Ulos hero so it morphs into it on navigation.
 */
export function CarouselCard({ ulos, index }: CarouselCardProps) {
  return (
    <Link
      href={ulosPath(ulos)}
      draggable={false}
      data-transition="morph"
      className="group block transition-transform duration-(--dur-hover) ease-editorial hover:-translate-y-1 focus-visible:-translate-y-1"
    >
      <ViewTransition name={ulosTransitionName(ulos)}>
        <div
          className="relative aspect-[4/5] overflow-hidden rounded-xs bg-brown shadow-[0_32px_60px_-28px_rgb(0_0_0/0.9)] motion-safe:animate-unveil"
          style={{ animationDelay: `${Math.min(index, 5) * 90}ms` }}
        >
          <Image
            src={ulos.image.src}
            alt={ulos.image.alt}
            fill
            draggable={false}
            priority={index < 3}
            sizes="(min-width: 1280px) min(28vw, 480px), (min-width: 1024px) 36vw, (min-width: 768px) 52vw, 80vw"
            className="object-cover transition-transform duration-[900ms] ease-editorial group-hover:scale-[1.12] group-focus-visible:scale-[1.12]"
          />
          <IllustrationTag className="absolute left-3 top-3" />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 translate-y-3 bg-linear-to-t from-obsidian/90 via-obsidian/60 to-transparent p-5 pt-16 opacity-0 transition-[opacity,transform] duration-(--dur-reveal) ease-editorial group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100"
          >
            <p className="line-clamp-3 text-small text-ivory">{ulos.shortDescription}</p>
          </div>
        </div>
      </ViewTransition>
      <h3 className="mt-5 font-serif text-h3 text-ivory">{ulos.name}</h3>
      <p className="mt-1 text-small text-ivory-muted">{ulos.category}</p>
    </Link>
  );
}
