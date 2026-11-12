"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

type Topic = { id: string; label: string };

/**
 * In-page navigation for long material (PRD E5 "navigasi internal"). A
 * sticky list on desktop, a horizontal strip on mobile; the topic in view
 * is marked with aria-current. Plain anchors, so it works without JS.
 */
export function TopicNav({ topics, label }: { topics: Topic[]; label: string }) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const nodes = topics.map((topic) => document.getElementById(topic.id)).filter((node): node is HTMLElement => Boolean(node));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [topics]);

  return (
    <nav aria-label={label}>
      <ol className="-mx-margin flex gap-2 overflow-x-auto px-margin pb-1 [scrollbar-width:none] lg:mx-0 lg:block lg:space-y-1 lg:overflow-visible lg:px-0">
        {topics.map((topic, index) => {
          const current = active === topic.id;
          return (
            <li key={topic.id} className="shrink-0">
              <a
                href={`#${topic.id}`}
                aria-current={current ? "location" : undefined}
                className={cn(
                  "flex min-h-11 items-center gap-3 rounded-xs border px-3 text-ui transition-colors duration-(--dur-micro)",
                  "lg:border-0 lg:border-l-2 lg:px-4",
                  current
                    ? "border-gold text-ivory lg:bg-ivory/5"
                    : "border-ivory/20 text-ivory-muted hover:text-ivory lg:border-transparent",
                )}
              >
                <span className="text-small tabular-nums text-gold">{String(index + 1).padStart(2, "0")}</span>
                <span className="whitespace-nowrap lg:whitespace-normal">{topic.label}</span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
