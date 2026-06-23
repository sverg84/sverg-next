"use client";

import Link from "next/link";
import { startTransition, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const HOME = "#home";

const links = [
  { href: HOME, label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
];

type Props = Readonly<{
  mobile?: boolean;
}>;

export default function NavLinks({ mobile = false }: Props) {
  const [isClient, setIsClient] = useState(false);
  const [activeHref, setActiveHref] = useState(HOME);

  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const hash = window.location.hash;

    if (hash.length > 0) {
      document.querySelector(hash)?.scrollIntoView(true);
      startTransition(() => {
        setActiveHref(hash);
      });
    }

    startTransition(() => {
      setIsClient(true);
    });

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveHref(`#${entry.target.id}`);
        }
      },
      {
        root: null,
        rootMargin: "-12% 0px -28% 0px",
        threshold: 0.55,
      },
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
      {links.map(({ href, label }) => {
        const active = (isClient ? activeHref : HOME) === href;
        return (
          <Link
            aria-current={active ? "page" : undefined}
            className={cn(
              "focus-ring scroll-smooth rounded-lg px-3 py-2 text-sm font-medium transition-colors motion-reduce:transition-none",
              mobile && "w-full",
              active
                ? "text-brand"
                : "text-fg-muted hover:text-brand focus-visible:text-brand",
            )}
            href={href}
            key={label}
          >
            {label}
          </Link>
        );
      })}
    </>
  );
}
