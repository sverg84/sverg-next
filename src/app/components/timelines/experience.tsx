import type { Item } from "@/app/types/item";

import Skill from "@/app/consts/skill";
import TimelineBase from "./base";

const items: Item[] = [
  {
    body: `Full-stack Web engineer for McDonald's Value Creation Engine.\
    Designed experimental features for marketers to create offers and promotion\
    campaigns for McDonald's restaurants. End-to-end contributions to microservices\
    and React client.`,
    href: "https://corporate.mcdonalds.com/",
    id: "mcd",
    skills: [
      Skill.React,
      Skill.GraphQL,
      Skill.NestJS,
      Skill.AWS,
      Skill.TypeScript,
      Skill.PostgreSQL,
      Skill.Apollo,
      Skill.Emotion,
      Skill.Jest,
      Skill.MaterialUI,
    ],
    time: "2024-Present",
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
    skills: [
      Skill.React,
      Skill.Hack,
      Skill.GraphQL,
      Skill.Relay,
      Skill.MySQL,
      Skill.Jest,
    ],
    time: "2020-2023",
    title: "Software Engineer at Meta Platforms, Inc.",
  },
  {
    body: `Intern for the Traffic Analytics team within the Infrastructure\
    division. Created monitoring tool for team oncall to measure network\
    packet failures with interactive web page.`,
    href: "https://about.meta.com/",
    id: "fb-intern",
    skills: [Skill.Cplusplus, Skill.Python, Skill.Thrift, Skill.MySQL],
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
    skills: [Skill.MATLAB, Skill.Mathematica],
    time: "2016-2017",
    title: "Research Assistant at the University of Michigan",
  },
];

export default function ExperienceTimeline() {
  return <TimelineBase id="experience" items={items} label="Experience" />;
}
