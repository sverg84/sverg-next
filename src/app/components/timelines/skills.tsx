import TimelineBadge from "./badge";
import { Tooltip } from "flowbite-react";

type Props = Readonly<{
  id: string;
  skills: ReadonlyArray<string>;
}>;

const MAX_BADGES = 10;

export default function TimelineSkills({ id, skills }: Props) {
  const skillsFirstSlice = skills.slice(
    0,
    skills.length > MAX_BADGES ? MAX_BADGES - 1 : MAX_BADGES,
  );
  return (
    <div className="flex flex-wrap gap-x-4 gap-y-2">
      {skillsFirstSlice.map((skill) => (
        <TimelineBadge label={skill} key={`${id}-${skill}`} />
      ))}
      {skills.length > MAX_BADGES &&
        skills
          .slice(MAX_BADGES - 1)
          .map((skill) => (
            <TimelineBadge
              className="hidden lg:block"
              label={skill}
              key={`${id}-${skill}`}
            />
          ))}
      {skills.length > MAX_BADGES && (
        <Tooltip
          className="text-center lg:hidden"
          // Local only: `lg:hidden` target would break default tooltips if applied globally.
          content={
            <div className="flex flex-col">
              {skills.slice(MAX_BADGES - 1).map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          }
          placement="bottom"
          theme={{ target: "lg:hidden" }}
        >
          <TimelineBadge
            className="lg:hidden"
            label={`+${skills.length - MAX_BADGES + 1}`}
          />
        </Tooltip>
      )}
    </div>
  );
}
