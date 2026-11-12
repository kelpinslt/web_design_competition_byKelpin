"use client";

import { useEffect, useLayoutEffect, useRef, useState, type KeyboardEvent } from "react";
import type { Artisan } from "@/types/content";
import { PortraitCircle } from "./PortraitCircle";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/** Most circles shown on the curve at once (E4.A3: 5–7 on desktop). */
const MAX_VISIBLE = 7;
/** Diameters (px) for non-active slots, from the E4.A3 size table; varied on purpose. */
const SLOT_SIZES = [112, 100, 116, 92, 104, 96, 108];
const ACTIVE_SIZE = 156;
/** Mobile rail: active and other diameters, and a gentle vertical wave (px). */
const RAIL_ACTIVE = 88;
const RAIL_SIZE = 64;
const RAIL_WAVE = [0, 14, 4, 18, 8];

/**
 * A point on the asymmetric "(" curve (approved K2). `t` runs 0 → 1 from
 * top to bottom; x and y are fractions of the container. The curve bulges
 * toward the story panel, peaks a little below the middle, and its top end
 * sits further right than its bottom end, so it never reads as symmetric.
 */
function curvePoint(t: number): { x: number; y: number } {
  const peak = 0.56;
  const towardPeak = t < peak ? t / peak : (1 - t) / (1 - peak);
  const bulge = Math.sin((towardPeak * Math.PI) / 2);
  const end = t < peak ? 0.86 : 0.72;
  return { x: end - bulge * (end - 0.16), y: 0.08 + t * 0.84 };
}

/** SVG path of the whole curve, drawn as one fine gold thread. */
const curvePath = Array.from({ length: 41 }, (_, i) => {
  const { x, y } = curvePoint(i / 40);
  return `${i === 0 ? "M" : "L"}${(x * 100).toFixed(2)} ${(y * 100).toFixed(2)}`;
}).join(" ");

/**
 * Indices to show: all, or a fixed page of MAX_VISIBLE containing the active
 * one. Pages (not a sliding window) keep circles still between selections.
 */
function visibleIndices(count: number, active: number): number[] {
  if (count <= MAX_VISIBLE) return Array.from({ length: count }, (_, i) => i);
  const start = Math.min(Math.floor(active / MAX_VISIBLE) * MAX_VISIBLE, count - MAX_VISIBLE);
  return Array.from({ length: MAX_VISIBLE }, (_, i) => start + i);
}

/** Share of the vertical gap a neighbour moves away from the active circle. */
const NUDGE = 0.22;
/** Vertical extent of the curve as a fraction of the container (see curvePoint). */
const CURVE_SPAN = 0.84;

type PortraitOrbitProps = {
  artisans: Artisan[];
  activeIndex: number;
  onSelect: (index: number) => void;
};

/**
 * Circular portrait navigation (PRD E4.A3–A5, A7). Desktop and tablet: the
 * circles sit at fixed points on the curve; the active one grows in place
 * and its neighbours ease a little along the curve to make room — no
 * rotation. Mobile: a horizontal swipe rail with a gentle vertical wave.
 * Each circle only selects; it never navigates.
 */
