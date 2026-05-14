import { Spinner } from "flowbite-react";

export default function Loading() {
  return (
    <div className="flex min-h-dvh w-full items-center justify-center bg-page-bg">
      <Spinner aria-label="Page loading indicator" size="xl" />
    </div>
  );
}
