import type { IconType } from "react-icons";
import { Footer } from "flowbite-react";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import { SiAlltrails, SiLetterboxd } from "react-icons/si";
import { Suspense } from "react";
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
      className="link inline-flex rounded-sm text-gray-600 outline-none hover:text-cyan-700
        focus-visible:text-cyan-700 focus-visible:ring-2 focus-visible:ring-cyan-700
        focus-visible:ring-offset-1 focus-visible:ring-offset-[var(--color-page-bg)]
        focus-visible:outline-none dark:text-gray-300 dark:hover:text-emerald-300
        dark:focus-visible:text-emerald-300 dark:focus-visible:ring-emerald-400
        dark:focus-visible:ring-offset-[var(--color-page-bg)]"
      href={href}
      target="_blank"
    >
      <Icon size={20} />
    </a>
  );
}

export default function AppFooter() {
  return (
    <Footer
      className="rounded-none border-t border-page-border bg-page-bg"
      container
    >
      <Suspense fallback={<div />}>
        <LatestPushTime />
      </Suspense>
      <div className="flex space-x-6">
        {icons.map((item) => (
          <IconLink key={item.label} {...item} />
        ))}
      </div>
    </Footer>
  );
}
// flex w-full flex-col items-center gap-y-4 xs:flex-row xs:justify-between xs:gap-y-0
