"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
  type MouseEvent,
  type PointerEvent,
} from "react";
import type { Ulos } from "@/types/content";
import { CarouselCard } from "./CarouselCard";
import { CarouselControls } from "./CarouselControls";
import { cardDepth, cardWidthVars } from "./carousel-styles";
import { TextLink } from "@/components/ui/Links";
import { Container } from "@/components/ui/Section";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/cn";
import { ulosPath } from "@/lib/ulos";

/** Pointer travel (px) after which a press counts as a drag, not a click. */
const DRAG_THRESHOLD = 6;

/**
 * Floating portrait carousel for Ulos Hita (PRD V3.0, E2).
 *
 * Built on native horizontal scroll-snap, so touch swipe, trackpad and
 * momentum work as the browser intends. On every scroll frame each card
 * gets `--ad` (distance from centre); CSS turns that into scale, offset and
 * opacity. Adds mouse drag, arrow keys and previous/next controls.
 */
export function FloatingCarousel({ items }: { items: Ulos[] }) {
  const trackRef = useRef<HTMLUListElement>(null);
  const frameRef = useRef(0);
  const dragRef = useRef({ pointerId: -1, startX: 0, startScroll: 0, moved: false });
  const [active, setActive] = useState(0);
  const reducedMotion = useReducedMotion();

  /** Updates each card's depth and returns the index nearest the centre. */
  const measure = useCallback((): number => {
    const track = trackRef.current;
    if (!track) return 0;
    const centre = track.scrollLeft + track.clientWidth / 2;
    let nearest = 0;
    let nearestDistance = Infinity;
    Array.from(track.children).forEach((child, index) => {
      const card = child as HTMLElement;
      const distance = Math.abs((card.offsetLeft + card.offsetWidth / 2 - centre) / card.offsetWidth);
      card.style.setProperty("--ad", distance.toFixed(3));
      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearest = index;
      }
    });
    setActive(nearest);
    return nearest;
  }, []);

  const scrollToIndex = useCallback(
    (index: number) => {
      const track = trackRef.current;
      const card = track?.children[index] as HTMLElement | undefined;
      if (!track || !card) return;
      track.scrollTo({
        left: card.offsetLeft + card.offsetWidth / 2 - track.clientWidth / 2,
        behavior: reducedMotion ? "auto" : "smooth",
      });
    },
    [reducedMotion],
  );

  useEffect(() => {
    const onResize = () => measure();
    window.addEventListener("resize", onResize);
    frameRef.current = requestAnimationFrame(onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(frameRef.current);
    };
  }, [measure]);

  const handleScroll = () => {
    cancelAnimationFrame(frameRef.current);
    frameRef.current = requestAnimationFrame(() => measure());
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      scrollToIndex(Math.min(active + 1, items.length - 1));
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      scrollToIndex(Math.max(active - 1, 0));
    }
  };

  // Mouse drag. Touch and trackpad already scroll natively.
  const handlePointerDown = (event: PointerEvent<HTMLUListElement>) => {
    if (event.pointerType !== "mouse" || event.button !== 0) return;
    dragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startScroll: event.currentTarget.scrollLeft,
      moved: false,
    };
  };

  const handlePointerMove = (event: PointerEvent<HTMLUListElement>) => {
    const drag = dragRef.current;
    if (drag.pointerId !== event.pointerId) return;
    const delta = event.clientX - drag.startX;
    if (!drag.moved && Math.abs(delta) > DRAG_THRESHOLD) {
      drag.moved = true;
      event.currentTarget.setPointerCapture(event.pointerId);
      event.currentTarget.dataset.dragging = "";
    }
    if (drag.moved) event.currentTarget.scrollLeft = drag.startScroll - delta;
  };

  const handlePointerEnd = (event: PointerEvent<HTMLUListElement>) => {
    const drag = dragRef.current;
    if (drag.pointerId !== event.pointerId) return;
    drag.pointerId = -1;
    if (drag.moved) {
      delete event.currentTarget.dataset.dragging;
      scrollToIndex(measure());
    }
  };

  // A drag must never end in navigation.
  const handleClickCapture = (event: MouseEvent) => {
    if (dragRef.current.moved) {
      event.preventDefault();
      event.stopPropagation();
      dragRef.current.moved = false;
    }
  };

  const current = items[active] ?? items[0];

  return (
    <div>
      <ul
        ref={trackRef}
        tabIndex={0}
        role="list"
        aria-label="Koleksi Ulos. Gunakan tombol panah kiri dan kanan untuk berpindah."
        onScroll={handleScroll}
        onKeyDown={handleKeyDown}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerEnd}
        onPointerCancel={handlePointerEnd}
        onClickCapture={handleClickCapture}
        className={cn(
          cardWidthVars,
          "relative flex cursor-grab snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain py-10 select-none lg:gap-5",
          "px-[calc(50%-var(--card-w)/2)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
          "data-dragging:cursor-grabbing data-dragging:snap-none focus-visible:outline-offset-[-6px]",
        )}
      >
        {items.map((ulos, index) => (
          <li
            key={ulos.slug}
            onFocus={() => scrollToIndex(index)}
            aria-current={index === active ? "true" : undefined}
            style={{ "--ad": Math.min(index, 3) } as CSSProperties}
            className={cn(
              cardDepth,
              "w-(--card-w) shrink-0 snap-center hover:opacity-100 focus-within:opacity-100",
            )}
          >
            <CarouselCard ulos={ulos} index={index} />
          </li>
        ))}
      </ul>

      <Container grid className="mt-2 items-start gap-y-8">
        <CarouselControls
          active={active}
          total={items.length}
          onPrevious={() => scrollToIndex(active - 1)}
          onNext={() => scrollToIndex(active + 1)}
          className="col-span-full justify-center md:justify-start lg:col-span-3"
        />
        <div
          key={current.slug}
          className="col-span-full motion-safe:animate-rise md:col-span-4 md:col-start-3 lg:col-span-5 lg:col-start-5"
        >
          <p className="prose-measure text-body text-ivory-muted">{current.shortDescription}</p>
          <dl className="mt-4 flex flex-wrap gap-x-8 gap-y-2 text-small">
            <div>
              <dt className="text-ivory-muted">Jenis</dt>
              <dd className="text-ivory">{current.category}</dd>
            </div>
            <div>
              <dt className="text-ivory-muted">Asal</dt>
              <dd className="text-ivory">{current.origin}</dd>
            </div>
          </dl>
          <TextLink href={ulosPath(current)} className="mt-4 inline-block bg-origin-content py-2.5">
            Lihat detail {current.name}
          </TextLink>
        </div>
      </Container>
    </div>
  );
}
