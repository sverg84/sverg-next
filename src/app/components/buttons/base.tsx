import type { IconType } from "react-icons";
import { Button, Tooltip } from "flowbite-react";

interface PropsCommon {
  Icon: IconType;
  href: string;
  label: string;
}

const className = [
  "px-2 py-1",
  "sm:px-3 sm:py-1.5",
  "md:px-4 md:py-2",
  "lg:px-5 lg:py-2.5",
  "xl:px-6 xl:py-3",
].reduce((acc, name) => `${acc} ${name}`, "");

type Props = Readonly<PropsCommon>;

export default function ExternalLinkButton({ href, Icon, label }: Props) {
  return (
    <Tooltip content={label} placement="bottom">
      <Button
        aria-label={label}
        color="sverg"
        href={href}
        outline={true}
        pill={true}
        target="_blank"
        theme={{
          outline: {
            color: {
              sverg:
                "text-white bg-cyan-700 border border-transparent dark:bg-emerald-300 focus:ring-4 focus:ring-cyan-600 dark:focus:ring-emerald-900",
            },
            on:
              "flex text-black dark:text-white hover:bg-cyan-700 hover:text-white justify-center bg-slate-50 transition-all dark:hover:bg-emerald-300 dark:hover:text-black duration-75 ease-in group-enabled:group-hover:bg-opacity-0 group-enabled:group-hover:text-inherit dark:bg-gray-900 w-full " +
              className,
          },
        }}
      >
        <Icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-9 lg:w-9" />
      </Button>
    </Tooltip>
  );
}
