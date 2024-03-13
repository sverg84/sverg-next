export type Item = Readonly<{
  body: React.ReactNode;
  href: string;
  id: string;
  skills: ReadonlyArray<string>;
  time?: string;
  title: string;
}>;
