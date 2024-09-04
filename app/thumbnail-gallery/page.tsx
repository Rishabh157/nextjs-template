import ATMThumbCarousel from "@/components/ui/atom/ATMThumbCarousel/ATMThumbCarousel";
import React from "react";

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

const page = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex gap-16 container mx-auto">
        <div className="w-fit gap-4">
          <ATMThumbCarousel
            slides={SLIDES?.slideData}
            variant={SLIDES?.variant}
          />
        </div>
        <div className="w-fit gap-4">
          <ATMThumbCarousel
            slides={SLIDESS?.slideData}
            variant={SLIDESS?.variant}
          />
        </div>
      </div>
    </div>
  );
};

export default page;
