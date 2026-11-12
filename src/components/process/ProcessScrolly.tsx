"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { MediaAsset, ProcessStep } from "@/types/content";
import { IllustrationTag, MediaFrame } from "@/components/ui/MediaFrame";
import { SourceNote } from "@/components/ui/SourceNote";
import { cn } from "@/lib/cn";

/** The image to show for each step: its own, or the nearest earlier one. */
function imageForEachStep(steps: ProcessStep[]): (MediaAsset | null)[] {
  let last: MediaAsset | null = null;
  return steps.map((step) => {
    if (step.media[0]) last = step.media[0];
    return last;
  });
}

/**
 * Sticky scroll narrative for the weaving stages (PRD E6; v3 §7.8). On
 * desktop one large image stays in view and cross-fades as each stage
 * reaches the middle of the screen; on small screens every stage shows
 * its own image inline. Content is complete without JavaScript.
 */
export function ProcessScrolly({ steps }: { steps: ProcessStep[] }) {
  const images = imageForEachStep(steps);
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(Number((entry.target as HTMLElement).dataset.index));
        }
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    refs.current.forEach((node) => node && observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const current = images[active];
  const distinct = [...new Map(images.filter(Boolean).map((image) => [image!.src, image!])).values()];

  return (
    <div className="grid-editorial gap-y-0">
      {/* Desktop sticky stage */}
      <div className="hidden lg:col-span-6 lg:block">
        <div className="sticky top-[calc(var(--spacing-header)+2rem)]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-xs bg-brown">
            {distinct.map((image) => (
              <Image
                key={image.src}
                src={image.src}
                alt={image.src === current?.src ? image.alt : ""}
                aria-hidden={image.src === current?.src ? undefined : true}
                fill
                sizes="(min-width: 1440px) 640px, 46vw"
                className={cn(
                  "object-cover transition-[opacity,transform] duration-[900ms] ease-editorial",
                  image.src === current?.src ? "scale-100 opacity-100" : "scale-[1.04] opacity-0",
                )}
                style={{ objectPosition: `${image.focal?.x ?? 50}% ${image.focal?.y ?? 50}%` }}
              />
            ))}
            <div aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-obsidian/80 via-transparent to-transparent" />
            <IllustrationTag className="absolute left-4 top-4" />
            <p className="absolute inset-x-0 bottom-0 p-6 font-serif text-h3 text-ivory" aria-hidden="true">
              <span className="mr-3 text-gold tabular-nums">{String(steps[active].order).padStart(2, "0")}</span>
              {steps[active].localName ?? steps[active].title}
            </p>
          </div>
          <p className="mt-3 text-small text-ivory-muted">{current?.caption}. Bukan dokumentasi penenun tertentu.</p>
        </div>
      </div>

      <ol className="col-span-full lg:col-span-5 lg:col-start-8">
        {steps.map((step, index) => (
          <li
            key={step.id}
            ref={(node) => {
              refs.current[index] = node;
            }}
            data-index={index}
            className={cn(
              "border-t border-rule-dark py-12 transition-opacity duration-(--dur-section) lg:min-h-[52svh] lg:py-16",
              index === active ? "lg:opacity-100" : "lg:opacity-45",
            )}
          >
            <p className="font-serif text-h2 text-gold tabular-nums">{String(step.order).padStart(2, "0")}</p>
            <h3 className="mt-4 font-serif text-h2 text-ivory">{step.title}</h3>
            {step.localName ? <p className="mt-2 font-serif text-h3 italic text-ivory-muted">{step.localName}</p> : null}
            <p className="prose-measure mt-6 text-body text-ivory">{step.description}</p>
            {step.tools.length > 0 || step.materials.length > 0 ? (
              <dl className="mt-6 grid gap-4 sm:grid-cols-2">
                {step.tools.length > 0 ? (
                  <div className="border-t border-rule-dark pt-3">
                    <dt className="text-small font-semibold text-gold">Alat</dt>
                    <dd className="mt-1 text-small text-ivory">{step.tools.join(", ")}</dd>
                  </div>
                ) : null}
                {step.materials.length > 0 ? (
                  <div className="border-t border-rule-dark pt-3">
                    <dt className="text-small font-semibold text-gold">Bahan</dt>
                    <dd className="mt-1 text-small text-ivory">{step.materials.join(", ")}</dd>
                  </div>
                ) : null}
              </dl>
            ) : null}
            <SourceNote ids={step.sourceIds} className="mt-5" />
            {step.media[0] ? (
              <MediaFrame media={step.media[0]} ratio="landscape" sizes="100vw" className="mt-8 lg:hidden" />
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  );
}
