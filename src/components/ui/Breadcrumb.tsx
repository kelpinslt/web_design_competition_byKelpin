import Link from "next/link";
import { cn } from "@/lib/cn";

export type Crumb = { label: string; href?: string };

/**
 * Orientation aid for detail pages (PRD D3.6), e.g. "Ulos Hita / Detail Ulos".
 * The last crumb is the current page and is not a link.
 */
export function Breadcrumb({ items, className }: { items: Crumb[]; className?: string }) {
  return (
    <nav aria-label="Breadcrumb" className={cn("text-small", className)}>
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-(--fg-muted)">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="thread inline-block bg-origin-content py-3 text-(--fg-muted) transition-colors duration-(--dur-micro) hover:bg-size-[100%_1px] hover:text-(--fg) focus-visible:text-(--fg)"
                >
                  {item.label}
                </Link>
              ) : (
                <span aria-current={isLast ? "page" : undefined} className={isLast ? "text-(--fg)" : undefined}>
                  {item.label}
                </span>
              )}
              {!isLast ? <span aria-hidden="true">/</span> : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
