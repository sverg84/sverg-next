"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Utapau() {
  return (
    <div className="self-center">
      <Tooltip>
        <TooltipTrigger
          render={
            <span
              className="inline-block w-fit cursor-grievous text-lg font-bold lg:utapau
                lg:bg-utapau-light lg:hover:bg-[position:0_100%] lg:dark:bg-utapau-dark"
            />
          }
        >
          Hello there!
        </TooltipTrigger>
        <TooltipContent>General Kenobi!</TooltipContent>
      </Tooltip>
    </div>
  );
}
