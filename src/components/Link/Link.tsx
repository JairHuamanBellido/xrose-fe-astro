import type React from "react";

interface Props {
  href: string;
  children: React.ReactNode;
}
export default function Link({ href, children }: Props) {
  return (
    <a
      className="text-blue-700 hover:text-blue-800"
      href={href}
    >
      {children}
    </a>
  );
}
