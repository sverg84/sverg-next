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
            className="h-11 rounded-full px-4 py-0 sm:h-12 sm:px-5 md:h-14 md:px-6"
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
          className="size-7 sm:size-8 md:size-9"
        />
      </TooltipTrigger>
      <TooltipContent side="bottom">{label}</TooltipContent>
    </Tooltip>
  );
}
