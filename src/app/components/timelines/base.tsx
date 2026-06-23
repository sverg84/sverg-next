import type { Item } from "@/app/types/item";
import { PiArrowUpRight } from "react-icons/pi";
import Point from "./point";
import Link from "next/link";
import TimelineSkills from "./skills";
import { cn } from "@/lib/utils";

type Props = Readonly<{
  id: string;
  items: ReadonlyArray<Item>;
  label: string;
}>;

function parseDatetime(time?: string): string | undefined {
  if (!time) return undefined;
  return time.match(/\d{4}/)?.[0];
}

function timelineLinkLabel(title: string, time?: string): string {
  return time
    ? `${title}, ${time} (opens in new tab)`
    : `${title} (opens in new tab)`;
}

export default function TimelineBase({ id, items, label }: Props) {
  const headingId = `${id}-heading`;

  return (
    <section
      aria-labelledby={headingId}
      className="body-section flex w-full flex-col items-start gap-y-6 2xl:w-full"
      id={id}
    >
      <h2
        className="section-header w-full pl-6 text-left md:pl-8"
        id={headingId}
      >
        {label}
      </h2>
      <ol className="group/timeline relative w-full max-w-full border-s border-border">
        {items.map(({ body, href, id: itemId, skills, time, title }) => {
          const titleId = `${itemId}-title`;
          return (
            <li
              className="relative mb-5 pl-6 transition-all last:mb-0 md:mb-10 md:pl-8"
              key={itemId}
            >
              <Point iconId={itemId} />
              <article
                aria-labelledby={titleId}
                className={cn(
                  `timeline-card group relative lg:group-hover/timeline:opacity-50
                  lg:group-focus-within/timeline:opacity-100 lg:hover:opacity-100!
                  lg:group-hover:shadow-[inset_0_1px_1px_rgba(148,163,184,0.1)]
                  transition motion-reduce:transition-none lg:rounded-lg lg:px-3 lg:pb-3
                  lg:hover:bg-surface-hover`,
                )}
              >
                {time && (
                  <time
                    className="text-xs text-fg-muted md:text-sm"
                    dateTime={parseDatetime(time)}
                  >
                    {time}
                  </time>
                )}
                <h3
                  className="text-sm font-semibold md:text-base lg:text-lg"
                  id={titleId}
                >
                  <Link
                    aria-label={timelineLinkLabel(title, time)}
                    className="timeline-stretched-link group/title link relative inline-flex items-center
                      gap-x-1 lg:gap-x-2"
                    href={href}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {title}
                    <PiArrowUpRight
                      aria-hidden
                      className="transition group-hover/title:translate-x-1
                        group-hover/title:-translate-y-1 group-focus-visible/title:translate-x-1
                        group-focus-visible/title:-translate-y-1 motion-reduce:transition-none
                        lg:group-hover:translate-x-1 lg:group-hover:-translate-y-1"
                    />
                  </Link>
                </h3>
                <div
                  className="mt-2 flex flex-col gap-y-2 text-xs md:text-sm lg:text-base"
                >
                  <p className="text-fg-muted">{body}</p>
                  <TimelineSkills id={itemId} skills={skills} />
                </div>
              </article>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
