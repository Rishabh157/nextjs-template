import React from "react";
import ATMNavigationMenu from "../../atom/ATMNavigationMenu/ATMNavigationMenu";
import { NavigationMenuProps } from "@/types/navigationMenuType";

type Props = {
  backgroundColor: string;
  textColor: string;
  navItems: NavigationMenuProps[];
};

const ORGCategoryNavigationBar = ({
  navItems,
  backgroundColor,
  textColor,
}: Props) => {
  return (
    <div
      className="w-full"
      style={{ background: backgroundColor, color: textColor }}
    >
      <div className="relative container mx-auto flex">
        {navItems.map((item) => (
          <ATMNavigationMenu
            id={item.id}
            type={item.type}
            label={item.label}
            options={item.type === "navigation-menu" ? item.options : undefined}
            url={item.type === "link" ? item.url : undefined}
          />
        ))}
      </div>
    </div>
  );
};

export default ORGCategoryNavigationBar;
