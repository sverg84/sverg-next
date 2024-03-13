"use client";

import { NavbarLink } from "flowbite-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const HOME = "#home";

const links = [
  { href: HOME, label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
];

export default function NavLinks() {
  const [isClient, setIsClient] = useState(false);
  const [activeHref, setActiveHref] = useState(HOME);

  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const hash = window.location.hash;

    if (hash.length > 0) {
      document.querySelector(hash)?.scrollIntoView(true);
      setActiveHref(hash);
    }

    setIsClient(true);

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveHref(`#${entry.target.id}`);
        }
      },
      { threshold: 0.8, root: document },
    );

    Array.from(document.querySelectorAll("section")).forEach((section) => {
      observerRef.current?.observe(section);
    });

    return () => {
      observerRef.current?.disconnect();
    };
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
        >
          {label}
        </NavbarLink>
      ))}
    </>
  );
}
