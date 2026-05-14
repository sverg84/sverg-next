"use client";

import Link from "next/link";
import {
  DarkThemeToggle,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
} from "flowbite-react";
import Image from "next/image";
import MyName from "../../consts/name";
import NavLinks from "./links";

export default function Nav() {
  return (
    <Navbar
      fluid
      className="sticky top-0 z-50 border-b border-[color:var(--color-page-border)] bg-page-bg
        backdrop-blur-sm"
    >
      <NavbarBrand as={Link} href="/">
        <Image
          src="/icon.svg"
          className="mr-3 h-6 w-6 xs:h-9 xs:w-9"
          alt=""
          width={36}
          height={36}
          priority
        />
        <span
          className="text-md hidden self-center font-semibold whitespace-nowrap min-[360px]:block
            xs:text-xl"
        >
          {MyName}
        </span>
      </NavbarBrand>
      <div className="mr-8 inline-flex grow justify-end">
        <DarkThemeToggle />
      </div>
      <NavbarToggle />
      <NavbarCollapse>
        <NavLinks />
      </NavbarCollapse>
    </Navbar>
  );
}
