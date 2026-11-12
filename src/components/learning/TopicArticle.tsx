import Link from "next/link";
import type { EducationBlock, EducationEntry } from "@/types/content";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { SourceNote } from "@/components/ui/SourceNote";
import { cn } from "@/lib/cn";
import { getUlosBySlugs, ulosPath } from "@/lib/ulos";

function Points({ block }: { block: Extract<EducationBlock, { type: "points" }> }) {
  return (
    <ul className="space-y-6">
      {block.items.map((item) => (
        <li key={item.text} className="border-t border-(--rule) pt-5">
          {item.headline ? <p className="font-serif text-h3 text-(--fg)">{item.headline}</p> : null}
          <p className={cn("prose-measure text-body text-(--fg)", item.headline && "mt-2")}>{item.text}</p>
          <SourceNote ids={item.sourceIds} className="mt-2" />
        </li>
      ))}
    </ul>
  );
}

function Table({ block, title }: { block: Extract<EducationBlock, { type: "table" }>; title: string }) {
  return (
    <div>
      {/* Stacked rows on small screens; a real table from tablet up. */}
      <table className="w-full border-collapse text-left">
        <caption className="sr-only">{title}</caption>
        <thead className="hidden md:table-header-group">
          <tr>
            {block.columns.map((column) => (
              <th key={column} scope="col" className="border-b border-(--rule) pb-3 pr-6 text-small font-semibold text-(--fg-muted)">
                {column}
              </th>
            ))}
            <th scope="col" className="border-b border-(--rule) pb-3 text-small font-semibold text-(--fg-muted)">
              Sumber
            </th>
          </tr>
        </thead>
        <tbody>
          {block.rows.map((row) => (
            <tr key={row.cells[0]} className="block border-t border-(--rule) py-4 md:table-row md:py-0">
              {row.cells.map((cell, index) => (
                <td
                  key={cell}
                  data-label={block.columns[index]}
                  className={cn(
                    "block md:table-cell md:border-b md:border-(--rule) md:py-4 md:pr-6 md:align-top",
                    index === 0 ? "font-serif text-h3 text-(--fg)" : "mt-1 text-body text-(--fg)",
                  )}
                >
                  {index > 0 ? <span className="mr-2 text-small text-(--fg-muted) md:hidden">{block.columns[index]}:</span> : null}
                  {cell}
                </td>
              ))}
              <td className="mt-2 block md:table-cell md:border-b md:border-(--rule) md:py-4 md:align-top">
                <SourceNote ids={row.sourceIds} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {block.note ? <p className="mt-4 text-small text-(--fg-muted)">{block.note}</p> : null}
    </div>
  );
}

/**
 * One Belajar Ulos topic as an editorial article: number, title, summary,
 * image when it helps, then sourced points or a table, and links to the
 * Ulos types the topic names. Image side alternates by index.
 */
export function TopicArticle({ entry, index }: { entry: EducationEntry; index: number }) {
  const related = getUlosBySlugs(entry.relatedUlosSlugs);
  const imageFirst = index % 2 === 1;

  return (
    <article id={entry.slug} aria-labelledby={`${entry.slug}-judul`} className="scroll-mt-[calc(var(--spacing-header)+5rem)] border-t border-(--rule) pt-12 lg:pt-16">
      <div className={cn("grid gap-10 md:grid-cols-2 md:gap-(--gutter)", entry.image ? "" : "md:grid-cols-1")}>
        <header className={cn(imageFirst && entry.image && "md:order-2")}>
          <p className="font-serif text-h3 text-(--label) tabular-nums">{String(index + 1).padStart(2, "0")}</p>
          <h2 id={`${entry.slug}-judul`} className="mt-3 font-serif text-h2 text-(--fg)">
            {entry.title}
          </h2>
          <p className="prose-measure mt-5 text-lead text-(--fg)">{entry.summary}</p>
          {entry.localTerms.length > 0 ? (
            <p className="mt-5 text-small text-(--fg-muted)">
              Istilah: <span className="italic text-(--fg)">{entry.localTerms.join(", ")}</span>
            </p>
          ) : null}
        </header>
        {entry.image ? (
          <MediaFrame
            media={entry.image}
            ratio={index % 3 === 0 ? "landscape" : "portrait"}
            sizes="(min-width: 1024px) 34vw, (min-width: 768px) 50vw, 100vw"
            className={cn(imageFirst && "md:order-1")}
          />
        ) : null}
      </div>

      <div className="mt-10 space-y-10">
        {entry.blocks.map((block, blockIndex) =>
          block.type === "points" ? (
            <Points key={blockIndex} block={block} />
          ) : (
            <Table key={blockIndex} block={block} title={entry.title} />
          ),
        )}
      </div>

      {related.length > 0 ? (
        <div className="mt-10">
          <p className="text-small font-semibold text-(--fg-muted)">Jenis Ulos yang disebut</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {related.map((ulos) => (
              <li key={ulos.slug}>
                <Link
                  href={ulosPath(ulos)}
                  className="inline-flex min-h-11 items-center rounded-xs border border-(--rule) px-4 text-ui text-(--fg) transition-colors duration-(--dur-micro) hover:border-current hover:text-gold"
                >
                  {ulos.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </article>
  );
}
