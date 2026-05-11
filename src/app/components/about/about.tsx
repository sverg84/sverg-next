import Image from "next/image";

import sverg from "../../../../public/sverg.webp";
import MyName from "@/app/consts/name";
import Utapau from "./utapau";
import Link from "next/link";

export default function AboutMeBody() {
  return (
    <section
      className="body-section grid justify-items-center lg:grid-cols-2"
      id="about"
    >
      <h2 className="section-header lg:col-start-2 lg:justify-self-center">
        About
      </h2>
      <Image
        alt={`${MyName} in the tulip field`}
        className="rounded-full"
        priority={true}
        src={sverg}
      />
      <div className="flex flex-col gap-y-4 text-center lg:text-right">
        <Utapau />
        <p>
          My first time programming was when my high school introduced me to
          Scratch during an annual{" "}
          <Link
            className="link font-bold"
            href="https://hourofcode.com/us"
            target="_blank"
          >
            Hour of Code
          </Link>{" "}
          back in 2012. Not long after, I took a course in Java and the rest was
          history! Since then, I&apos;ve made a horde-style brawler game in
          Unity for my capstone, graduated with a Bachelor&apos;s of Science in
          Computer Science, and worked for three (3) years as a Web software
          engineer at Meta.
        </p>
        <p>
          I started as a backend programmer, learning Java, C++, Python, and C#
          in school. Entering the workforce, I pivoted to Web development, and I
          love fiddling with web technologies and transforming them into user
          experiences.
        </p>
        <p>
          After learning React and GraphQL at Meta, I self-taught TypeScript,
          Amazon Web Services (AWS), server-side rendering, and many different
          styling methods.
        </p>
        <p>
          After Meta, I was a full-stack web engineer at McDonald&apos;s
          Corporation from May 2024 through October 2025, working on a
          configuration platform and global deal engines for kiosk and mobile
          experiences in Europe—GraphQL, Apollo, NestJS, and React on
          high-volume consumer surfaces. I then joined Coinbase as a software
          engineer on the design systems team (CDS), contributing shared React
          and React Native UI across consumer, logged-out, and public surfaces
          through May 2026.
        </p>
        <p>
          When I&apos;m not coding, however, I love kayaking, hiking, singing
          karaoke, and playing video games! I am very into science fiction and
          fantasy, and love a good happy hour and{" "}
          <Link
            className="link font-bold"
            href="https://www.dndbeyond.com"
            target="_blank"
          >
            DnD
          </Link>{" "}
          session.
        </p>
      </div>
    </section>
  );
}
