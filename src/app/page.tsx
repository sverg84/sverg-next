import Hero from "./components/hero";
import AboutMeBody from "./components/about/about";
import ExperienceTimeline from "./components/timelines/experience";
import Projects from "./components/timelines/projects";

export default function Home() {
  return (
    <>
      <Hero />
      <main className="flex min-h-screen flex-col items-center gap-y-24 p-8 md:p-24 2xl:min-h-fit">
        <AboutMeBody />
        <ExperienceTimeline />
        <Projects />
      </main>
    </>
  );
}
