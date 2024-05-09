import type { Item } from "@/app/types/item";

import Skill from "@/app/consts/skill";
import TimelineBase from "./base";

const items: Item[] = [
  {
    body: "Small app that presents a user's computer keyboard\
      as a virtual piano keyboard, built with a GUI and audio playback\
      using the Simple and Fast Multimedia Library (SFML).",
    href: "https://github.com/sverg84/cpp_piano",
    id: "piano",
    skills: [Skill.Cplusplus, Skill.SFML],
    title: 'Simple "Keyboard" Piano',
  },
  {
    body: "FastAPI application + Chrome Web extension that generates\
    a shortened version of the current tab URL on right-click using\
    Chrome's context menus and notifications, and redirects user from\
    shortened link to original URL when entered in the address bar.",
    href: "https://github.com/sverg84/url-shortener",
    id: "url",
    skills: [Skill.Python, Skill.PostgreSQL, Skill.ChromeX],
    title: "URL Shortener",
  },
  {
    body: "Static single-page application with user-determined color\
    schemes and supported with unit and end-to-end testing.",
    href: "https://sverg84.github.io",
    id: "v1",
    skills: [
      Skill.React,
      Skill.TypeScript,
      Skill.SCSS,
      Skill.Bootstrap,
      Skill.Jest,
      Skill.Puppeteer,
    ],
    title: "v1 (GitHub Pages)",
  },
  {
    body: "First server-side-rendered web application with data fetched\
    via AWS Lambda and DynamoDB and assets saved in S3 and CloudFront.",
    href: "https://sverg84.com",
    id: "v2",
    skills: [
      Skill.Remix,
      Skill.Node,
      Skill.Mantine,
      Skill.VanillaExtract,
      Skill.AWS,
      Skill.SST,
    ],
    title: "v2 (Remix + AWS)",
  },
  {
    body: "Optimum performance and accessibility, built with Next.js and TailwindCSS.",
    href: "/",
    id: "v3",
    skills: [Skill.NextJS, Skill.TailwindCSS, Skill.Flowbite, Skill.Vercel],
    title: "v3",
  },
];

export default function Projects() {
  return <TimelineBase id="projects" items={items} label="Projects" />;
}
