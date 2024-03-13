import type { Item } from "@/app/types/item";

import { Tooltip } from "flowbite-react";
import TimelineBase from "./base";

const items: Item[] = [
  {
    body: (
      <>
        Assistant at the university&apos;s Transportation Research Institute as
        part of the Undergraduate Research Opportunity Program. Conducted an
        anthropometric study for Defence Research &amp; Development Canada
        (DRDC). Analyzed/visualized the change in posture for 3-D scans of
        military personnel with respect to varying levels of uniform
        encumbrance.
      </>
    ),
    href: "https://umtri.umich.edu",
    id: "umich-urop",
    skills: ["MATLAB", "Wolfram Mathematica"],
    time: "2016-2017",
    title: "Research Assistant at the University of Michigan",
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
];

export default function ExperienceTimeline() {
  return <TimelineBase id="experience" items={items} label="Experience" />;
}
