"use client";

import { useEffect, useRef, type CSSProperties, type ElementType, type ReactNode } from "react";

type RevealProps = {
  as?: ElementType;
  /** Position in a group; each step delays the reveal by 80ms. */
  index?: number;
  className?: string;
  children: ReactNode;
};

/**
 * Fades and lifts content once as it enters the viewport (PRD G2,
 * "scroll reveal"). Server HTML is always fully visible: only after
 * hydration is an element that sits below the viewport marked pending,
 * then released when it scrolls in. Use sparingly, not on every block.
 */
export function Reveal({ as: Tag = "div", index = 0, className, children }: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (node.getBoundingClientRect().top < window.innerHeight) return;

    node.setAttribute("data-pending", "");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.removeAttribute("data-pending");
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -12% 0px" },
    );
    observer.observe(node);
    return () => {
      observer.disconnect();
      node.removeAttribute("data-pending");
    };
  }, []);

  return (
    <Tag
      ref={ref}
      data-reveal=""
      className={className}
      style={{ "--reveal-index": index } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
