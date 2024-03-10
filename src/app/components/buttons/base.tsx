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
        className="inline-flex items-center gap-x-4 px-3"
        href={href}
        pill={true}
        size="sm"
        target="_blank"
        {...colorProps}
      >
        <Icon className="-my-1.5" size={36} />
      </Button>
    </Tooltip>
  );
}
