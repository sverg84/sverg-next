export default function SkipLink() {
  return (
    <a
      className="pointer-events-none fixed top-4 left-4 z-[100] -translate-y-[calc(100%+1rem)]
        rounded-md bg-skip-bg px-4 py-2 text-sm font-semibold text-white shadow-lg
        ring-2 ring-ring transition-transform outline-none focus:pointer-events-auto
        focus:translate-y-0 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      href="#main"
    >
      Skip to main content
    </a>
  );
}
