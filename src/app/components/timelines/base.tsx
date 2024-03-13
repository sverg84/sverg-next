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
import { PiArrowUpRight } from "react-icons/pi";
import Point from "./point";
import Link from "next/link";

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
      <h2
        className={`section-header ${rightAlign ? "lg:self-end" : "lg:self-start"}`}
      >
        {label}
      </h2>
      <Timeline className="group/timeline max-w-full" theme={timelineTheme}>
        {items.map(({ body, href, id, skills, time, title }) => (
          <TimelineItem
            className="group mb-5 transition-all md:mb-10"
            key={id}
            theme={itemTheme}
          >
            <Point rightAlign={rightAlign} iconId={id} />
            <TimelineContent
              className="lg:group-hover:shadow-[inset 0 1px 1px rgba(148,163,184,0.1)] relative
                transition motion-reduce:transition-none lg:rounded-lg lg:hover:!opacity-100
                lg:group-hover/timeline:opacity-50 dark:lg:hover:bg-slate-800/50"
              theme={contentTheme}
            >
              <Link
                aria-hidden={true}
                tabIndex={-1}
                className="absolute inset-0 hidden lg:block"
                href={href}
                target="_blank"
              />
              {time && (
                <TimelineTime className="text-xs md:text-sm">
                  {time}
                </TimelineTime>
              )}
              <TimelineTitle
                className={`${textAlign} text-sm transition ease-linear motion-reduce:transition-none
                md:text-base lg:text-lg lg:group-hover:text-cyan-700
                dark:lg:group-hover:text-emerald-300`}
              >
                <Link
                  className="group/title relative inline-flex items-center gap-x-1 hover:text-cyan-700
                    focus-visible:text-cyan-700 dark:hover:text-emerald-300
                    dark:focus-visible:text-emerald-300 lg:gap-x-2"
                  href={href}
                  target="_blank"
                >
                  {title}
                  <PiArrowUpRight
                    className="transition group-hover/title:-translate-y-1 group-hover/title:translate-x-1
                      group-focus-visible/title:-translate-y-1 group-focus-visible/title:translate-x-1
                      motion-reduce:transition-none lg:group-hover:-translate-y-1
                      lg:group-hover:translate-x-1"
                  />
                </Link>
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
                      className="rounded-lg px-1 py-[0.0625rem] text-[0.6rem] text-cyan-700
                        group-hover:bg-cyan-100 dark:bg-emerald-800 dark:text-emerald-300
                        dark:group-hover:bg-emerald-800 md:px-2 md:py-0.5 md:text-xs"
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
