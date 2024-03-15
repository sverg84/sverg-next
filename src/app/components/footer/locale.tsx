"use client";

type Props = Readonly<{ date: Date }>;

export default function ClientLocale({ date }: Props) {
  return date.toLocaleString();
}
