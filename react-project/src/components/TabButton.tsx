import React from "react";

interface TabButtonProps {
  children: React.ReactNode;
  isSelected?: boolean;
  [key: string]: any;
}

export default function TabButton({
  children,
  isSelected,
  ...props
}: TabButtonProps) {
  return (
    <li>
      <button className={isSelected ? "active" : undefined} {...props}>
        {children}
      </button>
    </li>
  );
}
