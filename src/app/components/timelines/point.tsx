"use client";

import { TimelinePoint } from "flowbite-react";
import {
  PiChefHatFill,
  PiPianoKeysFill,
  PiShirtFoldedFill,
} from "react-icons/pi";
import {
  SiCoinbase,
  SiFacebook,
  SiMeta,
  SiMcdonalds,
  SiNextdotjs,
  SiRemix,
  SiSass,
} from "react-icons/si";
import { SlLink } from "react-icons/sl";

const icons = new Map([
  ["coinbase", SiCoinbase],
  ["fb-intern", SiFacebook],
  ["kitchenkin", PiChefHatFill],
  ["mcd", SiMcdonalds],
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
}>;

export default function Point({ iconId }: Props) {
  return <TimelinePoint icon={icons.get(iconId)} />;
}
