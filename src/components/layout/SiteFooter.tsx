import Link from "next/link";
import { BrandLockup } from "@/components/brand/BrandLogo";
import { navGroups } from "@/components/navigation/nav-config";
import { site } from "@/lib/site";

const linkClass =
  "thread inline-flex min-h-11 items-center bg-origin-content py-2.5 text-ui text-ivory hover:bg-size-[100%_1px] focus-visible:bg-size-[100%_1px]";

/**
 * Footer (Master Execution Prompt v3 §8): PARTONUN identity and summary,
 * grouped page links, platform contacts, and the bottom line with the
 * copyright and legal pages.
 */
export function SiteFooter() {
  return (
    <footer data-tone="brown" className="relative isolate pb-8 pt-section-tight">
      <div aria-hidden="true" className="shell warp pointer-events-none absolute inset-0 -z-10" />
      <div className="shell grid-editorial gap-y-14">
        <div className="col-span-full lg:col-span-5">
          <BrandLockup />
          <p className="prose-measure mt-8 text-body text-(--fg-muted)">{site.description}</p>
          <p className="prose-measure mt-4 text-small text-(--fg-muted)">
            Katalog, dokumentasi, dan edukasi. Bukan marketplace: tidak ada transaksi di platform ini.
          </p>
        </div>

        <nav
          aria-label="Navigasi footer"
          className="col-span-full grid gap-10 sm:grid-cols-3 lg:col-span-6 lg:col-start-7"
        >
          {navGroups.map((group) => (
            <div key={group.id}>
              <h2 className="font-sans text-micro font-semibold uppercase text-gold">{group.label}</h2>
              <ul className="mt-3">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className={linkClass}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className="col-span-full grid gap-6 border-t border-(--rule) pt-8 sm:grid-cols-2 lg:col-span-6 lg:col-start-7 lg:grid-cols-3">
          <div>
            <h2 className="font-sans text-micro font-semibold uppercase text-gold">Kontak</h2>
            <ul className="mt-3">
              <li>
                <a href={`mailto:${site.email}`} className={linkClass}>
                  {site.email}
                </a>
              </li>
              <li>
                <a href={site.phone.href} className={linkClass}>
                  {site.phone.label}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-span-full flex flex-col gap-4 border-t border-(--rule) pt-6 text-small text-(--fg-muted) md:flex-row md:items-center md:justify-between">
          <p>
            <span aria-hidden="true">© </span>
            {site.copyright}
          </p>
          <ul className="flex flex-wrap gap-x-6">
            <li>
              <Link href="/privacy-policy" className={linkClass.replace("text-ui text-ivory", "text-small text-(--fg-muted) hover:text-ivory")}>
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms-services" className={linkClass.replace("text-ui text-ivory", "text-small text-(--fg-muted) hover:text-ivory")}>
                Terms &amp; Services
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
