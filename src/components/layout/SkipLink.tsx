/** First focusable element: lets keyboard users jump past the header. */
export function SkipLink() {
  return (
    <a
      href="#konten"
      className="fixed left-4 top-3 z-50 -translate-y-24 rounded-xs bg-ivory px-5 py-3 text-ui font-semibold text-obsidian transition-transform duration-(--dur-micro) [--focus:var(--color-ulos)] focus-visible:translate-y-0"
    >
      Langsung ke konten
    </a>
  );
}
