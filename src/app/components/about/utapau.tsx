import { Tooltip } from "flowbite-react";

export default function Utapau() {
  return (
    <Tooltip
      content="General Kenobi!"
      // Local only: custom cursor + target; app-wide tooltip theme must stay default for hero/social.
      theme={{
        base: "cursor-grievous absolute inline-block z-10 rounded-lg py-2 px-3 text-sm font-medium shadow-xs",
        target: "self-center h-fit w-fit",
      }}
    >
      <span
        className="text-lg font-bold lg:utapau lg:bg-utapau-light lg:hover:bg-[position:0_100%]
          lg:dark:bg-utapau-dark"
      >
        Hello there!
      </span>
    </Tooltip>
  );
}
