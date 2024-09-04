"use client";

import MOLProductCardFour from "@/components/ui/molecule/MOLProductCard/MOLProductCardFour";
import MOLProductCardOne from "@/components/ui/molecule/MOLProductCard/MOLProductCardOne";
import MOLProductCardThree from "@/components/ui/molecule/MOLProductCard/MOLProductCardThree";
import MOLProductCardTwo from "@/components/ui/molecule/MOLProductCard/MOLProductCardTwo";
import React, { useState } from "react";

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

const page = () => {
  const [wishlist, setWishlist] = useState<string[]>([]);

  const handleWishlistToggle = (productName: string) => {
    setWishlist((prevWishlist) =>
      prevWishlist.includes(productName)
        ? prevWishlist.filter((name) => name !== productName)
        : [...prevWishlist, productName]
    );
  };

  return (
    <div>
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
    </div>
  );
};

export default page;
