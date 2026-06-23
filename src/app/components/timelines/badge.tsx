import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type Props = Readonly<{
  className?: string;
  label: string;
}>;

export default function TimelineBadge({ className, label }: Props) {
  return (
    <Badge
      className={cn(
        `rounded-lg px-1 py-[0.0625rem] text-[0.6rem] text-brand
        group-hover:bg-brand-subtle md:px-2 md:py-0.5 md:text-xs`,
        className,
      )}
      variant="secondary"
    >
      {label}
    </Badge>
  );
}
