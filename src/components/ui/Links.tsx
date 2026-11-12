import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/cn";

type BaseLinkProps = {
  href: string;
  className?: string;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<"a">, "href" | "className" | "children">;

const isExternal = (href: string) => /^https?:\/\//.test(href);

/** Renders next/link for internal paths and a safe anchor for external URLs. */
function SmartLink({ href, children, ...rest }: BaseLinkProps) {
  if (isExternal(href)) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
        <span className="sr-only"> (membuka tab baru)</span>
      </a>
    );
  }
  return (
    <Link href={href} {...rest}>
      {children}
    </Link>
  );
}

/**
 * Inline text link. A permanent 1px rule gives affordance; on hover and
 * focus a thread in the current colour draws across it from the left.
 */
export function TextLink({ className, children, ...rest }: BaseLinkProps) {
  return (
    <SmartLink
      className={cn(
        "thread font-medium text-(--fg) underline decoration-(--rule) decoration-1 underline-offset-[0.3em]",
        "hover:bg-size-[100%_1px] focus-visible:bg-size-[100%_1px]",
        className,
      )}
      {...rest}
    >
      {children}
    </SmartLink>
  );
}

type ButtonLinkProps = BaseLinkProps & {
  variant?: "solid" | "outline";
};

/**
 * Navigation button. The platform has no transactional actions, so buttons
 * are always links to another place in the content.
 */
export function ButtonLink({ variant = "solid", className, children, ...rest }: ButtonLinkProps) {
  return (
    <SmartLink
      className={cn(
        "inline-flex min-h-12 items-center justify-center gap-3 rounded-xs px-6 text-ui font-semibold",
        "transition-[background-color,color,border-color] duration-(--dur-hover) ease-editorial",
        variant === "solid" &&
          "bg-(--solid-bg) text-(--solid-fg) hover:bg-gold hover:text-obsidian",
        variant === "outline" &&
          "border border-current text-(--fg) hover:bg-(--fg) hover:text-(--solid-fg) hover:border-(--fg)",
        className,
      )}
      {...rest}
    >
      {children}
    </SmartLink>
  );
}
