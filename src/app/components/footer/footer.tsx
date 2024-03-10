import type { IconType } from "react-icons";
import {
  Footer,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import { SiLetterboxd } from "react-icons/si";
import Link from "next/link";
import { Suspense } from "react";
import LatestPushTime from "./pushtime";

type IconLinkProps = Readonly<{ href: string; icon: IconType; label: string }>;
type TechLinkProps = Readonly<{
  href: string;
  label: string;
  leadingText: string;
}>;

const icons = [
  {
    href: "https://letterboxd.com/sverg/",
    icon: SiLetterboxd,
    label: "Letterboxd",
  },
  {
    href: "https://www.facebook.com/stephen.vergara.0",
    icon: BsFacebook,
    label: "Facebook",
  },
  {
    href: "https://www.linkedin.com/in/stephen-vergara-2bab8614b/",
    icon: BsLinkedin,
    label: "LinkedIn",
  },
  { href: "https://github.com/sverg84", icon: BsGithub, label: "GitHub" },
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

function IconLink({ href, icon, label }: IconLinkProps) {
  return (
    <FooterIcon
      aria-label={`${label} (opens in a new tab)`}
      href={href}
      icon={icon}
      target="_blank"
    />
  );
}

function TechLink({ href, label, leadingText }: TechLinkProps) {
  return (
    <span>
      {leadingText}&nbsp;
      <Link
        aria-label={label}
        className="font-semibold text-red-800 dark:invert"
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
    <Footer container>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-around md:flex md:grid-cols-1">
          <div className="grid grid-cols-2 items-center justify-items-center gap-8 text-sm">
            {tech.map((item) => (
              <TechLink key={item.label} {...item} />
            ))}
          </div>
          <div>
            <div>
              <FooterTitle title="Older versions" />
              <FooterLinkGroup col>
                <FooterLink href="https://sverg84.github.io/">
                  v1 (GitHub Pages)
                </FooterLink>
                <FooterLink href="https://sverg84.com">
                  v2 (Remix + AWS)
                </FooterLink>
              </FooterLinkGroup>
            </div>
          </div>
        </div>
        <FooterDivider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Suspense fallback={<div />}>
            <LatestPushTime />
          </Suspense>
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            {icons.map((item) => (
              <IconLink key={item.label} {...item} />
            ))}
          </div>
        </div>
      </div>
    </Footer>
  );
}
