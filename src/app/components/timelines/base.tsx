import type { Item } from "@/app/types/item";
import type {
  TimelineContentProps,
  TimelineItemProps,
  TimelineProps,
} from "flowbite-react";

import {
  Badge,
  Timeline,
  TimelineBody,
  TimelineContent,
  TimelineItem,
  TimelineTime,
  TimelineTitle,
} from "flowbite-react";
import Point from "./point";

type Props = Readonly<{
  contentTheme?: TimelineContentProps["theme"];
  id: string;
  items: ReadonlyArray<Item>;
  itemTheme?: TimelineItemProps["theme"];
  label: string;
  rightAlign?: boolean;
  timelineTheme?: TimelineProps["theme"];
}>;

export default function TimelineBase({
  contentTheme,
  id,
  items,
  itemTheme,
  label,
  rightAlign = false,
  timelineTheme,
}: Props) {
  const textAlign = rightAlign ? "text-right" : "text-left";

  return (
    <section className="body-section flex flex-col" id={id}>
      <h2 className="section-header">{label}</h2>
      <Timeline className="max-w-full" theme={timelineTheme}>
        {items.map(({ body, id, skills, time, title }) => (
          <TimelineItem className="mb-5 md:mb-10" key={id} theme={itemTheme}>
            <Point rightAlign={rightAlign} iconId={id} />
            <TimelineContent theme={contentTheme}>
              {time && (
                <TimelineTime className="text-xs md:text-sm">
                  {time}
                </TimelineTime>
              )}
              <TimelineTitle
                className={`${textAlign} text-sm md:text-base lg:text-lg`}
              >
                {title}
              </TimelineTitle>
              <TimelineBody
                className={`flex flex-col gap-y-2 text-xs md:text-sm lg:text-base ${textAlign} ${
                  rightAlign ? "items-end" : "items-start"
                }`}
              >
                <span>{body}</span>
                <div className="flex gap-x-4">
                  {skills.map((skill) => (
                    <Badge
                      className="px-1 py-[0.0625rem] text-[0.6rem] text-cyan-700 dark:bg-emerald-800
                        dark:text-emerald-300 md:px-2 md:py-0.5 md:text-xs"
                      key={`${id}-${skill}`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </TimelineBody>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </section>
  );
}
