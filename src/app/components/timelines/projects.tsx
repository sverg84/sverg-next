import type { Item } from "@/app/types/item";

import TimelineBase from "./base";

const items: Item[] = [
  {
    body: "Small app that presents a user's computer keyboard\
      as a virtual piano keyboard, built with a GUI and audio playback\
      using the Simple and Fast Multimedia Library (SFML).",
    href: "https://github.com/sverg84/cpp_piano",
    id: "piano",
    skills: ["C++", "SFML"],
    title: 'Simple "Keyboard" Piano',
  },
  {
    body: "FastAPI application + Chrome Web extensions that generates\
    a shortened version of the current tab URL on right-click using\
    Chrome's context menus and notifications, and redirects user from\
    shortened link to original URL when entered in the address bar.",
    href: "https://github.com/sverg84/url-shortener",
    id: "url",
    skills: ["Python", "PostgreSQL", "Chrome Extensions"],
    title: "URL Shortener",
  },
  {
    body: "Static single-page application with user-determined color\
    schemes and supported with unit and end-to-end testing.",
    href: "https://sverg84.github.io",
    id: "v1",
    skills: ["React", "TypeScript", "SCSS", "Bootstrap", "Jest", "Puppeteer"],
    title: "v1 (GitHub Pages)",
  },
  {
    body: "First server-side-rendered web application with data fetched\
    via AWS Lambda and DynamoDB and assets saved in S3 and CloudFront.",
    href: "https://sverg84.com",
    id: "v2",
    skills: ["Remix", "Node.js", "Mantine", "Vanilla Extract", "AWS", "SST"],
    title: "v2 (Remix + AWS)",
  },
  {
    body: "Optimum performance and accessibility, built with Next.js and TailwindCSS.",
    href: "/",
    id: "v3",
    skills: ["Next.js", "TailwindCSS", "Flowbite", "Vercel"],
    title: "v3",
  },
];

export default function Projects() {
  return <TimelineBase id="projects" items={items} label="Projects" />;
}
