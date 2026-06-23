"use client";

import type { ReactNode } from "react";
import ClientLocale from "./locale";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type Props = Readonly<{
  children: ReactNode;
  date: Date;
}>;

export default function TooltipTime({ children, date }: Props) {
  return (
    <Tooltip>
      <TooltipTrigger
        render={<time className="underline decoration-dotted" />}
      >
        {children}
      </TooltipTrigger>
      <TooltipContent>
        <ClientLocale date={date} />
      </TooltipContent>
    </Tooltip>
  );
}
