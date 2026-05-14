import Hero from "./components/hero/hero";
import AboutMeBody from "./components/about/about";
import ExperienceTimeline from "./components/timelines/experience";
import Projects from "./components/timelines/projects";

export default function Home() {
  return (
    <>
      <Hero />
      <main
        className="flex min-h-screen flex-col items-center gap-y-24 bg-page-bg p-8 md:p-24
          2xl:min-h-fit"
        id="main"
      >
        <AboutMeBody />
        <ExperienceTimeline />
        <Projects />
      </main>
    </>
  );
}
