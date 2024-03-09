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
import MyName from "../consts/MyName";

export default function Nav() {
  return (
    <Navbar
      fluid
      className="sticky top-0 border-b border-gray-200 dark:border-gray-700"
    >
      <NavbarBrand as={Link} href="https://flowbite-react.com">
        <Image
          src="https://www.flowbite-react.com/favicon.svg"
          className="mr-3"
          alt="Flowbite React Logo"
          width={36}
          height={36}
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold">
          {MyName}
        </span>
      </NavbarBrand>
      <div className="inline-flex justify-end grow mr-8">
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
        <NavbarLink href="#">Services</NavbarLink>
        <NavbarLink href="#">Pricing</NavbarLink>
        <NavbarLink href="#">Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
