"use client";

import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";
import { usePathname } from "next/navigation";
import { Suspense, useState, type CSSProperties, type Ref } from "react";
import { isActivePath, navGroups, navItems, type NavItem } from "./nav-config";
import { Wordmark } from "./Wordmark";
import { cn } from "@/lib/cn";

type NavOverlayProps = {
  ref: Ref<HTMLDialogElement>;
  /** The link list mounts on first open, so its pathname-dependent active
   *  state is never part of server HTML (the 404 page is prerendered under a
   *  different path, which would otherwise cause a hydration mismatch). */
  hasOpened: boolean;
  onRequestClose: () => void;
  onClosed: () => void;
};

/**
 * Immersive navigation overlay (PRD D3.3–D3.5).
 *
 * Built on the native modal <dialog>: the browser makes the page behind it
 * inert, keeps Tab inside the dialog and closes it on Escape. The header
 * returns focus to the MENU control when it closes.
 */
export function NavOverlay({ ref, hasOpened, onRequestClose, onClosed }: NavOverlayProps) {
  // Re-mounting the links on each close resets the preview to the active page.
  const [openKey, setOpenKey] = useState(0);

  return (
    <dialog
      ref={ref}
      id="site-menu"
      aria-label="Menu navigasi"
      data-tone="obsidian"
      onClose={() => {
        setOpenKey((key) => key + 1);
        onClosed();
      }}
      className="site-menu m-0 h-dvh max-h-none w-full max-w-none overflow-hidden border-0 p-0 text-ivory"
    >
      <div className="relative isolate flex h-full flex-col">
        <div aria-hidden="true" className="shell warp pointer-events-none absolute inset-0 -z-10" />

        <div className="shell flex h-header shrink-0 items-center justify-between">
          <Wordmark onNavigate={onRequestClose} />
          <button
            type="button"
            data-initial-focus=""
            onClick={onRequestClose}
            className="-mr-3 inline-flex min-h-12 min-w-12 items-center justify-end gap-3 px-3 text-micro font-semibold uppercase"
          >
            <span>Tutup</span>
            <X aria-hidden="true" className="size-5" strokeWidth={1.25} />
          </button>
        </div>

        {hasOpened ? (
          // usePathname is URL data: on dynamic routes it must sit inside Suspense.
          <Suspense fallback={null}>
            <NavLinks key={openKey} onRequestClose={onRequestClose} />
          </Suspense>
        ) : null}
      </div>
    </dialog>
  );
}

/** Grouped destinations with the active page marked, plus the desktop preview. */
function NavLinks({ onRequestClose }: { onRequestClose: () => void }) {
  const pathname = usePathname();
  const [previewHref, setPreviewHref] = useState<string | null>(null);

  const activeItem = navItems.find((item) => isActivePath(pathname, item.href));
  const preview: NavItem =
    navItems.find((item) => item.href === previewHref) ?? activeItem ?? navItems[0];
  const previewGroup = navGroups.find((group) => group.items.includes(preview));

  let itemIndex = 0;

  return (
    <nav aria-label="Navigasi utama" className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
      <div className="shell grid-editorial min-h-full content-end py-8 lg:content-center lg:py-10">
        <div
          className="group/list col-span-full lg:col-span-7"
          onMouseLeave={() => setPreviewHref(null)}
        >
          {navGroups.map((group) => (
            <section
              key={group.id}
              aria-labelledby={`menu-group-${group.id}`}
              className="grid gap-3 border-t border-rule-dark py-5 lg:grid-cols-[11rem_minmax(0,1fr)] lg:gap-8 lg:py-6"
            >
              <h2
                id={`menu-group-${group.id}`}
                className="menu-item pt-1.5 font-sans text-micro font-semibold uppercase text-gold"
                style={{ "--i": itemIndex } as CSSProperties}
              >
                {group.label}
              </h2>
              <ul className="space-y-3 lg:space-y-4">
                {group.items.map((item) => {
                  const active = isActivePath(pathname, item.href);
                  const index = ++itemIndex;
                  return (
                    <li key={item.href} className="menu-item" style={{ "--i": index } as CSSProperties}>
                      <Link
                        href={item.href}
                        onClick={onRequestClose}
                        onMouseEnter={() => setPreviewHref(item.href)}
                        onFocus={() => setPreviewHref(item.href)}
                        aria-current={active ? "page" : undefined}
                        className="group/item inline-block py-1"
                      >
                        <span
                          className={cn(
                            "relative inline-block font-serif text-[clamp(2rem,1.5rem+1.6vw,2.875rem)] leading-[1.04]",
                            "thread transition-colors duration-(--dur-hover) ease-editorial",
                            "group-hover/item:bg-size-[100%_1px] group-focus-visible/item:bg-size-[100%_1px]",
                            active
                              ? "text-gold"
                              : "text-ivory lg:group-hover/list:text-ivory-muted lg:group-hover/item:text-ivory!",
                          )}
                        >
                          {item.label}
                          {active ? (
                            <span
                              aria-hidden="true"
                              className="absolute -left-7 top-1/2 hidden h-px w-4 bg-gold lg:block"
                            />
                          ) : null}
                        </span>
                        <span className="mt-1.5 block text-small text-ivory-muted">{item.description}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </section>
          ))}
        </div>

        {/* Desktop preview: supporting context for the hovered or focused
            destination. Decorative duplicate of the list, so hidden from
            assistive technology. */}
        <div aria-hidden="true" className="hidden self-center lg:col-span-4 lg:col-start-9 lg:block">
          {preview.image ? (
            <div className="relative mb-8 aspect-[4/5] overflow-hidden rounded-xs">
              <Image
                src={preview.image.src}
                alt=""
                fill
                sizes="(min-width: 1440px) 420px, 28vw"
                className="object-cover"
              />
            </div>
          ) : null}
          <div key={preview.href} className="menu-preview border-l border-gold/40 pl-6">
            <p className="text-micro font-semibold uppercase text-gold">{previewGroup?.label}</p>
            <p className="mt-5 font-serif text-h3 text-ivory">{preview.label}</p>
            <p className="mt-4 text-body text-ivory-muted">{preview.purpose}</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