export function PortraitOrbit({ artisans, activeIndex, onSelect }: PortraitOrbitProps) {
  const curveRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLUListElement>(null);
  const mountedRef = useRef(false);
  const reducedMotion = useReducedMotion();
  const visible = visibleIndices(artisans.length, activeIndex);
  const activeSlot = visible.indexOf(activeIndex);

  // Circle sizes follow the E4.A3 table but are capped by the vertical gap
  // between slots, so circles never collide on shorter screens.
  const [curveHeight, setCurveHeight] = useState(640);
  useLayoutEffect(() => {
    const element = curveRef.current;
    if (!element) return;
    const observer = new ResizeObserver(([entry]) => setCurveHeight(entry.contentRect.height));
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  const gap = visible.length > 1 ? (curveHeight * CURVE_SPAN) / (visible.length - 1) : curveHeight;
  const activeSize = Math.round(Math.min(ACTIVE_SIZE, gap * 1.15));
  const slotSize = (slot: number) => Math.round(Math.min(SLOT_SIZES[slot % SLOT_SIZES.length], gap * 0.72));

  // Keep the active circle in view on the mobile rail (not on first render).
  useEffect(() => {
    if (!mountedRef.current) {
      mountedRef.current = true;
      return;
    }
    const item = railRef.current?.children[activeIndex] as HTMLElement | undefined;
    item?.scrollIntoView({ inline: "center", block: "nearest", behavior: reducedMotion ? "auto" : "smooth" });
  }, [activeIndex, reducedMotion]);

  /** Arrow keys move the selection and keep focus on the selected circle. */
  const handleKeyDown = (event: KeyboardEvent<HTMLElement>, keys: [string, string], container: HTMLElement | null) => {
    const step = event.key === keys[1] ? 1 : event.key === keys[0] ? -1 : 0;
    if (!step) return;
    event.preventDefault();
    const next = Math.min(Math.max(activeIndex + step, 0), artisans.length - 1);
    onSelect(next);
    requestAnimationFrame(() => {
      container?.querySelector<HTMLButtonElement>(`[data-portrait="${next}"] button`)?.focus();
    });
  };

  return (
    <>
      {/* Desktop and tablet: the curve */}
      <div
        ref={curveRef}
        role="group"
        aria-label="Pilih penenun. Gunakan panah atas dan bawah untuk berpindah."
        onKeyDown={(event) => handleKeyDown(event, ["ArrowUp", "ArrowDown"], curveRef.current)}
        className="relative hidden h-full md:block"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-0 size-full text-gold/35"
        >
          <path d={curvePath} fill="none" stroke="currentColor" strokeWidth="1" vectorEffect="non-scaling-stroke" />
        </svg>

        {visible.map((index, slot) => {
          const artisan = artisans[index];
          const isActive = index === activeIndex;
          const neighbour = slot - activeSlot;
          // Neighbours ease a little further along the curve, away from the active circle.
          const nudge = Math.abs(neighbour) === 1 ? (Math.sign(neighbour) * NUDGE) / (visible.length - 1) : 0;
          const t = visible.length === 1 ? 0.56 : Math.min(Math.max(slot / (visible.length - 1) + nudge, 0), 1);
          const point = curvePoint(t);
          const diameter = isActive ? activeSize : slotSize(slot);
          const labelLeft = point.x > 0.5;
          return (
            <div
              key={artisan.slug}
              data-portrait={index}
              className="absolute transition-[left,top,translate] duration-[400ms] ease-editorial"
              style={{
                left: `${point.x * 100}%`,
                top: `${point.y * 100}%`,
                translate: labelLeft ? `calc(-100% + ${diameter / 2}px) -50%` : `-${diameter / 2}px -50%`,
              }}
            >
              <PortraitCircle
                onSelect={() => onSelect(index)}
                name={artisan.name}
                origin={artisan.origin}
                portrait={artisan.portrait!}
                diameter={diameter}
                active={isActive}
                dimmed
                labelPlacement={labelLeft ? "left" : "right"}
                labelClassName={
                  isActive
                    ? "w-max max-w-[12rem]"
                    : "w-max max-w-[12rem] opacity-70 group-hover/portrait:opacity-100 group-focus-visible/portrait:opacity-100 max-lg:opacity-0"
                }
              />
            </div>
          );
        })}
      </div>

      {/* Mobile: swipe rail */}
      <ul
        ref={railRef}
        aria-label="Pilih penenun. Geser untuk melihat semua."
        onKeyDown={(event) => handleKeyDown(event, ["ArrowLeft", "ArrowRight"], railRef.current)}
        className="-mx-margin flex snap-x snap-mandatory items-start gap-4 overflow-x-auto px-margin pb-6 pt-2 scroll-px-margin [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:hidden"
      >
        {artisans.map((artisan, index) => (
          <li
            key={artisan.slug}
            data-portrait={index}
            className="shrink-0 snap-center transition-transform duration-[400ms] ease-editorial"
            style={{ transform: `translateY(${RAIL_WAVE[index % RAIL_WAVE.length]}px)` }}
          >
            <PortraitCircle
              onSelect={() => onSelect(index)}
              name={artisan.name}
              origin={null}
              portrait={artisan.portrait!}
              diameter={index === activeIndex ? RAIL_ACTIVE : RAIL_SIZE}
              active={index === activeIndex}
              dimmed
              labelPlacement="below"
              labelClassName="w-28 text-[0.9375rem]"
            />
          </li>
        ))}
      </ul>
    </>
  );
}
