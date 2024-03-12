export type Item = Readonly<{
  body: React.ReactNode;
  id: string;
  skills: ReadonlyArray<string>;
  time?: string;
  title: string;
}>;
