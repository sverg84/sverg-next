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

export default function TimelineBase({ id, items, label }: Props) {
  const headingId = `${id}-heading`;

  return (
    <section
      aria-labelledby={headingId}
      className="body-section flex flex-col 2xl:w-full 2xl:items-start"
      id={id}
    >
      <h2 className="section-header lg:self-start" id={headingId}>
        {label}
      </h2>
      <ol
        className="group/timeline relative max-w-full border-s border-border ps-6 md:ps-8"
      >
        {items.map(({ body, href, id: itemId, skills, time, title }) => (
          <li
            className="group relative mb-5 transition-all last:mb-0 md:mb-10"
            key={itemId}
          >
            <article
              className={cn(
                `timeline-card relative lg:group-hover/timeline:opacity-50
                lg:hover:opacity-100! lg:group-hover:shadow-[inset_0_1px_1px_rgba(148,163,184,0.1)]
                transition motion-reduce:transition-none lg:rounded-lg lg:p-3
                lg:hover:bg-surface-hover`,
              )}
            >
              <Point iconId={itemId} />
              {time && (
                <time
                  className="text-xs text-fg-muted md:text-sm"
                  dateTime={parseDatetime(time)}
                >
                  {time}
                </time>
              )}
              <h3 className="text-sm font-semibold md:text-base lg:text-lg">
                <Link
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
                  <span className="sr-only">(opens in new tab)</span>
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
        ))}
      </ol>
    </section>
  );
}
