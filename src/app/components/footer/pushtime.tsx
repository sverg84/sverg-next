import { Tooltip } from "flowbite-react";

// https://stackoverflow.com/questions/6108819/javascript-timestamp-to-relative-time
const RTF = new Intl.RelativeTimeFormat(undefined, { numeric: "auto" });

const UNITS: ReadonlyArray<{ unit: Intl.RelativeTimeFormatUnit; ms: number }> =
  [
    { ms: 31536000000, unit: "year" },
    { ms: 2628000000, unit: "month" },
    { ms: 86400000, unit: "day" },
    { ms: 3600000, unit: "hour" },
    { ms: 60000, unit: "minute" },
    { ms: 1000, unit: "second" },
  ];

function relativeTimeFromElapsed(elapsed: number): string {
  for (const { unit, ms } of UNITS) {
    if (Math.abs(elapsed) >= ms || unit === "second") {
      return RTF.format(Math.round(elapsed / ms), unit);
    }
  }
  return "";
}

async function genData(): Promise<string> {
  // TODO: Replace with info about sverg-next repo + change to Vercel function if possible
  const response = await fetch(
    "https://2wxny1ysq9.execute-api.us-east-2.amazonaws.com/default",
  );
  return await response.json();
}

export default async function LatestPushTime() {
  const pushTime = await genData();

  const pushTimeAsDate = new Date(pushTime);
  const timeSinceLastPush = pushTimeAsDate.getTime() - new Date().getTime();
  return (
    <div className="flex gap-x-2">
      Latest update:
      <Tooltip content={pushTimeAsDate.toLocaleString()}>
        <time className="underline decoration-dotted">
          {relativeTimeFromElapsed(timeSinceLastPush)}
        </time>
      </Tooltip>
    </div>
  );
}
