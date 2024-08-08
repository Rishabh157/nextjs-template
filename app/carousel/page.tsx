import ATMThumbCarousel from "@/components/ui/atom/ATMThumbCarousel/ATMThumbCarousel";
import { MOLCarousel } from "@/components/ui/molecule/MOLCarousel/MOLCarousel";
import React from "react";

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

const page = () => {
  return (
    <div className="container mx-auto p-4 flex flex-col gap-4">
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
      <div className="h-[50vh]">
        {carouselData2?.map((carouselData: any) => {
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
      <div className="h-[50vh]">
        {carouselData3?.map((carouselData: any) => {
          return (
            <MOLCarousel
              arrowProps={carouselData?.arrowProps}
              slideProps={carouselData?.slideProps}
              scrollProps={carouselData?.scrollProps}
              autoplayProps={carouselData?.autoplayProps}
              loop={carouselData?.loop}
            />
          );
        })}
      </div>
    </div>
  );
};

export default page;
