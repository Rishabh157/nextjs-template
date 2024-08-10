import ORGHeaderOne from "@/components/ui/organism/ORGHeader/ORGHeaderOne";
import React from "react";

const headerData = [
  {
    id: "ORGHeaderOne",
    logo: "LOGO",
    navItemProps: {
      showNavItems: true,
      navItems: [
        {
          id: "nav-men",
          type: "navigation-menu",
          label: "Men",
          options: [
            { id: "men-shirt", label: "Shirt", optionUrl: "/" },
            { id: "men-tshirt", label: "T-shirt", optionUrl: "/" },
            { id: "men-shoe", label: "Shoe", optionUrl: "/" },
          ],
        },
        {
          id: "nav-women",
          type: "navigation-menu",
          label: "Women",
          options: [
            { id: "women-dress", label: "Dress", optionUrl: "/" },
            { id: "women-skirt", label: "Skirt", optionUrl: "/" },
            { id: "women-heels", label: "Heels", optionUrl: "/" },
          ],
        },
        {
          id: "nav-kids",
          type: "navigation-menu",
          label: "Kids",
          options: [
            { id: "kids-toys", label: "Toys", optionUrl: "/" },
            { id: "kids-clothes", label: "Clothes", optionUrl: "/" },
            { id: "kids-games", label: "Games", optionUrl: "/" },
          ],
        },
        {
          id: "nav-electronics",
          type: "navigation-menu",
          label: "Electronics",
          options: [
            { id: "electronics-phone", label: "Phone", optionUrl: "/" },
            { id: "electronics-laptop", label: "Laptop", optionUrl: "/" },
            {
              id: "electronics-headphones",
              label: "Headphones",
              optionUrl: "/",
            },
          ],
        },
        {
          id: "nav-toys",
          type: "link",
          label: "Toys",
          url: "",
        },
      ],
    },
    // userActions: ["Login", "Wish", "Bag"],
    searchProps: {
      searchBarPlaceholder: "Search...",
      isFullWidth: true,
    },
    settings: {
      backgroundColor: "#ffffff",
      textColor: "#121212",
      cart: true,
      wishlist: true,
      bell: true,
    },
  },
];

const page = () => {
  return (
    <div>
      <div className="flex flex-col gap-4 sticky top-0 z-50">
        {headerData.map((header: any) => (
          <ORGHeaderOne
            key={header.id}
            navItemProps={header.navItemProps}
            settings={header.settings}
            searchProps={header.searchProps}
          />
        ))}
      </div>
    </div>
  );
};

export default page;
