export type Item = Readonly<{
  body: string;
  href: string;
  id: string;
  skills: ReadonlyArray<Skill>;
  time?: string;
  title: string;
}>;
