"use client";

import { NavbarLink } from "flowbite-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const HOME = "#home";

const links = [
  { href: HOME, label: "Home" },
  { href: "#about", label: "About" },
  { href: "https://sverg84.github.io", label: "v1 (GitHub Pages)" },
  { href: "https://sverg84.com", label: "v2 (Remix + AWS)" },
];

export default function NavLinks() {
  const [isClient, setIsClient] = useState(false);
  const [activeHref, setActiveHref] = useState(HOME);

  const onClick = (href: string) => {
    if (href[0] !== "#") {
      return;
    }
    setActiveHref(href);
  };

  useEffect(() => {
    const hash = window.location.hash.length > 0 ? window.location.hash : HOME;

    document.querySelector(hash)?.scrollIntoView(true);

    setActiveHref(hash);
    setIsClient(true);
  }, []);

  return (
    <>
      {links.map(({ href, label }) => (
        <NavbarLink
          active={(isClient ? activeHref : HOME) === href}
          as={Link}
          className="scroll-smooth"
          href={href}
          key={label}
          onClick={() => onClick(href)}
        >
          {label}
        </NavbarLink>
      ))}
    </>
  );
}
