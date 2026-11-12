import type { CSSProperties } from "react";
import { cardDepth, cardWidthVars } from "./carousel-styles";
import { EmptyState } from "@/components/ui/EmptyState";
import { Container } from "@/components/ui/Section";
import { cn } from "@/lib/cn";

/** Distances from the centre for the five preview slots. */
const slots = [2, 1, 0, 1, 2];

/**
 * Shown while no verified Ulos exists. The labelled empty slots preview the
 * carousel's geometry; controls and filters are not rendered because there
 * is nothing to operate (PRD A2.18).
 */
export function CatalogEmpty() {
  return (
    <>
      <div
        aria-hidden="true"
        className={cn(cardWidthVars, "flex items-start justify-center gap-3 overflow-hidden py-10 lg:gap-5")}
      >
        {slots.map((distance, index) => (
          <div
            key={index}
            style={{ "--ad": distance } as CSSProperties}
            className={cn(cardDepth, "w-(--card-w) shrink-0")}
          >
            <div className="flex aspect-[4/5] items-end rounded-xs border border-rule-dark p-4">
              <span className="text-small text-ivory-muted">Slot foto koleksi (menunggu data terverifikasi)</span>
            </div>
          </div>
        ))}
      </div>
      <Container grid className="mt-2">
        <EmptyState
          className="col-span-full lg:col-span-6"
          title="Belum ada koleksi yang ditampilkan"
          description="Koleksi Ulos tampil di sini setelah data dan fotonya diverifikasi bersama pengrajin. Setiap kain akan dilengkapi sembilan informasi wajib."
        />
      </Container>
    </>
  );
}
