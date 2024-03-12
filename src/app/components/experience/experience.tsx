import {
  Timeline,
  TimelineBody,
  TimelineContent,
  TimelineItem,
  TimelineTime,
  TimelineTitle,
  Tooltip,
} from "flowbite-react";
import Point from "./point";

type Item = Readonly<{
  body: React.ReactNode;
  id: string;
  time: string;
  title: string;
}>;

const items: Item[] = [
  {
    body: (
      <>
        Assistant at the university&apos;s Transportation Research Institute as
        part of the Undergraduate Research Opportunity Program (UROP).
        Participated in
        <Tooltip
          content={
            "of or relating to the scientific study of the " +
            "measurements and proportions of the human body"
          }
          theme={{ target: "inline-block" }}
        >
          anthropometric
        </Tooltip>
        &nbsp;study for Defence Research &amp; Development Canada (DRDC).
      </>
    ),
    id: "umich-urop",
    time: "2016-2017",
    title: "Research Assistant at the University of Michigan",
  },
  {
    body: `Intern for the Traffic Analytics team within the Infrastructure\
          division. Created monitoring tool for team oncall to measure network\
          packet failures with interactive web page.`,
    id: "fb-intern",
    time: "Summer 2019",
    title: "Software Engineer Intern at Facebook",
  },
  {
    body: `Full-stack product software engineer (PHP/Hack and JS/React) for the\
          Org Effectiveness team within the Enterprise Engineering division.\
          Released multiple high-priority stakeholder feature requests\
          pertaining to HR-sensitive employee data. Leader of team app\
          performance optimization opportunities.`,
    id: "meta-swe",
    time: "2020-2023",
    title: "Software Engineer at Meta Platforms, Inc.",
  },
];

export default function ExperienceTimeline() {
  return (
    <section className="body-section flex flex-col" id="experience">
      <h2 className="section-header">Experience</h2>
      <Timeline>
        {items.map(({ body, id, time, title }) => {
          return (
            <TimelineItem key={id}>
              <Point iconId={id} />
              <TimelineContent>
                <TimelineTime>{time}</TimelineTime>
                <TimelineTitle>{title}</TimelineTitle>
                <TimelineBody>{body}</TimelineBody>
              </TimelineContent>
            </TimelineItem>
          );
        })}
      </Timeline>
    </section>
  );
}
