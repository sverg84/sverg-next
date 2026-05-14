import GitHubButton from "../buttons/github";
import LinkedInButton from "../buttons/linkedin";
import ResumeButton from "../buttons/resume";
import EmailButton from "../buttons/email";
import HeroBackdrop from "./hero-backdrop";

export default function Hero() {
  return (
    <section
      className="relative h-[calc(100vh-3.75rem)] w-full max-w-[100vw] overflow-hidden
        overflow-x-clip"
      id="home"
    >
      <HeroBackdrop />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] bg-hero lg:bg-hero-lg"
      />
      <div className="relative z-10 flex h-full flex-col justify-center gap-y-10 xs:mx-8 sm:mr-24">
        <div className="flex flex-col gap-y-10 place-self-center md:self-start">
          <h1
            className="max-w-sm text-center text-xl font-extrabold text-slate-900 xs:max-w-lg
              xs:text-start xs:text-[2.125rem] sm:text-5xl/[3.5rem] dark:text-white"
          >
            Hi! I&apos;m Stephen, a{" "}
            <span className="text-cyan-800 dark:text-emerald-200">
              senior frontend engineer
            </span>
            .
          </h1>
          <p
            className="xs:text-md max-w-sm text-center text-sm text-slate-600 xs:text-start sm:max-w-lg
              dark:text-slate-200"
          >
            Senior frontend engineer (TypeScript, React, React Native) shipping
            accessible, performant interfaces—and the patterns, docs, and tests
            that help teams move fast without breaking quality. I work tightly
            with design from Figma through prototyping, and I use AI/agent
            workflows (including team agent skills) to tighten iteration and
            coverage.
          </p>
          <div className="flex gap-x-4 self-center">
            <ResumeButton />
            <GitHubButton />
            <LinkedInButton />
            <EmailButton />
          </div>
        </div>
      </div>
    </section>
  );
}
