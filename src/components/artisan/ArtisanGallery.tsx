"use client";

import { useState } from "react";
import type { Artisan } from "@/types/content";
import { ArtisanStage } from "./ArtisanStage";
import { ArtisanStoryPanel } from "./ArtisanStoryPanel";
import { OrbitPagination } from "./OrbitPagination";
import { PortraitOrbit } from "./PortraitOrbit";

/**
 * Penenun Hita hero — Cinematic Interactive Circular Portrait Gallery
 * (PRD V3.0, E4.A and Bagian Q, with approved K1–K3). Holds the selected
 * artisan; selecting a circle or dot changes the background, story panel,
 * circle states and dots. No autoplay; the URL does not change.
 */
export function ArtisanGallery({ artisans }: { artisans: Artisan[] }) {
  const [selection, setSelection] = useState<{ index: number; previous: number | null }>({
    index: 0,
    previous: null,
  });

  const select = (index: number) =>
    setSelection((state) => (state.index === index ? state : { index, previous: state.index }));

  const current = artisans[selection.index];
  const previous = selection.previous === null ? null : artisans[selection.previous];

  return (
    <section
      data-tone="obsidian"
      aria-labelledby="penenun-hita-judul"
      className="relative isolate flex min-h-svh flex-col overflow-hidden"
    >
      <ArtisanStage current={current} previous={previous} />

      <div className="shell grid-editorial flex-1 content-end gap-y-8 pb-4 pt-[calc(var(--spacing-header)+3rem)] md:content-center md:pb-16 md:pr-16 lg:pr-24">
        <div className="col-span-full md:col-span-3 md:self-center lg:col-span-7">
          <h1 id="penenun-hita-judul" className="text-micro font-semibold uppercase text-gold">
            Penenun Hita
          </h1>
          <ArtisanStoryPanel key={current.slug} artisan={current} />
        </div>
        <div className="col-span-full md:col-span-3 md:h-[min(80svh,50rem)] lg:col-span-5">
          <PortraitOrbit artisans={artisans} activeIndex={selection.index} onSelect={select} />
        </div>
      </div>

      <OrbitPagination
        artisans={artisans}
        activeIndex={selection.index}
        onSelect={select}
        className="absolute right-2 top-1/2 hidden -translate-y-1/2 md:flex lg:right-4"
      />
      {/* On mobile the swipe rail itself is the pagination (PRD E4.A8 allows merging). */}

      <p className="sr-only" aria-live="polite">
        Menampilkan kisah {current.name}
      </p>
    </section>
  );
}
