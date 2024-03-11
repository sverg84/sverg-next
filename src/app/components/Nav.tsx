import Link from "next/link";
import {
  DarkThemeToggle,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import Image from "next/image";
import MyName from "../consts/name";

export default function Nav() {
  return (
    <Navbar
      fluid
      className="sticky top-0 z-10 border-b border-gray-200 dark:border-gray-700"
    >
      <NavbarBrand as={Link} href="https://flowbite-react.com">
        <Image
          src="https://www.flowbite-react.com/favicon.svg"
          className="mr-3 h-6 w-6 xs:h-9 xs:w-9"
          alt="Flowbite React Logo"
          width={36}
          height={36}
        />
        <span
          className="text-md hidden self-center whitespace-nowrap font-semibold min-[360px]:block
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
        <NavbarLink href="#" active>
          Home
        </NavbarLink>
        <NavbarLink as={Link} href="#">
          About
        </NavbarLink>
        <NavbarLink as={Link} href="https://sverg84.github.io/">
          v1 (GitHub Pages)
        </NavbarLink>
        <NavbarLink as={Link} href="https://sverg84.com">
          v2 (Remix + AWS)
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
