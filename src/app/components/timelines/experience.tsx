import type { Item } from "@/app/types/item";

import TimelineBase from "./base";

const items: Item[] = [
  {
    body: `Design systems engineer on the Coinbase Design System (CDS), shipping shared React and React Native UI across consumer, logged-out, and public surfaces—including cds.coinbase.com. Contributed to the CDS v8 migration toward React 19 and the React Native New Architecture, with emphasis on performance, accessibility, and Linaria-based styling. Built data-visualization and motion patterns for financial dashboards and raised quality with Storybook, Percy, and E2E tests alongside daily design partnership in Figma. Coinbase was my first role with sustained agentic delivery: personal agents for bugs and small tasks, planning feature implementations and delegating testing to subagents, and Cursor Skills so designers could prototype CDS in AI without needing to know how to write in React.`,
    href: "https://cds.coinbase.com/",
    id: "coinbase",
    skills: [
      "Cursor",
      "Claude",
      "React",
      "React Native",
      "Figma",
      "Storybook",
      "Framer Motion",
      "react-native-reanimated",
      "Percy",
      "Maestro",
      "Figma Make",
      "v0",
      "Lottie",
      "TypeScript",
      "Jest",
      "GitHub Actions",
    ],
    time: "2025-2026",
    title: "Software Engineer (Design Systems) at Coinbase",
  },
  {
    body: `Full-stack engineer on a configuration platform powering global deal engines for McDonald's kiosk and mobile apps across Europe—multi-device, high-volume consumer touchpoints. Designed GraphQL resolver APIs and optimized Apollo Client caching, cutting deal-management response times about 75% and client memory usage about 99% on key endpoints. Shipped WCAG 2.1–aligned React operational UI with strong keyboard and focus patterns, and raised deployment reliability about 25% with Cypress E2E plus merge-blocking React Testing Library and Jest in GitHub Actions.`,
    href: "https://corporate.mcdonalds.com/",
    id: "mcd",
    skills: [
      "React",
      "GraphQL",
      "NestJS",
      "AWS",
      "TypeScript",
      "PostgreSQL",
      "Apollo",
      "Emotion",
      "Jest",
      "Material UI",
      "Cypress",
      "React Testing Library",
      "GitHub Actions",
      "WCAG 2.1",
    ],
    time: "2024-2025",
    title: "Software Engineer II at McDonald's Corporation",
  },
  {
    body: `Full-stack Web product software engineer for the\
    Org Effectiveness team within the Enterprise Engineering division.\
    Released multiple high-priority stakeholder feature requests\
    pertaining to HR-sensitive employee data. Leader of team app\
    performance optimization opportunities.`,
    href: "https://about.meta.com/",
    id: "meta-swe",
    skills: ["React", "Hack", "GraphQL", "Relay", "MySQL", "Jest"],
    time: "2020-2023",
    title: "Software Engineer at Meta Platforms, Inc.",
  },
  {
    body: `Intern for the Traffic Analytics team within the Infrastructure\
    division. Created monitoring tool for team oncall to measure network\
    packet failures with interactive web page.`,
    href: "https://about.meta.com/",
    id: "fb-intern",
    skills: ["C++", "Python", "Thrift", "MySQL"],
    time: "Summer 2019",
    title: "Software Engineer Intern at Facebook",
  },
  {
    body: "Assistant at the university's Transportation Research Institute as\
        part of the Undergraduate Research Opportunity Program. Conducted an\
        anthropometric study for Defence Research & Development Canada\
        (DRDC). Analyzed/visualized the change in posture for 3-D scans of\
        military personnel with respect to varying levels of uniform\
        encumbrance.",
    href: "https://umtri.umich.edu",
    id: "umich-urop",
    skills: ["MATLAB", "Wolfram Mathematica"],
    time: "2016-2017",
    title: "Research Assistant at the University of Michigan",
  },
];

export default function ExperienceTimeline() {
  return <TimelineBase id="experience" items={items} label="Experience" />;
}
