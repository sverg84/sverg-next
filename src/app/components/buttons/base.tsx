import type { IconType } from "react-icons";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

interface PropsCommon {
  Icon: IconType;
  href: string;
  label: string;
}

type Props = Readonly<PropsCommon>;

export default function ExternalLinkButton({ href, Icon, label }: Props) {
  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <Button
            className="rounded-full"
            nativeButton={false}
            render={
              <a
                aria-label={label}
                href={href}
                rel="noopener noreferrer"
                target="_blank"
              />
            }
            variant="sverg"
          />
        }
      >
        <Icon
          aria-hidden
          className="h-6 w-6 text-current sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-9 lg:w-9"
        />
      </TooltipTrigger>
      <TooltipContent side="bottom">{label}</TooltipContent>
    </Tooltip>
  );
}
