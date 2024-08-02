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
  };
  navItemProps: {
    navItems: string[];
  };
};

const ORGHeaderTwo = ({ navItemProps, settings, searchProps }: Props) => {
  return (
    <div className={`${settings.backgroundColor} border-b`}>
      <div className={`flex flex-1 p-4 container mx-auto items-center gap-8`}>
        {/* Nav Items */}
        <div className={`flex flex-1 gap-4 ${""}`}>
          {navItemProps?.navItems?.map((item: any) => (
            <div key={item} className={`${settings?.textColor}`}>
              {item}
            </div>
          ))}
        </div>

        {/* Logo */}
        <div className={`${"flex-1 flex justify-center"}`}>LOGO</div>

        {/* Actions */}
        <div className="flex flex-1 gap-4 justify-end items-center">
          <div className={`p-2 bg-gray-100 flex-auto`}>
            {searchProps?.searchBarPlaceholder}
          </div>
          {settings?.profile && <div>Login</div>}
          {settings?.wishlist && <div>Wishlist</div>}
          {settings?.cart && <div>Bag</div>}
          {settings?.bell && <div>bell</div>}
        </div>
      </div>
    </div>
  );
};

export default ORGHeaderTwo;
