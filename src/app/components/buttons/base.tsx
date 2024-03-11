import type { ButtonGradientDuoToneColors } from "flowbite-react";
import type { IconType } from "react-icons";
import { Button, Tooltip } from "flowbite-react";

interface PropsCommon {
  Icon: IconType;
  href: string;
  label: string;
  renderLabel?: boolean;
}

interface PropsGradient extends PropsCommon {
  color?: never;
  gradient: keyof ButtonGradientDuoToneColors;
}

interface PropsStandard extends PropsCommon {
  color?: string;
  gradient?: never;
}

type Props = Readonly<PropsGradient | PropsStandard>;

const className = [
  ["xs", "text-xs px-2 py-1"],
  ["sm", "sm:text-sm sm:px-3 sm:py-1.5"],
  ["md", "md:text-sm md:px-4 md:py-2"],
  ["lg", "lg:text-base lg:px-5 lg:py-2.5"],
  ["xl", "xl:px-6 xl:py-3"],
].reduce((acc, pair) => {
  const [_size, name] = pair;

  acc = `${acc} ${name}`;
  return acc;
}, "");

export default function ExternalLinkButton({
  color,
  gradient,
  href,
  Icon,
  label,
}: Props) {
  const colorProps =
    gradient != null ? { gradientDuoTone: gradient } : { color };

  return (
    <Tooltip content={label} placement="bottom">
      <Button
        aria-label={label}
        className={className}
        href={href}
        pill={true}
        size="xs"
        target="_blank"
        {...colorProps}
      >
        <Icon className="-my-1.5 h-6 w-6 xs:h-9 xs:w-9" />
      </Button>
    </Tooltip>
  );
}
