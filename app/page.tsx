import { Button } from "@/components/ui/button";
import ORGBanner from "@/components/ui/organism/ORGBanner/ORGBanner";
import ORGHeaderOne from "@/components/ui/organism/ORGHeader/ORGHeaderOne";
import ORGHeaderTwo from "@/components/ui/organism/ORGHeader/ORGHeaderTwo";

const headerData = [
  {
    id: "ORGHeaderOne",
    logo: "LOGO",
    navItemProps: {
      showNavItems: false,
      navItems: ["Men", "Women", "Kids", "Electronics", "Toys"],
    },
    userActions: ["Login", "Wish", "Bag"],
    searchProps: {
      searchBarPlaceholder: "Search...",
      isFullWidth: false,
    },
    settings: {
      backgroundColor: "bg-red-300",
      textColor: "text-black",
      profile: true,
      cart: true,
      wishlist: true,
      bell: true,
    },
  },
  {
    id: "ORGHeaderOne",
    logo: "LOGO",
    navItemProps: {
      showNavItems: true,
      navItems: ["Men", "Women", "Kids", "Electronics", "Toys"],
    },
    userActions: ["Login", "Wish", "Bag"],
    searchProps: {
      searchBarPlaceholder: "Search...",
      isFullWidth: true,
    },
    settings: {
      backgroundColor: "bg-blue-300",
      textColor: "text-black",
      profile: true,
      cart: true,
      wishlist: true,
      bell: true,
    },
  },
  {
    id: "ORGHeaderOne",
    logo: "LOGO",
    navItemProps: {
      showNavItems: true,
      navItems: ["Men", "Women", "Kids", "Electronics", "Toys"],
    },
    userActions: ["Login", "Wish", "Bag"],
    searchProps: {
      searchBarPlaceholder: "Search...",
      isFullWidth: false,
    },
    settings: {
      backgroundColor: "bg-green-300",
      textColor: "text-black",
      profile: true,
      cart: true,
      wishlist: true,
      bell: true,
    },
  },
  {
    id: "ORGHeaderOne",
    logo: "LOGO",
    navItemProps: {
      showNavItems: false,
      navItems: ["Men", "Women", "Kids", "Electronics", "Toys"],
    },
    userActions: ["Login", "Wish", "Bag"],
    searchProps: {
      searchBarPlaceholder: "Search...",
      isFullWidth: true,
    },
    settings: {
      backgroundColor: "bg-pink-300",
      textColor: "text-black",
      profile: true,
      cart: true,
      wishlist: true,
      bell: true,
    },
  },
];
const headerDataTwo = [
  {
    id: "ORGHeaderOne",
    logo: "LOGO",
    navItemProps: {
      navItems: ["Men", "Women", "Kids", "Electronics", "Toys"],
    },
    userActions: ["Login", "Wish", "Bag"],
    searchProps: {
      searchBarPlaceholder: "Search...",
    },
    settings: {
      backgroundColor: "bg-gray-300",
      textColor: "text-black",
      profile: true,
      cart: true,
      wishlist: true,
      bell: true,
    },
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      {headerData?.map((header) => {
        console.log(header);
        return (
          <ORGHeaderOne
            navItemProps={header?.navItemProps}
            settings={header.settings}
            searchProps={header.searchProps}
          />
        );
      })}
      {headerDataTwo?.map((header) => {
        console.log(header);
        return (
          <ORGHeaderTwo
            navItemProps={header?.navItemProps}
            settings={header.settings}
            searchProps={header.searchProps}
          />
        );
      })}
      SLIDER
      {/* <ORGBanner count={3} /> */}
      <div >
        <Button>s</Button>
      </div>
    </div>
  );
}
