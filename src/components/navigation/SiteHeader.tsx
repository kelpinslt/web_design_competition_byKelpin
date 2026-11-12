"use client";

import { usePathname } from "next/navigation";
import { Suspense, useCallback, useEffect, useRef, useState } from "react";
import { NavOverlay } from "./NavOverlay";
import { Wordmark } from "./Wordmark";
import { cn } from "@/lib/cn";

/**
 * Minimal header (PRD D3.1–D3.2): wordmark on the left, one MENU control on
 * the right, no page links. Transparent over the opening section, solid
 * Obsidian once the visitor scrolls past it.
 */
export function SiteHeader() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isSolid, setIsSolid] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);

  // Solid background after the top of the page leaves the viewport.
  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;
    const observer = new IntersectionObserver(([entry]) => setIsSolid(!entry.isIntersecting));
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  const openMenu = useCallback(() => {
    const dialog = dialogRef.current;
    if (!dialog || dialog.open) return;
    dialog.showModal();
    // Move focus into the menu, onto its visible close control.
    dialog.querySelector<HTMLElement>("[data-initial-focus]")?.focus();
    setIsOpen(true);
    setHasOpened(true);
  }, []);

  const closeMenu = useCallback(() => {
    dialogRef.current?.close();
  }, []);

  // Fired by the close button, Escape, and link clicks alike.
  const handleClosed = useCallback(() => {
    setIsOpen(false);
    triggerRef.current?.focus({ preventScroll: true });
  }, []);

  return (
    <>
      <div ref={sentinelRef} aria-hidden="true" className="pointer-events-none absolute left-0 top-0 h-24 w-px" />
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 h-header text-ivory [--focus:var(--color-gold)]",
          "border-b transition-[background-color,border-color] duration-(--dur-section) ease-editorial",
          isSolid ? "border-rule-dark bg-obsidian/95" : "border-transparent bg-transparent",
        )}
      >
        <div className="shell flex h-full items-center justify-between">
          <Wordmark />
          <button
            ref={triggerRef}
            type="button"
            onClick={openMenu}
            aria-haspopup="dialog"
            aria-expanded={isOpen}
            aria-controls="site-menu"
            className="group -mr-3 inline-flex min-h-12 min-w-12 items-center justify-end gap-3 px-3 text-micro font-semibold uppercase"
          >
            <span>Menu</span>
            <span aria-hidden="true" className="relative block h-2.5 w-7">
              <span className="absolute right-0 top-0 h-px w-full bg-current" />
              <span className="absolute bottom-0 right-0 h-px w-2/3 bg-current transition-[width] duration-(--dur-hover) ease-editorial group-hover:w-full group-focus-visible:w-full" />
            </span>
          </button>
        </div>
      </header>
      <Suspense fallback={null}>
        <CloseOnRouteChange onChange={closeMenu} />
      </Suspense>
      <NavOverlay
        ref={dialogRef}
        hasOpened={hasOpened}
        onRequestClose={closeMenu}
        onClosed={handleClosed}
      />
    </>
  );
}

/**
 * Never leave the menu open across a route change (Cache Components keeps
 * previous routes alive with <Activity>, so stale UI state can persist).
 * Isolated in its own component because usePathname must sit inside
 * Suspense on dynamic routes.
 */
function CloseOnRouteChange({ onChange }: { onChange: () => void }) {
  const pathname = usePathname();
  useEffect(() => {
    onChange();
  }, [pathname, onChange]);
  return null;
}
