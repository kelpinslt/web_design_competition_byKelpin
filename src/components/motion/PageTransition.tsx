"use client";

import { usePathname } from "next/navigation";
import { Suspense, useEffect, useRef, useState } from "react";
import { BrandLogo, BrandName } from "@/components/brand/BrandLogo";
import { cn } from "@/lib/cn";

type Phase = "idle" | "cover" | "reveal";

/** Fade-in duration and the shortest time the logo stays fully visible. */
const COVER_MS = 140;
const REVEAL_MS = 180;
/** If a navigation never completes (offline, error), stop covering the page. */
const SAFETY_MS = 4000;

/**
 * Branded page transition (Master Execution Prompt v3 §9): on an internal
 * navigation to another page, an Obsidian layer with the PARTONUN logo and
 * a gold thread fades in, then out as soon as the new route is rendered —
 * about 300 ms in total, with no artificial wait for a slow page.
 *
 * Not used for: anchors and same-page links, back/forward, links opened in
 * a new tab or with modifier keys, downloads, the catalogue card morph
 * (`data-transition="morph"`), or when the visitor prefers reduced motion.
 * The layer never takes pointer events and is hidden from assistive tech.
 */
export function PageTransition() {
  const [phase, setPhaseState] = useState<Phase>("idle");
  const phaseRef = useRef<Phase>("idle");
  const setPhase = (next: Phase) => {
    phaseRef.current = next;
    setPhaseState(next);
  };
  const startedAt = useRef(0);
  const timers = useRef<number[]>([]);

  const clearTimers = () => {
    timers.current.forEach((id) => window.clearTimeout(id));
    timers.current = [];
  };

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const anchor = (event.target as Element | null)?.closest?.("a[href]");
      if (!(anchor instanceof HTMLAnchorElement)) return;
      if (anchor.target && anchor.target !== "_self") return;
      if (anchor.hasAttribute("download") || anchor.dataset.transition === "morph") return;
      const url = new URL(anchor.href, window.location.href);
      if (url.origin !== window.location.origin) return;
      if (url.pathname === window.location.pathname) return;

      clearTimers();
      startedAt.current = performance.now();
      setPhase("cover");
      timers.current.push(window.setTimeout(() => setPhase("idle"), SAFETY_MS));
    };
    // Capture phase: runs before next/link, which prevents the default and
    // updates the URL synchronously; afterwards the target looks like the
    // current page.
    document.addEventListener("click", onClick, true);
    return () => {
      document.removeEventListener("click", onClick, true);
      clearTimers();
    };
  }, []);

  const onRouteChange = () => {
    if (phaseRef.current !== "cover") return;
    clearTimers();
    const wait = Math.max(0, COVER_MS - (performance.now() - startedAt.current));
    timers.current.push(
      window.setTimeout(() => {
        setPhase("reveal");
        timers.current.push(window.setTimeout(() => setPhase("idle"), REVEAL_MS));
      }, wait),
    );
  };

  return (
    <>
      <Suspense fallback={null}>
        <RouteWatcher onChange={onRouteChange} />
      </Suspense>
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none fixed inset-0 z-[60] flex items-center justify-center bg-obsidian",
          phase === "idle" && "invisible opacity-0",
          phase === "cover" && "visible opacity-100 transition-opacity duration-[140ms] ease-editorial",
          phase === "reveal" && "visible opacity-0 transition-opacity duration-[180ms] ease-exit",
        )}
      >
        <div className={cn("flex flex-col items-center transition-transform duration-[320ms] ease-editorial", phase === "cover" ? "scale-100" : "scale-95")}>
          <BrandLogo height={72} />
          <BrandName className="mt-4 text-[1.5rem] tracking-[0.06em] text-ivory" />
          <span
            className={cn(
              "mt-5 block h-px bg-gold transition-[width] duration-[320ms] ease-editorial",
              phase === "cover" ? "w-24" : "w-0",
            )}
          />
        </div>
      </div>
    </>
  );
}

/** usePathname is URL data; under Cache Components it must sit inside Suspense. */
function RouteWatcher({ onChange }: { onChange: () => void }) {
  const pathname = usePathname();
  const first = useRef(true);
  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    onChange();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);
  return null;
}
