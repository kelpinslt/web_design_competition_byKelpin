import Link from "next/link";
import { BrandLogo, BrandName } from "@/components/brand/BrandLogo";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";

/**
 * Compact header lockup: the official symbol beside PARTONUN, with the
 * tagline as a small second line on wide screens. The symbol keeps its
 * own proportion; the lockup is horizontal only in arrangement.
 */
export function Wordmark({ onNavigate, className }: { onNavigate?: () => void; className?: string }) {
  return (
    <Link
      href="/"
      onClick={onNavigate}
      aria-label={`${site.name}, kembali ke Beranda`}
      className={cn("-ml-1 inline-flex min-h-12 items-center gap-3 px-1 text-ivory", className)}
    >
      <BrandLogo height={38} />
      <span className="flex flex-col">
        <BrandName className="text-[1.25rem] tracking-[0.08em]" />
        <span className="mt-1 hidden text-micro tracking-normal text-ivory-muted lg:block">{site.tagline}</span>
      </span>
    </Link>
  );
}
