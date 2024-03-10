import { NextResponse } from "next/server";

export const revalidate = 10;
export const runtime = "edge";

export async function GET() {
  const response = await fetch(
    "https://api.vercel.com/v6/deployments?projectId=prj_HzWmHLDRCGAhszqyOsLvWkq2pFGg&target=production&state=READY&limit=1",
    {
      headers: {
        Authorization: `Bearer ${process.env.VERCEL_API_TOKEN}`,
      },
    },
  );

  const {
    deployments: [{ ready }],
  } = await response.json();

  return NextResponse.json(ready);
}
