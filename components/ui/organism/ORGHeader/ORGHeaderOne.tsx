"use client";

import React, { useState } from "react";
import ATMButton from "../../atom/ATMButton/ATMButton";
import {
  // IconBell,
  // IconHeart,
  IconSearch,
  IconShoppingCart,
} from "@tabler/icons-react";
import ATMNavigationMenu from "../../atom/ATMNavigationMenu/ATMNavigationMenu";
import { NavigationMenuProps } from "@/types/navigationMenuType";
import ATMSheet from "../../atom/ATMSheet/ATMSheet";
import ATMAccordion from "../../atom/ATMAccordion/ATMAccordion";
import ATMTypography from "../../atom/ATMTypography/ATMTypography";
import MOLProfileMenu from "../../molecule/MOLProfileMenu/MOLProfileMenu";

type Props = {
  settings: {
    backgroundColor: string;
    textColor: string;
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
    navItems: NavigationMenuProps[];
  };
};

const ORGHeaderOne = ({ navItemProps, settings, searchProps }: Props) => {
  const [login, setLogin] = useState(true);
  return (
    <div
      style={{
        background: settings?.backgroundColor,
        color: settings?.textColor,
      }}
      className={`border-b flex items-center`}
    >
      <div className="min-h-[60px] relative flex flex-1 justify-between container mx-auto items-center gap-8 h-full">
        <div className="flex items-center gap-2">
          <div className="lg:hidden flex items-center justify-center">
            <ATMSheet>
              <div className="border-b p-4">
                <ATMTypography variant="h6" extraClasses="font-semibold">
                  Categories
                </ATMTypography>
              </div>
              {navItemProps?.navItems?.map((item) => (
                <ATMAccordion
                  accordionClass="border-b p-4"
                  accordionItemClass=""
                  accordionContentClass="py-2"
                  id={item.id}
                  type={item.type}
                  label={item.label}
                  options={item.options}
                  url={item.url}
                />
              ))}
            </ATMSheet>
          </div>

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
                id={item.id}
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
          <span className="flex items-center">
            <div className="lg:hidden">
              <ATMButton size="icon" variant="ghost">
                <IconSearch />
              </ATMButton>
            </div>
            {/* {settings?.wishlist && (
              <ATMButton size="icon" variant="ghost">
                <IconHeart />
              </ATMButton>
            )} */}
            {settings?.cart && (
              <ATMButton size="icon" variant="ghost">
                <IconShoppingCart />
              </ATMButton>
            )}
            {/* {settings?.bell && (
              <ATMButton size="icon" variant="ghost">
                <IconBell />
              </ATMButton>
            )} */}
            <div className="pl-2">
              {login ? (
                <MOLProfileMenu />
              ) : (
                <ATMButton onClick={() => {}}>Login</ATMButton>
              )}
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ORGHeaderOne;
