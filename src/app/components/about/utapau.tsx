"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Utapau() {
  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <span
            className="cursor-grievous text-lg font-bold lg:utapau lg:bg-utapau-light
              lg:hover:bg-[position:0_100%] lg:dark:bg-utapau-dark"
          />
        }
      >
        Hello there!
      </TooltipTrigger>
      <TooltipContent>General Kenobi!</TooltipContent>
    </Tooltip>
  );
}
