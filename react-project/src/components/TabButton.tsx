import React from "react";

interface TabButtonProps {
  children: React.ReactNode;
  onSelect: () => void;
}

export default function TabButton({ children, onSelect }: TabButtonProps) {
    
  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}
