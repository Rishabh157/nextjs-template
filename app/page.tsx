"use client";

import { useState } from "react";
import ORGHeaderOne from "@/components/ui/organism/ORGHeader/ORGHeaderOne";
import { MOLCarousel } from "@/components/ui/molecule/MOLCarousel/MOLCarousel";
import ORGCategoryNavigationBar from "@/components/ui/organism/ORGCategoryNavigationBar/ORGCategoryNavigationBar";
import MOLProductCardOne from "@/components/ui/molecule/MOLProductCard/MOLProductCardOne";
import ATMTypography from "@/components/ui/atom/ATMTypography/ATMTypography";
import ORGcategoryNavigationBarTwo from "@/components/ui/organism/ORGCategoryNavigationBar/ORGcategoryNavigationBarTwo";
import MOLSectionHeader from "@/components/ui/molecule/MOLSectionHeader/MOLSectionHeader";
import ATMLinkButton from "@/components/ui/atom/ATMButton/ATMLinkButton";
import ATMDropdownMenu from "@/components/ui/atom/ATMDropdownMenu/ATMDropdownMenu";
import { IconUser } from "@tabler/icons-react";

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

const carouselData = [
  {
    autoplayProps: {
      delay: 3000,
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
      slidesPerView: 4,
    },
    arrowProps: {
      arrows: true,
    },
  },
];

const categoryNavigation = [
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
      { id: "electronics-headphones", label: "Headphones", optionUrl: "/" },
    ],
  },
  {
    id: "nav-toys",
    type: "link",
    label: "Toys",
    url: "/toys",
  },
];

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

const categorydata = [
  {
    id: "1",
    imgUrl:
      "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/698ba0cebe456aaf.jpg?q=100",
    text: "Category Name",
  },
  {
    id: "2",
    imgUrl:
      "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/44e10b16e649b691.jpg?q=100",
    text: "Category Name",
  },
  {
    id: "3",
    imgUrl:
      "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/698ba0cebe456aaf.jpg?q=100",
    text: "Category Name",
  },
  {
    id: "4",
    imgUrl:
      "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/698ba0cebe456aaf.jpg?q=100",
    text: "Category Name",
  },
  {
    id: "5",
    imgUrl:
      "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/698ba0cebe456aaf.jpg?q=100",
    text: "Category Name",
  },
  {
    id: "6",
    imgUrl:
      "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/698ba0cebe456aaf.jpg?q=100",
    text: "Category Name",
  },
  {
    id: "7",
    imgUrl:
      "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/698ba0cebe456aaf.jpg?q=100",
    text: "Category Name",
  },
  {
    id: "8",
    imgUrl:
      "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/698ba0cebe456aaf.jpg?q=100",
    text: "Category Name",
  },
];

export default function Home() {
  const menuItems = [
    { id: 1, content: "Profile", onClick: () => alert("Profile clicked") },
    { id: 2, content: <a href="/billing">Billing</a> },
    {
      id: 3,
      content: <div>Team</div>,
      onClick: () => console.log("Team clicked"),
    },
    {
      id: 4,
      content: "Subscription",
      onClick: () => alert("Subscription clicked"),
    },
  ];

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

      {/* <ORGCategoryNavigationBar
        backgroundColor="hsl(var(--primary))"
        textColor="#ffffff"
        navItems={categoryNavigation}
      /> */}

      <ORGcategoryNavigationBarTwo categoryData={categorydata} />

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

      <div className="container mx-auto py-6">
        <MOLSectionHeader
          sectionTitle="Trending Now"
          buttonText="View more"
          buttonLink=""
        />
        <div className="py-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
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
      </div>

      <div className="container mx-auto py-6">
        <div>
          <ATMTypography variant="h5">Shop by category</ATMTypography>
        </div>
        <div className="py-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
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
      </div>

      <div className="container mx-auto flex flex-wrap p-4 px-0 gap-4">
        <ATMLinkButton href="/product-card">Product card</ATMLinkButton>
        <ATMLinkButton href="/carousel">Carousel</ATMLinkButton>
        <ATMLinkButton href="/thumbnail-gallery">
          Thumbnail Gallery
        </ATMLinkButton>
        <ATMLinkButton href="/product-sliders">Product sliders</ATMLinkButton>

        <ATMDropdownMenu
          trigger={
            <div>
              <IconUser />
            </div>
          }
          label="My Account"
          items={menuItems}
        />
      </div>
    </>
  );
}
