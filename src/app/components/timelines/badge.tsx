import { Badge } from "flowbite-react";

type Props = Readonly<{
  className?: string;
  label: string;
}>;

export default function TimelineBadge({ className, label }: Props) {
  return (
    <Badge
      className={`rounded-lg px-1 py-[0.0625rem] text-[0.6rem] text-cyan-700
      group-hover:bg-cyan-100 dark:bg-emerald-800 dark:text-emerald-300
      dark:group-hover:bg-emerald-800 md:px-2 md:py-0.5 md:text-xs ${className}`}
    >
      {label}
    </Badge>
  );
}
