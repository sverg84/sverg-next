import Image from "next/image";

import sverg from "../../../../public/sverg.webp";
import MyName from "@/app/consts/name";

function Language({ language }: { language: string }) {
  return (
    <strong className="text-cyan-700 dark:text-emerald-300">{language}</strong>
  );
}

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
        <p>
          I started learning to code during my senior year of high school when I
          took an introduction course to {<Language language="Java" />} on a
          whim, and I loved learning as much as I could since then! Throughout
          my time at university, I applied myself to a substantial amount of
          coursework in {<Language language="C++" />} and&nbsp;
          {<Language language="Python" />} with a splash of&nbsp;
          {<Language language="JavaScript" />}, {<Language language="OCaml" />},
          and {<Language language="C#" />}.
        </p>
        <p>
          All of my full-time experience (as of Summer 2023) stems from my time
          at Meta where I challenged myself further in exploring web
          programming, learning {<Language language="PHP" />} and&nbsp;
          {<Language language="React" />} for the first time in a rigorous,
          fast-paced environment.
        </p>
        <p>
          Since parting with Meta, I have been self-teaching&nbsp;
          {<Language language="TypeScript" />} in order to keep my UI-building
          skills fresh, replete with {<Language language="SCSS" />} modules.
        </p>
      </div>
    </section>
  );
}
