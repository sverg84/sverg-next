import type { Item } from "@/app/types/item";

import TimelineBase from "./base";

const items: Item[] = [
  {
    body: "Small app that presents a user's computer keyboard\
      as a virtual piano keyboard, built with a GUI and audio playback\
      using the Simple and Fast Multimedia Library (SFML).",
    id: "piano",
    skills: ["C++", "SFML"],
    title: 'Simple "Keyboard" Piano',
  },
  {
    body: "FastAPI application + Chrome Web extensions that generates\
    a shortened version of the current tab URL on right-click using\
    Chrome's context menus and notifications, and redirects user from\
    shortened link to original URL when entered in the address bar.",
    id: "url",
    skills: ["Python", "PostgreSQL", "Chrome Extensions"],
    title: "URL Shortener",
  },
  {
    body: "Static single-page application with user-determined color\
    schemes and supported with unit and end-to-end testing.",
    id: "v1",
    skills: ["React", "TypeScript", "SCSS", "Bootstrap", "Jest", "Puppeteer"],
    title: "v1 (GitHub Pages)",
  },
  {
    body: "First server-side-rendered web application with data fetched\
    via AWS Lambda and DynamoDB and assets saved in S3 and CloudFront.",
    id: "v2",
    skills: ["Remix", "Node.js", "Mantine", "Vanilla Extract", "AWS", "SST"],
    title: "v2 (Remix + AWS)",
  },
  {
    body: "Optimum performance and accessibility, built with Next.js and TailwindCSS.",
    id: "v3",
    skills: ["Next.js", "TailwindCSS", "Flowbite", "Vercel"],
    title: "v3",
  },
];

export default function Projects() {
  return (
    <TimelineBase
      contentTheme={{ root: { base: "mt-3 sm:pl-8" } }}
      id="projects"
      items={items}
      itemTheme={{ root: { vertical: "mb-10 mr-3 md:mr-6" } }}
      label="Projects"
      rightAlign={true}
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
