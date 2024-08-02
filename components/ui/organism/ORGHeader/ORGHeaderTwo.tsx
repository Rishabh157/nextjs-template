"use client";

import React from "react";
import ATMButton from "../../atom/ATMButton/ATMButton";
import { IconBell, IconHeart, IconShoppingCart } from "@tabler/icons-react";
import ATMNavigationMenu from "../../atom/ATMNavigationMenu/ATMNavigationMenu";

type NavItem = {
  id: string;
  type: "navigation-menu" | "link";
  label: string;
  options?: { id: string; label: string; optionUrl: string }[];
  url?: string;
};

type Props = {
  settings: {
    backgroundColor: string;
    textColor: string;
    profile: boolean;
    cart: boolean;
    wishlist: boolean;
    bell: boolean;
  };
  searchProps: {
    searchBarPlaceholder: string;
    isFullWidth: boolean;
  };
  navItemProps: {
    showNavItems: boolean;
    navItems: NavItem[];
  };
};

const ORGHeaderTwo = ({ navItemProps, settings, searchProps }: Props) => {
  return (
    <div
      style={{
        background: settings?.backgroundColor,
        color: settings?.textColor,
      }}
      className={` border-b`}
    >
      <div
        className={`relative flex flex-1 container mx-auto items-center gap-8`}
      >
        {/* Nav Items */}
        <div className={`flex flex-1 ${""}`}>
          {navItemProps?.navItems?.map((item) => (
            <ATMNavigationMenu
              key={item.id}
              type={item.type}
              label={item.label}
              options={item.options}
              url={item.url}
            />
          ))}
        </div>

        {/* Logo */}
        <div className={`${"flex-1 flex justify-center"}`}>LOGO</div>

        {/* Actions */}
        <div className="flex flex-1 gap-4 justify-end items-center">
          <div
            className={`p-2 bg-white flex-auto border rounded-md text-black`}
          >
            {searchProps?.searchBarPlaceholder}
          </div>

          <span className="flex items-center">
            {settings?.wishlist && (
              <ATMButton size="icon" variant="ghost">
                <IconHeart />
              </ATMButton>
            )}
            {settings?.cart && (
              <ATMButton size="icon" variant="ghost">
                <IconShoppingCart />
              </ATMButton>
            )}
            {settings?.bell && (
              <ATMButton size="icon" variant="ghost">
                <IconBell />
              </ATMButton>
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ORGHeaderTwo;
