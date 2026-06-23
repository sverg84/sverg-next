"use client";

import TimelineBadge from "./badge";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

type Props = Readonly<{
  id: string;
  skills: ReadonlyArray<string>;
}>;

const MAX_BADGES = 10;

export default function TimelineSkills({ id, skills }: Props) {
  const skillsFirstSlice = skills.slice(
    0,
    skills.length > MAX_BADGES ? MAX_BADGES - 1 : MAX_BADGES,
  );
  const overflowSkills =
    skills.length > MAX_BADGES ? skills.slice(MAX_BADGES - 1) : [];

  return (
    <ul
      aria-label="Skills"
      className="flex list-none flex-wrap gap-x-4 gap-y-2"
    >
      {skillsFirstSlice.map((skill) => (
        <li key={`${id}-${skill}`}>
          <TimelineBadge label={skill} />
        </li>
      ))}
      {overflowSkills.map((skill) => (
        <li className="hidden lg:list-item" key={`${id}-${skill}`}>
          <TimelineBadge label={skill} />
        </li>
      ))}
      {overflowSkills.length > 0 && (
        <li className="lg:hidden">
          <Popover>
            <PopoverTrigger
              render={
                <Button
                  className="h-auto rounded-lg px-1 py-[0.0625rem] text-[0.6rem] font-medium
                    md:px-2 md:py-0.5 md:text-xs"
                  type="button"
                  variant="secondary"
                />
              }
            >
              +{overflowSkills.length}
            </PopoverTrigger>
            <PopoverContent align="start" className="w-auto min-w-32">
              <ul className="flex flex-col gap-1 text-sm">
                {overflowSkills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </PopoverContent>
          </Popover>
        </li>
      )}
    </ul>
  );
}
