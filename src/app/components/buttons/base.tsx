import type { IconType } from "react-icons";
import { Button, Tooltip } from "flowbite-react";

interface PropsCommon {
  Icon: IconType;
  href: string;
  label: string;
}

type Props = Readonly<PropsCommon>;

export default function ExternalLinkButton({ href, Icon, label }: Props) {
  return (
    <Tooltip content={label} placement="bottom">
      <Button
        as="a"
        aria-label={label}
        color="sverg"
        href={href}
        outline={true}
        pill={true}
        rel="noopener noreferrer"
        target="_blank"
      >
        <Icon
          className="h-6 w-6 text-current sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-9 lg:w-9"
          aria-hidden
        />
      </Button>
    </Tooltip>
  );
}
