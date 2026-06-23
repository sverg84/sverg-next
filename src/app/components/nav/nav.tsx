"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import MyName from "../../consts/name";
import NavLinks from "./links";
import ThemeToggle from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-border bg-page-bg backdrop-blur-sm"
    >
      <div className="mx-auto flex w-full items-center gap-4 px-4 py-3 sm:px-6">
        <Link className="flex shrink-0 items-center gap-3" href="/">
          <Image
            alt=""
            className="h-6 w-6 xs:h-9 xs:w-9"
            height={36}
            priority
            src="/icon.svg"
            width={36}
          />
          <span
            className="text-md hidden font-semibold whitespace-nowrap min-[360px]:block
              xs:text-xl"
          >
            {MyName}
          </span>
        </Link>

        <nav
          aria-label="Main"
          className="hidden flex-1 items-center justify-end gap-1 pr-4 md:flex"
        >
          <NavLinks />
        </nav>

        <div className="ml-auto flex items-center gap-2 md:ml-0">
          <ThemeToggle />
          <Sheet onOpenChange={setOpen} open={open}>
            <SheetTrigger
              render={
                <Button
                  aria-label="Open navigation menu"
                  className="md:hidden"
                  size="icon"
                  type="button"
                  variant="ghost"
                />
              }
            >
              <HiMenu className="size-6" />
            </SheetTrigger>
            <SheetContent className="bg-page-bg" side="right">
              <SheetHeader>
                <SheetTitle className="text-left">Navigation</SheetTitle>
              </SheetHeader>
              <nav
                aria-label="Main"
                className="flex flex-col gap-2 px-4"
                onClick={() => setOpen(false)}
              >
                <NavLinks mobile />
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
