import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type MenuItem = {
  id: string | number;
  content: React.ReactNode;
  onClick?: () => void;
};

type Props = {
  trigger: React.ReactNode;
  label?: string;
  items: MenuItem[];
};

const ATMDropdownMenu = ({ trigger, label, items }: Props) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center justify-center">
        {trigger}
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {label && (
          <>
            <DropdownMenuLabel>{label}</DropdownMenuLabel>
            <DropdownMenuSeparator />
          </>
        )}
        {items.map((item) => (
          <DropdownMenuItem key={item.id} onClick={item.onClick}>
            {item.content}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ATMDropdownMenu;
