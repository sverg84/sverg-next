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
  id: string;
  items: ReadonlyArray<Item>;
  label: string;
}>;

export default function TimelineBase({ id, items, label }: Props) {
  return (
    <section
      className="body-section flex flex-col 2xl:w-full 2xl:items-start"
      id={id}
    >
      <h2 className="section-header lg:self-start">{label}</h2>
      <Timeline className="group/timeline max-w-full">
        {items.map(({ body, href, id, skills, time, title }) => (
          <TimelineItem className="group mb-5 transition-all md:mb-10" key={id}>
            <Point iconId={id} />
            <TimelineContent
              className="lg:group-hover:shadow-[inset 0 1px 1px rgba(148,163,184,0.1)] relative
                transition motion-reduce:transition-none lg:rounded-lg lg:hover:!opacity-100
                lg:group-hover/timeline:opacity-50 dark:lg:hover:bg-slate-800/50"
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
                className="text-sm transition ease-linear motion-reduce:transition-none md:text-base
                  lg:text-lg lg:group-hover:text-cyan-700 dark:lg:group-hover:text-emerald-300"
              >
                <Link
                  className="group/title link relative inline-flex items-center gap-x-1 lg:gap-x-2"
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
              <TimelineBody className="flex flex-col gap-y-2 text-xs md:text-sm lg:text-base">
                <span>{body}</span>
                <div className="flex flex-wrap gap-x-4 gap-y-2">
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
