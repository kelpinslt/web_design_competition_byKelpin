import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SwipeRailProps = {
  /** Accessible name for the group. */
  label: string;
  /**
   * Make the rail itself focusable so keyboard users can scroll it on
   * mobile. Use when the items are not links or buttons.
   */
  focusable?: boolean;
  className?: string;
  children: ReactNode;
};

/**
 * A row that is a horizontal, snap-scrolling strip on mobile (comfortable
 * swipe, items peek to signal more) and the editorial grid from tablet up.
 * Children set their own widths and grid placement, e.g.
 * `w-[78%] shrink-0 snap-start md:w-auto md:col-span-3 lg:col-span-6`.
 * Use inside a Container: the strip bleeds to the screen edges on mobile.
 */
export function SwipeRail({ label, focusable = false, className, children }: SwipeRailProps) {
  return (
    <div
      role="group"
      aria-label={label}
      tabIndex={focusable ? 0 : undefined}
      className={cn(
        "-mx-margin flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain px-margin pb-2 scroll-px-margin",
        "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
        "md:mx-0 md:grid md:grid-cols-6 md:gap-x-(--gutter) md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-12",
        className,
      )}
    >
      {children}
    </div>
  );
}
