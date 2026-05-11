export type Item = Readonly<{
  body: string;
  href: string;
  id: string;
  skills: ReadonlyArray<string>;
  time?: string;
  title: string;
}>;
