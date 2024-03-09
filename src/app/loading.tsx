import { Spinner } from "flowbite-react";

export default function Loading() {
  return (
    <div className="flex h-lvh w-lvw items-center justify-center">
      <Spinner aria-label="Page loading indicator" size="xl" />
    </div>
  );
}
