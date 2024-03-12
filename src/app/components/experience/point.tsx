"use client";

import { TimelinePoint } from "flowbite-react";
import { RiFacebookCircleFill, RiMetaFill, RiShirtFill } from "react-icons/ri";

const icons = new Map([
  ["fb-intern", RiFacebookCircleFill],
  ["meta-swe", RiMetaFill],
  ["umich-urop", RiShirtFill],
]);

type Props = Readonly<{
  iconId: string;
}>;

export default function Point({ iconId }: Props) {
  return <TimelinePoint icon={icons.get(iconId)} />;
}
