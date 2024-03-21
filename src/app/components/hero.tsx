import { Tooltip } from "flowbite-react";
import MyName from "../consts/name";
import GitHubButton from "./buttons/github";
import LinkedInButton from "./buttons/linkedin";
import ResumeButton from "./buttons/resume";
import EmailButton from "./buttons/email";
import Image from "next/image";

import cove from "../../../public/point_lobos.webp";

const LABEL =
  "Cypress Cove at Point Lobos State Natural Reserve, Carmel-by-the-Sea, California";

export default function Hero() {
  return (
    <section
      className="relative flex h-[calc(100vh-3.75rem)] items-center bg-hero bg-cover bg-center"
      id="home"
    >
      <Image
        alt={LABEL}
        className="z-[-1] object-cover"
        src={cove}
        fill={true}
        priority={true}
        sizes="100vw"
      />
      <div className="flex w-full flex-row justify-center xs:mx-8 xs:justify-start">
        <div className="flex max-h-fit flex-col gap-y-10 sm:mr-24">
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
            Ex-Meta Web developer with a knack for building accessible,
            mobile-first user experiences. Aspiring user experience designer
            with an eagerness to learn!
          </p>

          <div className="w-sm flex gap-x-4 self-center">
            <ResumeButton />
            <GitHubButton />
            <LinkedInButton />
            <EmailButton />
          </div>
        </div>
      </div>
      <Tooltip
        className="w-60 text-center"
        content={LABEL}
        placement="top"
        theme={{ target: "absolute bottom-8 right-8" }}
      >
        <p className="xs:text-md text-sm text-white underline decoration-dotted">
          Picture taken by {MyName}
        </p>
      </Tooltip>
    </section>
  );
}
