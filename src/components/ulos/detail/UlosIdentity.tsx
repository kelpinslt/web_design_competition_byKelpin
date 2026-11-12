import { ViewTransition } from "react";
import type { Ulos } from "@/types/content";
import { pageBackgrounds } from "@/data/page-backgrounds";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { PageBackdrop } from "@/components/ui/PageBackdrop";
import { Container, Section } from "@/components/ui/Section";
import { ulosTransitionName } from "@/lib/ulos";

/**
 * Detail Ulos 1–2 — large cover and the type's identity (v3 §7.3). The
 * cover continues the catalogue card through a shared ViewTransition.
 */
export function UlosIdentity({ ulos, index, total }: { ulos: Ulos; index: number; total: number }) {
  return (
    <Section
      tone="obsidian"
      spacing="none"
      aria-labelledby="ulos-nama"
      className="overflow-hidden pb-section-tight pt-[calc(var(--spacing-header)+1.5rem)]"
    >
      <PageBackdrop media={pageBackgrounds.detailUlos} strength="stage" />
      <Container>
        <Breadcrumb items={[{ label: "Ulos Hita", href: "/ulos-hita" }, { label: ulos.name }]} />
      </Container>

      <Container grid className="mt-6 items-end gap-y-10">
        <div className="col-span-full md:col-span-3 lg:col-span-6">
          <ViewTransition name={ulosTransitionName(ulos)}>
            <MediaFrame
              media={ulos.image}
              ratio="portrait"
              priority
              unveil
              sizes="(min-width: 1440px) 640px, (min-width: 1024px) 46vw, (min-width: 768px) 50vw, 100vw"
            />
          </ViewTransition>
        </div>

        <div className="col-span-full md:col-span-3 lg:col-span-5 lg:col-start-8 lg:pb-14">
          <p className="text-micro font-semibold uppercase text-gold motion-safe:animate-rise">
            Jenis {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </p>
          <h1
            id="ulos-nama"
            className="mt-5 font-serif text-h1 text-ivory motion-safe:animate-rise motion-safe:[animation-delay:80ms]"
          >
            {ulos.name}
          </h1>
          {ulos.alternativeNames.length > 0 ? (
            <p className="mt-3 text-small text-ivory-muted">Dikenal juga sebagai {ulos.alternativeNames.join(", ")}</p>
          ) : null}
          <p className="prose-measure mt-8 text-lead text-ivory motion-safe:animate-rise motion-safe:[animation-delay:160ms]">
            {ulos.shortDescription}
          </p>
          <dl className="mt-10 grid gap-5 border-t border-rule-dark pt-6 sm:grid-cols-2">
            <div>
              <dt className="text-small font-semibold text-ivory-muted">Jenis</dt>
              <dd className="mt-1 text-body text-ivory">{ulos.category}</dd>
            </div>
            <div>
              <dt className="text-small font-semibold text-ivory-muted">Asal</dt>
              <dd className="mt-1 text-body text-ivory">{ulos.origin}</dd>
            </div>
          </dl>
          <p className="mt-8 text-small text-ivory-muted">
            Data di halaman ini menjelaskan karakter jenis {ulos.name}, bukan satu lembar kain tertentu.
          </p>
        </div>
      </Container>
    </Section>
  );
}
