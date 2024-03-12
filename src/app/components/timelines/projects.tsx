import type { Item } from "@/app/types/item";

import TimelineBase from "./base";

const items: Item[] = [
  {
    body: "Eeks",
    id: "piano",
    skills: ["C++", "SFML"],
    title: 'Simple "Keyboard" Piano',
  },
  {
    body: "Eeks",
    id: "url",
    skills: ["Python", "PostgreSQL", "Chrome Extensions"],
    title: "URL Shortener",
  },
  {
    body: "Eeks",
    id: "v1",
    skills: ["React", "TypeScript", "SCSS", "Bootstrap", "Jest", "Puppeteer"],
    title: "v1",
  },
  {
    body: "Eeks",
    id: "v2",
    skills: ["Remix", "Node.js", "Mantine", "Vanilla Extract", "AWS", "SST"],
    title: "v2",
  },
  {
    body: "Eeks",
    id: "v3",
    skills: ["Next.js", "TailwindCSS", "Flowbite", "Vercel"],
    title: "v3",
  },
];

export default function Projects() {
  return (
    <TimelineBase
      contentTheme={{ root: { base: "mt-3 sm:pl-8" } }}
      direction="right"
      id="projects"
      items={items}
      itemTheme={{ root: { vertical: "mb-10 mr-6" } }}
      label="Projects"
      timelineTheme={{
        root: {
          direction: {
            vertical: "relative border-r border-gray-200 dark:border-gray-700",
          },
        },
      }}
    />
  );
}
