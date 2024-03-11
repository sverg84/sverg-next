import Link from "next/link";
import {
  DarkThemeToggle,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
} from "flowbite-react";
import Image from "next/image";
import MyName from "../consts/name";
import NavLinks from "./nav/links";

export default function Nav() {
  return (
    <Navbar
      fluid
      className="sticky top-0 z-10 border-b border-gray-200 dark:border-gray-700"
    >
      <NavbarBrand as={Link} href="/">
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
        <NavLinks />
      </NavbarCollapse>
    </Navbar>
  );
}
