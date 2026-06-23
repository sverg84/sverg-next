export default function Loading() {
  return (
    <div
      aria-label="Page loading indicator"
      className="flex min-h-dvh w-full items-center justify-center bg-page-bg"
      role="status"
    >
      <div
        className="size-10 animate-spin rounded-full border-4 border-brand-subtle
          border-t-brand"
      />
    </div>
  );
}
