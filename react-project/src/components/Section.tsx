import React from "react";

export default function Section({
  title,
  children,
  ...props
}: {
  title: string;
  children: React.ReactNode;
  [key: string]: any;
}) {
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
