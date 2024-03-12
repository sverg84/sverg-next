"use client";

import { TimelinePoint } from "flowbite-react";
import { PiPianoKeysFill, PiShirtFoldedFill } from "react-icons/pi";
import {
  SiFacebook,
  SiMeta,
  SiNextdotjs,
  SiRemix,
  SiSass,
} from "react-icons/si";
import { SlLink } from "react-icons/sl";

const icons = new Map([
  ["fb-intern", SiFacebook],
  ["meta-swe", SiMeta],
  ["piano", PiPianoKeysFill],
  ["umich-urop", PiShirtFoldedFill],
  ["url", SlLink],
  ["v1", SiSass],
  ["v2", SiRemix],
  ["v3", SiNextdotjs],
]);

type Props = Readonly<{
  iconId: string;
  rightAlign: boolean;
}>;

export default function Point({ iconId, rightAlign }: Props) {
  return (
    <TimelinePoint
      theme={{
        marker: {
          icon: {
            base: "h-3 w-3 text-cyan-700 dark:text-emerald-300",
            wrapper: `absolute ${rightAlign ? "-right-3" : "-left-3"} flex h-6 w-6 items-center justify-center\
              rounded-full bg-cyan-100 ring-8 ring-gray-50 dark:bg-emerald-800 dark:ring-gray-900`,
          },
        },
      }}
      icon={icons.get(iconId)}
    />
  );
}
