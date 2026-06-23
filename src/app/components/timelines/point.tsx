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
import { createElement } from "react";
import type { IconType } from "react-icons";

const icons = new Map<string, IconType>([
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
  const Icon = icons.get(iconId);
  if (!Icon) return null;

  return (
    <div aria-hidden className="absolute top-1.5 -left-[1.125rem] md:top-0 md:-left-7">
      <span
        className="flex size-3 items-center justify-center rounded-full bg-timeline-marker-bg
          ring-4 ring-timeline-marker-ring md:size-6 md:ring-8"
      >
        {createElement(Icon, {
          className: "size-[0.375rem] text-timeline-marker-icon md:size-3",
        })}
      </span>
    </div>
  );
}
