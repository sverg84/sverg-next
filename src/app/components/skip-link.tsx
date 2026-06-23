export default function SkipLink() {
  return (
    <a
      className="focus-ring pointer-events-none fixed top-4 left-4 z-[100] -translate-y-[calc(100%+1rem)]
        rounded-md bg-skip-bg px-4 py-2 text-sm font-semibold text-white shadow-lg
        transition-transform focus-visible:pointer-events-auto focus-visible:translate-y-0"
      href="#main"
    >
      Skip to main content
    </a>
  );
}
