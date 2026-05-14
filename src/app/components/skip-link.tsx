export default function SkipLink() {
  return (
    <a
      className="pointer-events-none fixed top-4 left-4 z-[100] -translate-y-[calc(100%+1rem)]
        rounded-md bg-cyan-800 px-4 py-2 text-sm font-semibold text-white shadow-lg
        ring-cyan-300 transition-transform outline-none focus:pointer-events-auto
        focus:translate-y-0 focus:ring-4 dark:bg-emerald-800 dark:ring-emerald-900"
      href="#main"
    >
      Skip to main content
    </a>
  );
}
