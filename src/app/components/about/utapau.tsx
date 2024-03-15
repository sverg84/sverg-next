import { Tooltip } from "flowbite-react";

export default function Utapau() {
  return (
    <Tooltip
      content="General Kenobi!"
      theme={{
        base: "cursor-grievous absolute inline-block z-10 rounded-lg py-2 px-3 text-sm font-medium shadow-sm",
        target: "self-center h-fit w-fit",
      }}
    >
      <span className="lg:utapau text-lg font-bold lg:bg-utapau-light lg:dark:bg-utapau-dark">
        Hello there!
      </span>
    </Tooltip>
  );
}
