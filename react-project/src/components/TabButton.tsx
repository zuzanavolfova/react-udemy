import React from "react";

interface TabButtonProps {
  children: React.ReactNode;
}

export default function TabButton({ children }: TabButtonProps) {
  return (
    <li>
      <button>{children}</button>
    </li>
  );
}
