import { formatSource, getSources, shortSource } from "@/data/sources";
import { cn } from "@/lib/cn";

/**
 * Lists the references behind a piece of content (PRD V3.0, I6), as short
 * linked labels ("Zonautara, 2025") with the full citation as a tooltip
 * and screen-reader text. Renders nothing if no id resolves.
 */
export function SourceNote({ ids, label = "Sumber", className }: { ids: readonly string[]; label?: string; className?: string }) {
  const resolved = getSources(ids);
  if (resolved.length === 0) return null;

  return (
    <p className={cn("text-small text-(--fg-muted)", className)}>
      {label}:{" "}
      {resolved.map((source, index) => (
        <span key={source.id}>
          {index > 0 ? "; " : null}
          {source.url ? (
            <a
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              title={formatSource(source)}
              className="underline decoration-(--rule) underline-offset-[0.25em] transition-colors duration-(--dur-micro) hover:text-(--fg) hover:decoration-current"
            >
              {shortSource(source)}
              <span className="sr-only"> ({formatSource(source)}, membuka tab baru)</span>
            </a>
          ) : (
            <span title={formatSource(source)}>{shortSource(source)}</span>
          )}
        </span>
      ))}
    </p>
  );
}

/** Full reference list for the foot of a page. */
export function SourceList({ ids, heading = "Sumber", className }: { ids: readonly string[]; heading?: string; className?: string }) {
  const resolved = getSources(ids);
  if (resolved.length === 0) return null;
  return (
    <div className={cn("border-t border-(--rule) pt-6", className)}>
      <p className="text-micro font-semibold uppercase text-(--label)">{heading}</p>
      <ol className="mt-4 grid gap-x-(--gutter) gap-y-2 text-small text-(--fg-muted) md:grid-cols-2">
        {resolved.map((source) => (
          <li key={source.id} className="flex gap-3">
            <span className="w-8 shrink-0 tabular-nums text-(--fg-muted)">{source.id}</span>
            {source.url ? (
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block py-3 underline decoration-(--rule) underline-offset-[0.25em] hover:text-(--fg) hover:decoration-current"
              >
                {formatSource(source)}
                <span className="sr-only"> (membuka tab baru)</span>
              </a>
            ) : (
              <span>{formatSource(source)}</span>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
