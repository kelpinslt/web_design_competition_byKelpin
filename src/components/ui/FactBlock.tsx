import type { Fact } from "@/types/content";
import { SourceNote } from "./SourceNote";
import { cn } from "@/lib/cn";

const scopeLabel: Record<NonNullable<Fact["scope"]>, string | null> = {
  jenis: null,
  umum: "Data umum Ulos",
  contoh: "Contoh terdokumentasi",
};

/** Small tags that say how far a statement reaches and whether it is confirmed. */
export function FactTags({ fact, className }: { fact: Fact; className?: string }) {
  const scope = fact.scope ? scopeLabel[fact.scope] : null;
  const pending = fact.status === "needs_verification";
  if (!scope && !pending) return null;
  return (
    <span className={cn("flex flex-wrap gap-2", className)}>
      {scope ? (
        <span className="rounded-xs border border-(--rule) px-2 py-0.5 text-micro font-semibold uppercase text-(--fg-muted)">
          {scope}
        </span>
      ) : null}
      {pending ? (
        <span className="rounded-xs border border-current px-2 py-0.5 text-micro font-semibold uppercase text-(--label)">
          Perlu verifikasi
        </span>
      ) : null}
    </span>
  );
}

type FactBlockProps = {
  label?: string;
  fact: Fact | null;
  /** Size of the headline value. */
  size?: "h3" | "h2" | "lead";
  className?: string;
  /** Render as a <dt>/<dd> pair; place inside a <dl>. */
  definition?: boolean;
};

/**
 * One sourced fact: optional label, large headline value, full statement,
 * scope/verification tags and its sources. A null fact keeps its place and
 * reads "Informasi belum tersedia"; nothing is invented to fill it.
 */
export function FactBlock({ label, fact, size = "h3", className, definition = false }: FactBlockProps) {
  const Label = definition ? "dt" : "p";
  const Value = definition ? "dd" : "div";
  const headlineClass = size === "h2" ? "font-serif text-h2" : size === "lead" ? "text-lead" : "font-serif text-h3";

  return (
    <div className={cn("border-t border-(--rule) pt-4", className)}>
      {label ? <Label className="text-small font-semibold text-(--fg-muted)">{label}</Label> : null}
      <Value className={label ? "mt-2 block" : "block"}>
        {fact ? (
          <>
            {fact.headline ? <span className={cn("block text-(--fg)", headlineClass)}>{fact.headline}</span> : null}
            <span className={cn("prose-measure block text-body", fact.headline ? "mt-3 text-(--fg-muted)" : "text-(--fg)")}>
              {fact.text}
            </span>
            <FactTags fact={fact} className="mt-3" />
            <SourceNote ids={fact.sourceIds} className="mt-3" />
          </>
        ) : (
          <span className="block text-body text-(--fg-muted)">Informasi belum tersedia</span>
        )}
      </Value>
    </div>
  );
}
