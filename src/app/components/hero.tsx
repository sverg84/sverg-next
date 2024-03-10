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
    <div className="flex h-[calc(100vh-3.75rem)] w-screen items-center bg-hero bg-cover bg-center">
      <Image
        alt={LABEL}
        className="z-[-1]"
        fill={true}
        priority={true}
        src={cove}
      />
      <div className="mx-8 flex flex-row justify-between sm:flex-col">
        <div className="flex flex-col gap-y-10 sm:mr-24">
          <h1
            className="max-w-full text-[2.125rem] font-extrabold text-white sm:max-w-lg
              sm:text-5xl/[3.5rem]"
          >
            Hi! I&apos;m Stephen, a <span>UI/UX Engineer</span>.
          </h1>

          <p className="max-w-full text-white opacity-75 sm:max-w-lg">
            Ex-Meta Web developer with a knack for building accessible,
            mobile-first user experiences. Aspiring user experience designer
            with an eagerness to learn!
          </p>

          <div className="flex w-full gap-x-4 px-12 sm:w-auto">
            <ResumeButton />
            <GitHubButton />
            <LinkedInButton />
            <EmailButton />
          </div>
          <div className="self-center">
            <Tooltip
              className="w-60 text-center"
              content={LABEL}
              placement="bottom"
            >
              <p className="text-white underline decoration-dotted">
                Picture taken by {MyName}
              </p>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
}
