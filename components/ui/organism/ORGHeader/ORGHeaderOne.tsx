import React from "react";

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
    navItems: string[];
    showNavItems: boolean;
  };
};

const ORGHeaderOne = ({ navItemProps, settings, searchProps }: Props) => {
  return (
    <div className={`${settings.backgroundColor} border-b`}>
      <div className={`flex flex-1 p-4 container mx-auto items-center gap-8`}>
        {/* Logo */}
        <div
          className={`${
            navItemProps?.showNavItems === false &&
            searchProps?.isFullWidth === false
              ? "flex-1"
              : navItemProps?.showNavItems === true &&
                searchProps?.isFullWidth === true
              ? ""
              : navItemProps?.showNavItems === true &&
                searchProps?.isFullWidth === false
              ? "w-fit"
              : navItemProps?.showNavItems === false &&
                searchProps?.isFullWidth === true
              ? ""
              : ""
          }`}
        >
          LOGO
        </div>

        {/* Nav Items */}
        {navItemProps?.showNavItems && (
          <div
            className={`flex gap-4 ${
              searchProps?.isFullWidth === true ? "flex-none" : "flex-1"
            }`}
          >
            {navItemProps?.navItems?.map((item: any) => (
              <div key={item} className={`${settings?.textColor}`}>
                {item}
              </div>
            ))}
          </div>
        )}

        {/* search bar */}
        <div
          className={`${
            searchProps?.isFullWidth === true ? "flex-1" : "flex-auto"
          } p-2 bg-gray-100`}
        >
          {searchProps?.searchBarPlaceholder}
        </div>

        {/* Actions */}
        <div className="flex flex-0 gap-4 justify-end">
          {settings?.profile && <div>Login</div>}
          {settings?.wishlist && <div>Wishlist</div>}
          {settings?.cart && <div>Bag</div>}
          {settings?.bell && <div>bell</div>}
        </div>
      </div>
    </div>
  );
};

export default ORGHeaderOne;
