"use client";

import ATMThumbCarousel from "@/components/ui/atom/ATMThumbCarousel/ATMThumbCarousel";
import ORGHeaderOne from "@/components/ui/organism/ORGHeader/ORGHeaderOne";
import MOLProductCardFour from "@/components/ui/molecule/MOLProductCard/MOLProductCardFour";
import MOLProductCardOne from "@/components/ui/molecule/MOLProductCard/MOLProductCardOne";
import MOLProductCardThree from "@/components/ui/molecule/MOLProductCard/MOLProductCardThree";
import MOLProductCardTwo from "@/components/ui/molecule/MOLProductCard/MOLProductCardTwo";
import { useState } from "react";
import { MOLCarousel } from "@/components/ui/molecule/MOLCarousel/MOLCarousel";

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
    userActions: ["Login", "Wish", "Bag"],
    searchProps: {
      searchBarPlaceholder: "Search...",
      isFullWidth: false,
    },
    settings: {
      backgroundColor: "#ffffff",
      textColor: "#121212",
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
    userActions: ["Login", "Wish", "Bag"],
    searchProps: {
      searchBarPlaceholder: "Search...",
      isFullWidth: true,
    },
    settings: {
      backgroundColor: "#131921",
      textColor: "#ffffff",
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
    userActions: ["Login", "Wish", "Bag"],
    searchProps: {
      searchBarPlaceholder: "Search...",
      isFullWidth: true,
    },
    settings: {
      backgroundColor: "#2a55e5",
      textColor: "#ffffff",
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
    userActions: ["Login", "Wish", "Bag"],
    searchProps: {
      searchBarPlaceholder: "Search...",
      isFullWidth: false,
    },
    settings: {
      backgroundColor: "#fdd835",
      textColor: "#121212",
      profile: true,
      cart: true,
      wishlist: true,
      bell: true,
    },
  },
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

const carouselData = [
  {
    autoplayProps: {
      delay: 1000,
      jump: false,
      stopOnFocusIn: true,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
      stopOnLastSnap: false,
    },
    loop: true,
    slideProps: {
      slides: [
        {
          url: "https://images.bewakoof.com/uploads/grid/app/HC-1x1-CS-common-1722607686.jpg",
        },
        {
          url: "https://images.bewakoof.com/uploads/grid/app/1x1-2024-HC-dotw-common-sponge-1722584795.jpg",
        },
        {
          url: "https://images.bewakoof.com/uploads/grid/app/1x1-2024-HC-cosmic-01-1722834716.jpg",
        },
        {
          url: "https://images.bewakoof.com/uploads/grid/app/1x1-2024-HC-b2OT999-common-1719493923-1722842758.jpg",
        },
        {
          url: "https://images.bewakoof.com/uploads/grid/app/1x1-2024-HC-AIR-common-ezgif-com-optimize-1719843540.gif",
        },
      ],
      slidesPerView: 2,
    },
    arrowProps: {
      arrows: true,
    },
  },
];

const carouselData2 = [
  {
    classNamesProps: {
      inView: "",
      draggable: "",
      dragging: "",
    },
    loop: true,
    slideProps: {
      slides: [
        {
          url: "https://images.bewakoof.com/uploads/grid/app/HC-1x1-CS-common-1722607686.jpg",
        },
        {
          url: "https://images.bewakoof.com/uploads/grid/app/1x1-2024-HC-dotw-common-sponge-1722584795.jpg",
        },
        {
          url: "https://images.bewakoof.com/uploads/grid/app/1x1-2024-HC-cosmic-01-1722834716.jpg",
        },
        {
          url: "https://images.bewakoof.com/uploads/grid/app/1x1-2024-HC-b2OT999-common-1719493923-1722842758.jpg",
        },
        {
          url: "https://images.bewakoof.com/uploads/grid/app/1x1-2024-HC-AIR-common-ezgif-com-optimize-1719843540.gif",
        },
      ],
      slidesPerView: 4,
    },
    arrowProps: {
      arrows: true,
    },
  },
];

const carouselData3 = [
  {
    scrollProps: {
      speed: 8,
      startDelay: 1000,
      direction: "forward",
      stopOnFocusIn: true,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    },
    loop: true,
    slideProps: {
      slides: [
        {
          url: "https://images.bewakoof.com/uploads/grid/app/HC-1x1-CS-common-1722607686.jpg",
        },
        {
          url: "https://images.bewakoof.com/uploads/grid/app/1x1-2024-HC-dotw-common-sponge-1722584795.jpg",
        },
        {
          url: "https://images.bewakoof.com/uploads/grid/app/1x1-2024-HC-cosmic-01-1722834716.jpg",
        },
        {
          url: "https://images.bewakoof.com/uploads/grid/app/1x1-2024-HC-b2OT999-common-1719493923-1722842758.jpg",
        },
        {
          url: "https://images.bewakoof.com/uploads/grid/app/1x1-2024-HC-AIR-common-ezgif-com-optimize-1719843540.gif",
        },
      ],
      slidesPerView: 3,
    },
    arrowProps: {
      arrows: true,
    },
  },
];

const SLIDES = {
  variant: "inline",
  slideData: [
    {
      id: "1",
      url: "https://images.bewakoof.com/uploads/grid/app/HC-1x1-CS-common-1722607686.jpg",
    },
    {
      id: "2",
      url: "https://images.bewakoof.com/uploads/grid/app/1x1-2024-HC-dotw-common-sponge-1722584795.jpg",
    },
    {
      id: "3",
      url: "https://images.bewakoof.com/uploads/grid/app/1x1-2024-HC-cosmic-01-1722834716.jpg",
    },
    {
      id: "4",
      url: "https://images.bewakoof.com/uploads/grid/app/1x1-2024-HC-b2OT999-common-1719493923-1722842758.jpg",
    },
    {
      id: "5",
      url: "https://images.bewakoof.com/uploads/grid/app/1x1-2024-HC-AIR-common-ezgif-com-optimize-1719843540.gif",
    },
    {
      id: "6",
      url: "https://images.bewakoof.com/uploads/grid/app/1x1-2024-HC-PIMA-men--1--1719843539.jpg",
    },
    {
      id: "7",
      url: "https://images.bewakoof.com/uploads/grid/app/1x1-2024-HC-HEAVYDUTY-common-ezgif-com-optimize-1719843541.gif",
    },
    {
      id: "8",
      url: "https://images.bewakoof.com/uploads/grid/app/1x1-2024-HC-HEAVYDUTY-common-ezgif-com-optimize-1719843541.gif",
    },
  ],
};

const SLIDESS = {
  variant: "block",
  slideData: [
    {
      id: "1",
      url: "https://images.bewakoof.com/uploads/grid/app/HC-1x1-CS-common-1722607686.jpg",
    },
    {
      id: "2",
      url: "https://images.bewakoof.com/uploads/grid/app/1x1-2024-HC-dotw-common-sponge-1722584795.jpg",
    },
    {
      id: "3",
      url: "https://images.bewakoof.com/uploads/grid/app/1x1-2024-HC-cosmic-01-1722834716.jpg",
    },
    {
      id: "4",
      url: "https://images.bewakoof.com/uploads/grid/app/1x1-2024-HC-b2OT999-common-1719493923-1722842758.jpg",
    },
    {
      id: "5",
      url: "https://images.bewakoof.com/uploads/grid/app/1x1-2024-HC-AIR-common-ezgif-com-optimize-1719843540.gif",
    },
    {
      id: "6",
      url: "https://images.bewakoof.com/uploads/grid/app/1x1-2024-HC-PIMA-men--1--1719843539.jpg",
    },
    {
      id: "7",
      url: "https://images.bewakoof.com/uploads/grid/app/1x1-2024-HC-HEAVYDUTY-common-ezgif-com-optimize-1719843541.gif",
    },
  ],
};

const basicProducts = [
  {
    productImage:
      "https://images.bewakoof.com/t640/women-s-skipper-blue-life-is-better-with-friends-graphic-printed-oversized-t-shirt-646145-1721305222-1.jpg",
    productName: "Life is Better with Friends T-Shirt",
    productDescription: "A comfortable and stylish oversized t-shirt.",
    price: "19.99",
    MRP: "24.99",
    offerPercent: "20",
  },
  {
    productImage:
      "https://images.bewakoof.com/t640/women-s-pink-waves-till-the-grave-graphic-printed-oversized-t-shirt-637084-1717669404-1.jpg",
    productName: "Men's Black Graphic T-Shirt",
    productDescription: "A trendy t-shirt with a cool graphic print.",
    price: "15.99",
    MRP: "19.99",
    offerPercent: "20",
  },
  {
    productImage:
      "https://images.bewakoof.com/t640/men-s-blue-oversized-t-shirt-627855-1722429273-1.jpg",
    productName: "Women's Red Love Printed T-Shirt",
    productDescription: "A vibrant red t-shirt with a love print.",
    price: "18.99",
    MRP: "22.99",
    offerPercent: "17",
  },
  {
    productImage:
      "https://images.bewakoof.com/t640/men-s-vapour-blue-beast-within-graphic-printed-super-loose-fit-t-shirt-637219-1718701487-1.jpg",
    productName: "Men's White Graphic T-Shirt",
    productDescription: "A classic white t-shirt with a graphic print.",
    price: "14.99",
    MRP: "18.99",
    offerPercent: "21",
  },
  {
    productImage:
      "https://images.bewakoof.com/t640/women-s-black-ready-to-rave-graphic-printed-oversized-t-shirt-637238-1719480178-1.jpg",
    productName: "Women's Yellow Graphic T-Shirt",
    productDescription: "A cheerful yellow t-shirt with a fun print.",
    price: "17.99",
    MRP: "21.99",
    offerPercent: "18",
  },
];

const products = [
  {
    productName: "Life is Better with Friends T-Shirt",
    productDescription: "A comfortable and stylish oversized t-shirt.",
    price: "19.99",
    MRP: "24.99",
    offerPercent: "20",
    carouselProps: {
      autoplayProps: {
        delay: 4000,
        jump: false,
        stopOnFocusIn: true,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
        stopOnLastSnap: false,
      },
      loop: true,
      slideProps: {
        slides: [
          {
            url: "https://images.bewakoof.com/uploads/grid/app/HC-1x1-CS-common-1722607686.jpg",
          },
          {
            url: "https://images.bewakoof.com/uploads/grid/app/1x1-2024-HC-dotw-common-sponge-1722584795.jpg",
          },
          {
            url: "https://images.bewakoof.com/uploads/grid/app/1x1-2024-HC-cosmic-01-1722834716.jpg",
          },
          {
            url: "https://images.bewakoof.com/uploads/grid/app/1x1-2024-HC-b2OT999-common-1719493923-1722842758.jpg",
          },
          {
            url: "https://images.bewakoof.com/uploads/grid/app/1x1-2024-HC-AIR-common-ezgif-com-optimize-1719843540.gif",
          },
        ],
        slidesPerView: 1,
      },
      arrowProps: {
        arrows: false,
      },
    },
  },
  {
    productName: "Men's Black Graphic T-Shirt",
    productDescription: "A trendy t-shirt with a cool graphic print.",
    price: "15.99",
    MRP: "19.99",
    offerPercent: "20",
    carouselProps: {
      autoplayProps: {
        delay: 4000,
        jump: false,
        stopOnFocusIn: true,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
        stopOnLastSnap: false,
      },
      loop: true,
      slideProps: {
        slides: [
          {
            url: "https://images.bewakoof.com/uploads/grid/app/HC-1x1-CS-common-1722607686.jpg",
          },
          {
            url: "https://images.bewakoof.com/uploads/grid/app/1x1-2024-HC-dotw-common-sponge-1722584795.jpg",
          },
          {
            url: "https://images.bewakoof.com/uploads/grid/app/1x1-2024-HC-cosmic-01-1722834716.jpg",
          },
          {
            url: "https://images.bewakoof.com/uploads/grid/app/1x1-2024-HC-b2OT999-common-1719493923-1722842758.jpg",
          },
          {
            url: "https://images.bewakoof.com/uploads/grid/app/1x1-2024-HC-AIR-common-ezgif-com-optimize-1719843540.gif",
          },
        ],
        slidesPerView: 1,
      },
      arrowProps: {
        arrows: false,
      },
    },
  },
  {
    productName: "Women's Red Love Printed T-Shirt",
    productDescription: "A vibrant red t-shirt with a love print.",
    price: "18.99",
    MRP: "22.99",
    offerPercent: "17",
    carouselProps: {
      autoplayProps: {
        delay: 4000,
        jump: false,
        stopOnFocusIn: true,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
        stopOnLastSnap: false,
      },
      loop: true,
      slideProps: {
        slides: [
          {
            url: "https://images.bewakoof.com/uploads/grid/app/HC-1x1-CS-common-1722607686.jpg",
          },
          {
            url: "https://images.bewakoof.com/uploads/grid/app/1x1-2024-HC-dotw-common-sponge-1722584795.jpg",
          },
          {
            url: "https://images.bewakoof.com/uploads/grid/app/1x1-2024-HC-cosmic-01-1722834716.jpg",
          },
          {
            url: "https://images.bewakoof.com/uploads/grid/app/1x1-2024-HC-b2OT999-common-1719493923-1722842758.jpg",
          },
          {
            url: "https://images.bewakoof.com/uploads/grid/app/1x1-2024-HC-AIR-common-ezgif-com-optimize-1719843540.gif",
          },
        ],
        slidesPerView: 1,
      },
      arrowProps: {
        arrows: false,
      },
    },
  },
  {
    productName: "Men's White Graphic T-Shirt",
    productDescription: "A classic white t-shirt with a graphic print.",
    price: "14.99",
    MRP: "18.99",
    offerPercent: "21",
    carouselProps: {
      autoplayProps: {
        delay: 4000,
        jump: false,
        stopOnFocusIn: true,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
        stopOnLastSnap: false,
      },
      loop: true,
      slideProps: {
        slides: [
          {
            url: "https://images.bewakoof.com/uploads/grid/app/HC-1x1-CS-common-1722607686.jpg",
          },
          {
            url: "https://images.bewakoof.com/uploads/grid/app/1x1-2024-HC-dotw-common-sponge-1722584795.jpg",
          },
          {
            url: "https://images.bewakoof.com/uploads/grid/app/1x1-2024-HC-cosmic-01-1722834716.jpg",
          },
          {
            url: "https://images.bewakoof.com/uploads/grid/app/1x1-2024-HC-b2OT999-common-1719493923-1722842758.jpg",
          },
          {
            url: "https://images.bewakoof.com/uploads/grid/app/1x1-2024-HC-AIR-common-ezgif-com-optimize-1719843540.gif",
          },
        ],
        slidesPerView: 1,
      },
      arrowProps: {
        arrows: false,
      },
    },
  },
  {
    productName: "Women's Yellow Graphic T-Shirt",
    productDescription: "A cheerful yellow t-shirt with a fun print.",
    price: "17.99",
    MRP: "21.99",
    offerPercent: "18",
    carouselProps: {
      autoplayProps: {
        delay: 4000,
        jump: false,
        stopOnFocusIn: true,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
        stopOnLastSnap: false,
      },
      loop: true,
      slideProps: {
        slides: [
          {
            url: "https://images.bewakoof.com/uploads/grid/app/HC-1x1-CS-common-1722607686.jpg",
          },
          {
            url: "https://images.bewakoof.com/uploads/grid/app/1x1-2024-HC-dotw-common-sponge-1722584795.jpg",
          },
          {
            url: "https://images.bewakoof.com/uploads/grid/app/1x1-2024-HC-cosmic-01-1722834716.jpg",
          },
          {
            url: "https://images.bewakoof.com/uploads/grid/app/1x1-2024-HC-b2OT999-common-1719493923-1722842758.jpg",
          },
          {
            url: "https://images.bewakoof.com/uploads/grid/app/1x1-2024-HC-AIR-common-ezgif-com-optimize-1719843540.gif",
          },
        ],
        slidesPerView: 1,
      },
      arrowProps: {
        arrows: false,
      },
    },
  },
];

export default function Home() {
  const [wishlist, setWishlist] = useState<string[]>([]);

  const handleWishlistToggle = (productName: string) => {
    setWishlist((prevWishlist) =>
      prevWishlist.includes(productName)
        ? prevWishlist.filter((name) => name !== productName)
        : [...prevWishlist, productName]
    );
  };

  return (
    <>
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
      <div className="h-[50vh]">
        {carouselData?.map((carouselData: any) => {
          return (
            <MOLCarousel
              arrowProps={carouselData?.arrowProps}
              slideProps={carouselData?.slideProps}
              scrollProps={carouselData?.ScrollProps}
              autoplayProps={carouselData?.autoplayProps}
              loop={carouselData?.loop}
            />
          );
        })}
      </div>
      <div className=" lg:px-0 h-[50vh]">
        {carouselData2?.map((carouselData: any) => {
          return (
            <MOLCarousel
              arrowProps={carouselData?.arrowProps}
              slideProps={carouselData?.slideProps}
              classNamesProps={carouselData?.classNamesProps}
              scrollProps={carouselData?.ScrollProps}
              autoplayProps={carouselData?.autoplayProps}
              loop={carouselData?.loop}
            />
          );
        })}
      </div>
      <div className=" lg:px-0 h-[50vh]">
        {carouselData3?.map((carouselData: any) => {
          return (
            <MOLCarousel
              arrowProps={carouselData?.arrowProps}
              slideProps={carouselData?.slideProps}
              classNamesProps={carouselData?.classNamesProps}
              scrollProps={carouselData?.scrollProps}
              autoplayProps={carouselData?.autoplayProps}
              loop={carouselData?.loop}
            />
          );
        })}
      </div>
      <div className="flex gap-16 container mx-auto">
        <div className="w-fit gap-4">
          <ATMThumbCarousel
            slides={SLIDES?.slideData}
            // variant={SLIDES?.variant}
          />
        </div>
        <div className="w-fit gap-4">
          <ATMThumbCarousel
            slides={SLIDESS?.slideData}
            // variant={SLIDESS?.variant}
          />
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-5 gap-4 py-12">
        {basicProducts.map((product, index) => (
          <MOLProductCardOne
            key={index}
            productImage={product.productImage}
            productName={product.productName}
            productDescription={product.productDescription}
            price={product.price}
            MRP={product.MRP}
            offerPercent={product.offerPercent}
            isWishlisted={wishlist.includes(product.productName)}
            onWishlistToggle={() => handleWishlistToggle(product.productName)}
          />
        ))}
      </div>
      <div className="container mx-auto grid grid-cols-5 gap-4 py-12">
        {products.map((product, index) => (
          <MOLProductCardTwo
            key={index}
            productName={product.productName}
            productDescription={product.productDescription}
            price={product.price}
            MRP={product.MRP}
            offerPercent={product.offerPercent}
            isWishlisted={wishlist.includes(product.productName)}
            onWishlistToggle={() => handleWishlistToggle(product.productName)}
            carouseldata={product?.carouselProps}
          />
        ))}
      </div>
      <div className="container mx-auto grid grid-cols-5 gap-4 py-12">
        {basicProducts.map((product, index) => (
          <MOLProductCardFour
            key={index}
            productImage={product.productImage}
            productName={product.productName}
            productDescription={product.productDescription}
            price={product.price}
            MRP={product.MRP}
            offerPercent={product.offerPercent}
            isWishlisted={wishlist.includes(product.productName)}
            onWishlistToggle={() => handleWishlistToggle(product.productName)}
          />
        ))}
      </div>
      <div className="container mx-auto grid grid-cols-5 gap-4 py-12">
        {products.map((product, index) => (
          <MOLProductCardThree
            key={index}
            productName={product.productName}
            productDescription={product.productDescription}
            price={product.price}
            MRP={product.MRP}
            offerPercent={product.offerPercent}
            isWishlisted={wishlist.includes(product.productName)}
            onWishlistToggle={() => handleWishlistToggle(product.productName)}
            carouseldata={product?.carouselProps}
          />
        ))}
      </div>
    </>
  );
}
