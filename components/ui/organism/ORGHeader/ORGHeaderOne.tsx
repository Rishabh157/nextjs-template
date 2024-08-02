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

const ORGHeaderOne = ({ navItemProps, settings, searchProps }: Props) => {
  return (
    <div
      style={{
        background: settings?.backgroundColor,
        color: settings?.textColor,
      }}
      className={`border-b min-h-[60px] flex items-center`}
    >
      <div className="relative flex flex-1 justify-between px-2 lg:px-0 container mx-auto items-center gap-8">
        {/* Logo */}
        <div
          className={`${
            navItemProps?.showNavItems === false &&
            searchProps?.isFullWidth === false
              ? "flex-1"
              : navItemProps?.showNavItems && searchProps?.isFullWidth
              ? ""
              : navItemProps?.showNavItems && !searchProps?.isFullWidth
              ? "w-fit"
              : !navItemProps?.showNavItems && searchProps?.isFullWidth
              ? ""
              : ""
          }`}
        >
          LOGO
        </div>

        {/* Nav Items */}
        {navItemProps?.showNavItems && (
          <div
            className={`hidden lg:flex ${
              searchProps?.isFullWidth ? "flex-none" : "flex-1"
            }`}
          >
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
        )}

        {/* Search bar */}
        <div
          className={`${
            searchProps?.isFullWidth ? "flex-1" : "flex-auto"
          } p-2 bg-white border rounded-md text-black hidden lg:flex`}
        >
          {searchProps?.searchBarPlaceholder}
        </div>

        {/* Actions */}
        <div className="flex flex-0 gap-4 justify-end items-center">
          {settings?.profile && <ATMButton onClick={() => {}}>Login</ATMButton>}

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

export default ORGHeaderOne;
