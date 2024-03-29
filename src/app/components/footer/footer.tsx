import type { IconType } from "react-icons";
import {
  Footer,
  FooterDivider,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import { SiAlltrails, SiLetterboxd } from "react-icons/si";
import Link from "next/link";
import { Suspense } from "react";
import LatestPushTime from "./pushtime";

type IconLinkProps = Readonly<{ href: string; Icon: IconType; label: string }>;
type TechLinkProps = Readonly<{
  href: string;
  label: string;
  leadingText: string;
}>;

const icons = [
  {
    href: "https://letterboxd.com/sverg/",
    Icon: SiLetterboxd,
    label: "Letterboxd",
  },
  {
    href: "https://www.alltrails.com/members/stephen-vergara",
    Icon: SiAlltrails,
    label: "AllTrails",
  },
  {
    href: "https://www.facebook.com/stephen.vergara.0",
    Icon: BsFacebook,
    label: "Facebook",
  },
  {
    href: "https://www.linkedin.com/in/stephen-vergara-2bab8614b/",
    Icon: BsLinkedin,
    label: "LinkedIn",
  },
  { href: "https://github.com/sverg84", Icon: BsGithub, label: "GitHub" },
];

const tech = [
  { href: "https://nextjs.org/", label: "Next.js", leadingText: "Powered by" },
  {
    href: "https://tailwindcss.com/",
    label: "Tailwind",
    leadingText: "Styled with",
  },
  { href: "https://flowbite.com/", label: "Flowbite", leadingText: "Built on" },
  { href: "https://vercel.com/", label: "Vercel", leadingText: "Deployed to" },
];

const versions = [
  ["https://sverg84.github.io", "v1 (GitHub Pages)"],
  ["https://sverg84.com", "v2 (Remix + AWS)"],
];

function IconLink({ href, Icon, label }: IconLinkProps) {
  return (
    <a
      aria-label={`${label} (opens in a new tab)`}
      className="link text-gray-500"
      href={href}
      target="_blank"
    >
      <Icon size={20} />
    </a>
  );
}

function TechLink({ href, label, leadingText }: TechLinkProps) {
  return (
    <span className="text-center">
      {leadingText}&nbsp;
      <Link
        aria-label={label}
        className="link block font-semibold 2xs:inline-block"
        href={href}
        target="_blank"
      >
        {label}
      </Link>
    </span>
  );
}

export default function AppFooter() {
  return (
    <Footer className="rounded-none" container>
      <div className="w-full">
        <div className="grid w-full gap-y-8 sm:flex sm:justify-around sm:gap-y-0 md:flex md:grid-cols-1">
          <div className="grid grid-cols-2 items-center justify-items-center gap-8 text-sm">
            {tech.map((item) => (
              <TechLink key={item.label} {...item} />
            ))}
          </div>
          <div className="justify-self-center text-center sm:text-start">
            <FooterTitle title="Older versions" />
            <FooterLinkGroup col>
              {versions.map(([href, label]) => (
                <li key={label}>
                  <Link className="link" href={href}>
                    {label}
                  </Link>
                </li>
              ))}
            </FooterLinkGroup>
          </div>
        </div>
        <FooterDivider />
        <div
          className="flex w-full flex-col items-center gap-y-4 xs:flex-row xs:justify-between
            xs:gap-y-0"
        >
          <Suspense fallback={<div />}>
            <LatestPushTime />
          </Suspense>
          <div className="flex space-x-6">
            {icons.map((item) => (
              <IconLink key={item.label} {...item} />
            ))}
          </div>
        </div>
      </div>
    </Footer>
  );
}
