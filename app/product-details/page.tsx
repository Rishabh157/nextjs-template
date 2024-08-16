"use client";

import ATMButton from "@/components/ui/atom/ATMButton/ATMButton";
import ATMImage from "@/components/ui/atom/ATMImage/ATMImage";
import ATMInput from "@/components/ui/atom/ATMInput/ATMInput";
import ATMThumbCarousel from "@/components/ui/atom/ATMThumbCarousel/ATMThumbCarousel";
import ATMTypography from "@/components/ui/atom/ATMTypography/ATMTypography";
import ORGHeaderOne from "@/components/ui/organism/ORGHeader/ORGHeaderOne";
import { Separator } from "@/components/ui/separator";
import {
  IconHeart,
  IconShoppingCart,
  IconStarFilled,
  IconStarHalfFilled,
  IconThumbDown,
  IconThumbUp,
} from "@tabler/icons-react";
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

      <div className="container py-6 mx-auto">
        <div className="flex gap-8 relative">
          {/* gallery */}
          <div className="sticky top-20 h-fit">
            <ATMThumbCarousel
              slides={SLIDES?.slideData}
              variant={SLIDES?.variant}
            />
          </div>
          {/* Product details */}
          <div className="flex flex-col gap-4">
            <div className="flex items-end gap-1 p-2 py-1 bg-primary-foreground border rounded w-fit">
              <IconStarFilled size={14} color="#ffc700" />
              <ATMTypography
                variant="div"
                extraClasses="font-semibold leading-none"
              >
                5.0
              </ATMTypography>
              <ATMTypography
                variant="div"
                extraClasses="font-medium leading-none"
              >
                (100+)
              </ATMTypography>
            </div>

            <div>
              <ATMTypography variant="h5">Product Name</ATMTypography>
              <ATMTypography variant="span">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Impedit, adipisci! Consequatur ut nostrum ea quisquam fugiat,
                nesciunt maxime fuga temporibus eaque dignissimos consequuntur
                veritatis odio repellat, officia asperiores animi earum!
              </ATMTypography>
            </div>

            <Separator />

            <div className="flex flex-col gap-2">
              <ATMTypography variant="span">Sizes</ATMTypography>
              <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <div className="border px-2 py-1 rounded-sm flex items-center justify-center hover:bg-primary-background cursor-pointer">
                    <ATMTypography variant="p" extraClasses="">
                      S
                    </ATMTypography>
                  </div>
                  <div className="border px-2 py-1 rounded-sm flex items-center justify-center hover:bg-primary-background cursor-pointer">
                    <ATMTypography variant="p" extraClasses="">
                      M
                    </ATMTypography>
                  </div>
                  <div className="border px-2 py-1 rounded-sm flex items-center justify-center hover:bg-primary-background cursor-pointer">
                    <ATMTypography variant="p" extraClasses="">
                      L
                    </ATMTypography>
                  </div>
                  <div className="border px-2 py-1 rounded-sm flex items-center justify-center hover:bg-primary-background cursor-pointer">
                    <ATMTypography variant="p" extraClasses="">
                      XL
                    </ATMTypography>
                  </div>
                  <div className="border px-2 py-1 rounded-sm flex items-center justify-center hover:bg-primary-background cursor-pointer">
                    <ATMTypography variant="p" extraClasses="">
                      XXL
                    </ATMTypography>
                  </div>
                  <div className="border px-2 py-1 rounded-sm flex items-center justify-center hover:bg-primary-background cursor-pointer">
                    <ATMTypography variant="p" extraClasses="">
                      XXXL
                    </ATMTypography>
                  </div>
                </div>
                <ATMButton variant="link">Size Chart</ATMButton>
              </div>
            </div>

            <div className="flex gap-2 items-baseline">
              <ATMTypography variant="h6" extraClasses="font-semibold">
                $1200
              </ATMTypography>
              <ATMTypography variant="span" extraClasses="line-through">
                $1400
              </ATMTypography>
              <ATMTypography
                variant="p"
                extraClasses="text-green-700 font-bold"
              >
                (20% Off)
              </ATMTypography>
            </div>

            <div className="flex gap-4">
              <ATMButton icon={<IconShoppingCart />} width="full" size={"lg"}>
                <ATMTypography variant="p">Add to cart</ATMTypography>
              </ATMButton>
              <ATMButton
                variant={"outline"}
                icon={<IconHeart />}
                width="full"
                size={"lg"}
              >
                <ATMTypography variant="p">Wishlist this product</ATMTypography>
              </ATMButton>
            </div>

            <Separator />

            <div className="flex flex-col gap-1">
              <ATMTypography variant="p" extraClasses="font-semibold">
                Check Delivery
              </ATMTypography>

              <div className="flex gap-2 items-center">
                <ATMInput
                  label=""
                  placeholder="Enter Delivery Pincode"
                  onChange={() => {}}
                  type="text"
                />
                <ATMButton variant={"ghost"}>Check</ATMButton>
              </div>
            </div>

            <div>
              <ATMTypography variant="p" extraClasses="font-semibold uppercase">
                Product Description
              </ATMTypography>
              <ATMTypography
                variant="span"
                extraClasses="text-muted-foreground"
              >
                Inspired by the original that debuted in 1985, the Air Jordan 1
                Low offers a clean, classic look that's familiar yet always
                fresh. With an iconic design that pairs perfectly with any 'fit,
                these kicks ensure you'll always be on point.
              </ATMTypography>
            </div>

            <div>
              <ATMTypography variant="p" extraClasses="font-semibold">
                Specifications
              </ATMTypography>
              <div className="py-4 grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <ATMTypography
                    variant="div"
                    extraClasses="text-muted-foreground"
                  >
                    Stats
                  </ATMTypography>
                  <ATMTypography variant="p">one</ATMTypography>
                  <ATMTypography variant="p">one</ATMTypography>
                </div>
                <div className="flex flex-col">
                  <ATMTypography
                    variant="div"
                    extraClasses="text-muted-foreground"
                  >
                    Stats
                  </ATMTypography>
                  <ATMTypography variant="p">one</ATMTypography>
                  <ATMTypography variant="p">one</ATMTypography>
                </div>
                <div className="flex flex-col">
                  <ATMTypography
                    variant="div"
                    extraClasses="text-muted-foreground"
                  >
                    Stats
                  </ATMTypography>
                  <ATMTypography variant="p">one</ATMTypography>
                  <ATMTypography variant="p">one</ATMTypography>
                </div>
                <div className="flex flex-col">
                  <ATMTypography
                    variant="div"
                    extraClasses="text-muted-foreground"
                  >
                    Stats
                  </ATMTypography>
                  <ATMTypography variant="p">one</ATMTypography>
                  <ATMTypography variant="p">one</ATMTypography>
                </div>
                <div className="flex flex-col">
                  <ATMTypography
                    variant="div"
                    extraClasses="text-muted-foreground"
                  >
                    Stats
                  </ATMTypography>
                  <ATMTypography variant="p">one</ATMTypography>
                  <ATMTypography variant="p">one</ATMTypography>
                </div>
                <div className="flex flex-col">
                  <ATMTypography
                    variant="div"
                    extraClasses="text-muted-foreground"
                  >
                    Stats
                  </ATMTypography>
                  <ATMTypography variant="p">one</ATMTypography>
                  <ATMTypography variant="p">one</ATMTypography>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <ATMTypography variant="p" extraClasses="font-semibold">
                Reviews and Ratings
              </ATMTypography>
              <div className="flex items-center gap-2">
                <div className="flex-1">
                  <div className="flex items-baseline gap-2">
                    <ATMTypography variant="h4" extraClasses="font-semibold">
                      4.5{" "}
                    </ATMTypography>
                    <ATMTypography variant="span">
                      out of 1000+ Ratings
                    </ATMTypography>
                  </div>
                  <div className="flex gap-2">
                    <IconStarFilled color="var(--primary)" size={22} />
                    <IconStarFilled color="var(--primary)" size={22} />
                    <IconStarFilled color="var(--primary)" size={22} />
                    <IconStarFilled color="var(--primary)" size={22} />
                    <IconStarHalfFilled size={22} />
                  </div>
                </div>
                <Separator orientation="vertical" />
                <div className="flex flex-col gap-1 flex-1">
                  <div className="flex flex-1 gap-4 items-center rounded-full">
                    <div className="flex items-center gap-2">
                      <ATMTypography variant="p">5</ATMTypography>
                      <IconStarFilled color="var(--primary)" size={16} />
                    </div>
                    <div className="h-1 w-full bg-gray-500"></div>
                  </div>
                  <div className="flex flex-1 gap-4 items-center rounded-full">
                    <div className="flex items-center gap-2">
                      <ATMTypography variant="p">4</ATMTypography>
                      <IconStarFilled color="var(--primary)" size={16} />
                    </div>
                    <div className="h-1 w-full bg-gray-500"></div>
                  </div>
                  <div className="flex flex-1 gap-4 items-center rounded-full">
                    <div className="flex items-center gap-2">
                      <ATMTypography variant="p">3</ATMTypography>
                      <IconStarFilled color="var(--primary)" size={16} />
                    </div>
                    <div className="h-1 w-full bg-gray-500"></div>
                  </div>
                  <div className="flex flex-1 gap-4 items-center rounded-full">
                    <div className="flex items-center gap-2">
                      <ATMTypography variant="p">2</ATMTypography>
                      <IconStarFilled color="var(--primary)" size={16} />
                    </div>
                    <div className="h-1 w-full bg-gray-500"></div>
                  </div>
                  <div className="flex flex-1 gap-4 items-center rounded-full">
                    <div className="flex items-center gap-2">
                      <ATMTypography variant="p">1</ATMTypography>
                      <IconStarFilled color="var(--primary)" size={16} />
                    </div>
                    <div className="h-1 w-full bg-gray-500"></div>
                  </div>
                </div>
              </div>
              <Separator />
              <div className="flex flex-col gap-4">
                <ATMTypography variant="p">Customer Images</ATMTypography>
                <div className="flex gap-4">
                  <div className="w-20 h-20 overflow-hidden rounded-sm aspect-square">
                    <ATMImage
                      extraClasses="h-full w-full"
                      imgUrl="https://images.bewakoof.com/uploads/grid/app/HC-1x1-CS-common-1722607686.jpg"
                    />
                  </div>
                  <div className="w-20 h-20 overflow-hidden rounded-sm aspect-square">
                    <ATMImage
                      extraClasses="h-full w-full"
                      imgUrl="https://images.bewakoof.com/uploads/grid/app/HC-1x1-CS-common-1722607686.jpg"
                    />
                  </div>
                  <div className="w-20 h-20 overflow-hidden rounded-sm aspect-square">
                    <ATMImage
                      extraClasses="h-full w-full"
                      imgUrl="https://images.bewakoof.com/uploads/grid/app/HC-1x1-CS-common-1722607686.jpg"
                    />
                  </div>
                  <div className="w-20 h-20 overflow-hidden rounded-sm aspect-square">
                    <ATMImage
                      extraClasses="h-full w-full"
                      imgUrl="https://images.bewakoof.com/uploads/grid/app/HC-1x1-CS-common-1722607686.jpg"
                    />
                  </div>
                  <div className="w-20 h-20 overflow-hidden rounded-sm aspect-square">
                    <ATMImage
                      extraClasses="h-full w-full"
                      imgUrl="https://images.bewakoof.com/uploads/grid/app/HC-1x1-CS-common-1722607686.jpg"
                    />
                  </div>
                  <div className="w-20 h-20 overflow-hidden rounded-sm aspect-square">
                    <ATMImage
                      extraClasses="h-full w-full"
                      imgUrl="https://images.bewakoof.com/uploads/grid/app/HC-1x1-CS-common-1722607686.jpg"
                    />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="flex flex-col gap-2">
                <div className="px-1 rounded-sm text-yellow-600 bg-yellow-100 flex gap-1 items-center w-fit">
                  <ATMTypography variant="div">5</ATMTypography>
                  <IconStarFilled size={14} />
                </div>
                <ATMTypography variant="span">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Cupiditate harum est hic, odit labore voluptatum recusandae
                  sequi placeat assumenda sunt eaque doloribus quos optio rerum
                  aspernatur facilis. Officiis, tenetur recusandae?
                </ATMTypography>

                <div className="flex gap-4">
                  <div className="w-16 h-16 overflow-hidden rounded-sm aspect-square">
                    <ATMImage
                      extraClasses="h-full w-full"
                      imgUrl="https://images.bewakoof.com/uploads/grid/app/HC-1x1-CS-common-1722607686.jpg"
                    />
                  </div>
                  <div className="w-16 h-16 overflow-hidden rounded-sm aspect-square">
                    <ATMImage
                      extraClasses="h-full w-full"
                      imgUrl="https://images.bewakoof.com/uploads/grid/app/HC-1x1-CS-common-1722607686.jpg"
                    />
                  </div>
                </div>
                <div className="flex justify-between items-center mt-6">
                  <div className="flex gap-4 items-center">
                    <span className="flex items-center gap-2">
                      <IconThumbUp size={18} />
                      <ATMTypography variant="span">100</ATMTypography>
                    </span>
                    <span className="flex items-center gap-2">
                      <IconThumbDown size={18} />
                      <ATMTypography variant="span">100</ATMTypography>
                    </span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <ATMTypography variant="span">Anuj joshi</ATMTypography>-
                    <ATMTypography variant="span">Aug 20</ATMTypography>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="flex flex-col gap-2">
                <div className="px-1 rounded-sm text-yellow-600 bg-yellow-100 flex gap-1 items-center w-fit">
                  <ATMTypography variant="div">5</ATMTypography>
                  <IconStarFilled size={14} />
                </div>
                <ATMTypography variant="span">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Cupiditate harum est hic, odit labore voluptatum recusandae
                  sequi placeat assumenda sunt eaque doloribus quos optio rerum
                  aspernatur facilis. Officiis, tenetur recusandae?
                </ATMTypography>

                <div className="flex gap-4">
                  <div className="w-16 h-16 overflow-hidden rounded-sm aspect-square">
                    <ATMImage
                      extraClasses="h-full w-full"
                      imgUrl="https://images.bewakoof.com/uploads/grid/app/HC-1x1-CS-common-1722607686.jpg"
                    />
                  </div>
                  <div className="w-16 h-16 overflow-hidden rounded-sm aspect-square">
                    <ATMImage
                      extraClasses="h-full w-full"
                      imgUrl="https://images.bewakoof.com/uploads/grid/app/HC-1x1-CS-common-1722607686.jpg"
                    />
                  </div>
                </div>
                <div className="flex justify-between items-center mt-6">
                  <div className="flex gap-4 items-center">
                    <span className="flex items-center gap-2">
                      <IconThumbUp size={18} />
                      <ATMTypography variant="span">100</ATMTypography>
                    </span>
                    <span className="flex items-center gap-2">
                      <IconThumbDown size={18} />
                      <ATMTypography variant="span">100</ATMTypography>
                    </span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <ATMTypography variant="span">Anuj joshi</ATMTypography>-
                    <ATMTypography variant="span">Aug 20</ATMTypography>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
