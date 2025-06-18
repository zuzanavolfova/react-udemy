import React from "react";

export default function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={title}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
