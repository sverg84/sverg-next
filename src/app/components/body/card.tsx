import { Card } from "flowbite-react";

type Props = Readonly<{
  children: React.ReactNode;
  id: string;
  title?: string;
}>;

export default function BodyCard({ children, id, title }: Props) {
  return (
    <Card className="p-xl w-full" id={id}>
      {/* {title && <BodyCardHeader title={title} />} */}
      <section className="px-xl py-md">{children}</section>
    </Card>
  );
}
