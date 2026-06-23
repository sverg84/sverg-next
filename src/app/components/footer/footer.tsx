import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import { SiAlltrails, SiLetterboxd } from "react-icons/si";
import { Suspense } from "react";
import type { IconType } from "react-icons";
import LatestPushTime from "./pushtime";

type IconLinkProps = Readonly<{ href: string; Icon: IconType; label: string }>;

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

function IconLink({ href, Icon, label }: IconLinkProps) {
  return (
    <a
      aria-label={`${label} (opens in a new tab)`}
      className="focus-ring inline-flex rounded-sm text-fg-subtle transition-colors
        hover:text-brand focus-visible:text-brand"
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      <Icon aria-hidden className="size-5 text-current" />
    </a>
  );
}

export default function AppFooter() {
  return (
    <footer
      className="w-full rounded-none border-t border-border bg-page-bg"
    >
      <div
        className="flex w-full flex-col items-center gap-y-4 p-6 xs:flex-row xs:justify-between
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
    </footer>
  );
}
