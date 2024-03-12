"use client";

import { NavbarLink } from "flowbite-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const HOME = "#home";

const links = [
  { href: HOME, label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
];

export default function NavLinks() {
  const [isClient, setIsClient] = useState(false);
  const [activeHref, setActiveHref] = useState(HOME);

  const onClick = (href: string) => {
    setActiveHref(href);
  };

  useEffect(() => {
    const hash = window.location.hash;

    if (hash.length > 0) {
      document.querySelector(hash)?.scrollIntoView(true);
      setActiveHref(hash);
    }

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
