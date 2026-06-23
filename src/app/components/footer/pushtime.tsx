import { connection } from "next/server";
import TooltipTime from "./tooltip-time";

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

async function genData(): Promise<number> {
  const response = await fetch(
    "https://api.vercel.com/v6/deployments?projectId=prj_HzWmHLDRCGAhszqyOsLvWkq2pFGg&target=production&state=READY&limit=1",
    {
      headers: {
        Authorization: `Bearer ${process.env.VERCEL_API_TOKEN}`,
      },
      next: { revalidate: 10 },
    },
  );

  const data: { deployments?: ReadonlyArray<{ ready?: number }> } =
    await response.json();
  const ready = data.deployments?.[0]?.ready;
  if (typeof ready !== "number") {
    return Date.now();
  }
  return ready;
}

export default async function LatestPushTime() {
  await connection();
  const ready = await genData();
  const pushTimeAsDate = new Date(ready);
  const timeSinceLastPush = pushTimeAsDate.getTime() - new Date().getTime();
  return (
    <div className="flex gap-x-2 text-xs xs:text-sm">
      Latest update:
      <TooltipTime date={pushTimeAsDate}>
        {relativeTimeFromElapsed(timeSinceLastPush)}
      </TooltipTime>
    </div>
  );
}

export const runtime = "edge";
