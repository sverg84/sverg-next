import GitHubButton from "./buttons/github";
import LinkedInButton from "./buttons/linkedin";
import ResumeButton from "./buttons/resume";
import EmailButton from "./buttons/email";
import { getImageProps } from "next/image";

export default function Hero() {
  const common = {
    alt: "Background image for hero section",
    fill: true,
    priority: true,
  };

  const {
    props: { srcSet: lg, ...rest },
  } = getImageProps({
    ...common,
    src: "/point_lobos.webp",
  });

  const {
    props: { srcSet: md },
  } = getImageProps({
    ...common,
    src: "/redwoods_landscape.webp",
  });

  const {
    props: { srcSet: sm },
  } = getImageProps({
    ...common,
    src: "/mountsi.webp",
  });

  return (
    <section
      className="lg:bg-hero-lg relative h-[calc(100vh-3.75rem)] w-screen bg-hero"
      id="home"
    >
      <div>
        <picture>
          <source media="(min-width: 1024px)" srcSet={lg} />
          <source media="(min-width: 640px)" srcSet={md} />
          <source media="(max-width: 640px)" srcSet={sm} />
          <img
            {...rest}
            className="lg:bg-hero-lg z-[-1] bg-hero bg-cover bg-center"
          />
        </picture>
      </div>
      <div className="flex h-full flex-col justify-center gap-y-10 xs:mx-8 sm:mr-24">
        <div className="flex flex-col gap-y-10 place-self-center md:self-start">
          <h1
            className="max-w-sm text-center text-xl font-extrabold text-white xs:max-w-lg xs:text-start
              xs:text-[2.125rem] sm:text-5xl/[3.5rem]"
          >
            Hi! I&apos;m Stephen, a{" "}
            <span className="text-cyan-700 dark:text-emerald-300">
              UI/UX Engineer
            </span>
            .
          </h1>
          <p
            className="xs:text-md max-w-sm text-center text-sm text-white opacity-75 xs:text-start
              sm:max-w-lg"
          >
            Full-stack Web developer with a knack for building accessible,
            mobile-first user experiences. Experienced in Next.js and NestJS for
            creating web apps built on all things TypeScript. Aspiring user
            experience designer with a never-ending eagerness to learn!
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
