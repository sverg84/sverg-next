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
      <Timeline theme={timelineTheme}>
        {items.map(({ body, id, skills, time, title }) => (
          <TimelineItem key={id} theme={itemTheme}>
            <Point rightAlign={rightAlign} iconId={id} />
            <TimelineContent theme={contentTheme}>
              {time && <TimelineTime>{time}</TimelineTime>}
              <TimelineTitle className={textAlign}>{title}</TimelineTitle>
              <TimelineBody
                className={`flex flex-col gap-y-2 ${textAlign} ${rightAlign ? "items-end" : "items-start"}`}
              >
                <span>{body}</span>
                <div className="flex gap-x-4">
                  {skills.map((skill) => (
                    <Badge
                      className="text-cyan-700 dark:bg-emerald-800 dark:text-emerald-300"
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
