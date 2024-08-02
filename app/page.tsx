import ORGHeaderOne from "@/components/ui/organism/ORGHeader/ORGHeaderOne";

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
            { id: "men-shirt", label: "Shirt" },
            { id: "men-tshirt", label: "T-shirt" },
            { id: "men-shoe", label: "Shoe" },
          ],
        },
        {
          id: "nav-women",
          type: "navigation-menu",
          label: "Women",
          options: [
            { id: "women-dress", label: "Dress" },
            { id: "women-skirt", label: "Skirt" },
            { id: "women-heels", label: "Heels" },
          ],
        },
        {
          id: "nav-kids",
          type: "navigation-menu",
          label: "Kids",
          options: [
            { id: "kids-toys", label: "Toys" },
            { id: "kids-clothes", label: "Clothes" },
            { id: "kids-games", label: "Games" },
          ],
        },
        {
          id: "nav-electronics",
          type: "navigation-menu",
          label: "Electronics",
          options: [
            { id: "electronics-phone", label: "Phone" },
            { id: "electronics-laptop", label: "Laptop" },
            { id: "electronics-headphones", label: "Headphones" },
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
    userActions: ["Login", "Wish", "Bag"],
    searchProps: {
      searchBarPlaceholder: "Search...",
      isFullWidth: false,
    },
    settings: {
      backgroundColor: "bg-white",
      textColor: "text-black",
      profile: true,
      cart: true,
      wishlist: true,
      bell: true,
    },
  },
  // {
  //   id: "ORGHeaderOne",
  //   logo: "LOGO",
  //   navItemProps: {
  //     showNavItems: true,
  //     navItems: ["Men", "Women", "Kids", "Electronics", "Toys"],
  //   },
  //   userActions: ["Login", "Wish", "Bag"],
  //   searchProps: {
  //     searchBarPlaceholder: "Search...",
  //     isFullWidth: true,
  //   },
  //   settings: {
  //     backgroundColor: "bg-blue-300",
  //     textColor: "text-black",
  //     profile: true,
  //     cart: true,
  //     wishlist: true,
  //     bell: true,
  //   },
  // },
  // {
  //   id: "ORGHeaderOne",
  //   logo: "LOGO",
  //   navItemProps: {
  //     showNavItems: true,
  //     navItems: ["Men", "Women", "Kids", "Electronics", "Toys"],
  //   },
  //   userActions: ["Login", "Wish", "Bag"],
  //   searchProps: {
  //     searchBarPlaceholder: "Search...",
  //     isFullWidth: false,
  //   },
  //   settings: {
  //     backgroundColor: "bg-green-300",
  //     textColor: "text-black",
  //     profile: true,
  //     cart: true,
  //     wishlist: true,
  //     bell: true,
  //   },
  // },
  // {
  //   id: "ORGHeaderOne",
  //   logo: "LOGO",
  //   navItemProps: {
  //     showNavItems: false,
  //     navItems: ["Men", "Women", "Kids", "Electronics", "Toys"],
  //   },
  //   userActions: ["Login", "Wish", "Bag"],
  //   searchProps: {
  //     searchBarPlaceholder: "Search...",
  //     isFullWidth: true,
  //   },
  //   settings: {
  //     backgroundColor: "bg-pink-300",
  //     textColor: "text-black",
  //     profile: true,
  //     cart: true,
  //     wishlist: true,
  //     bell: true,
  //   },
  // },
];
// const headerDataTwo = [
//   {
//     id: "ORGHeaderOne",
//     logo: "LOGO",
//     navItemProps: {
//       navItems: ["Men", "Women", "Kids", "Electronics", "Toys"],
//     },
//     userActions: ["Login", "Wish", "Bag"],
//     searchProps: {
//       searchBarPlaceholder: "Search...",
//     },
//     settings: {
//       backgroundColor: "bg-gray-300",
//       textColor: "text-black",
//       profile: true,
//       cart: true,
//       wishlist: true,
//       bell: true,
//     },
//   },
// ];

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      {headerData.map((header: any) => (
        <ORGHeaderOne
          key={header.id}
          navItemProps={header.navItemProps}
          settings={header.settings}
          searchProps={header.searchProps}
        />
      ))}
    </div>
  );
}
