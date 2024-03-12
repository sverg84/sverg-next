import Image from "next/image";
import WeatherWidget from "./components/weather";
import { Suspense } from "react";
import Hero from "./components/hero";
import AboutMeBody from "./components/about/about";
import ExperienceTimeline from "./components/experience/experience";

export default function Home() {
  return (
    <>
      <Hero />
      <main className="flex min-h-screen flex-col items-center justify-between gap-y-24 p-24">
        <div id="about">
          <AboutMeBody />
        </div>
        <ExperienceTimeline />
      </main>
      <Suspense>
        <WeatherWidget />
      </Suspense>
    </>
  );
}
