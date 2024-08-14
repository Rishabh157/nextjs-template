"use client";

import ATMButton from "@/components/ui/atom/ATMButton/ATMButton";
import ATMImage from "@/components/ui/atom/ATMImage/ATMImage";
import ATMInput from "@/components/ui/atom/ATMInput/ATMInput";
import ATMTypography from "@/components/ui/atom/ATMTypography/ATMTypography";
import { Separator } from "@/components/ui/separator";
import { IconX } from "@tabler/icons-react";
import React from "react";

const page = () => {
  return (
    <div className="bg-muted min-h-screen">
      <div className="p-4 border-b bg-white">header</div>
      <div className="container mx-auto py-6 flex gap-6 h-full px-44">
        <div className="flex-1 flex flex-col gap-2">
          <div>Items: 2</div>
          <div className="relative p-2 border flex items-start gap-4 bg-white shadow-sm rounded-md">
            <ATMImage
              extraClasses="h-24 w-24 rounded-sm overflow-hidden"
              imgUrl="https://images.bewakoof.com/uploads/grid/app/HC-1x1-CS-common-1722607686.jpg"
            />
            <div className="flex flex-col gap-1">
              <span>
                <ATMTypography variant="p">ProductName</ATMTypography>
                <ATMTypography variant="div">ProductDescrption</ATMTypography>
              </span>
              <div className="flex gap-2 items-baseline">
                <ATMTypography variant="span" extraClasses="font-semibold">
                  $1200
                </ATMTypography>
                <ATMTypography variant="div" extraClasses="line-through">
                  $1400
                </ATMTypography>
                <ATMTypography
                  variant="span"
                  extraClasses="text-green-700 font-bold"
                >
                  (20% Off)
                </ATMTypography>
              </div>
            </div>
            <div className="absolute top-0 right-0">
              <ATMButton
                size={"icon"}
                variant={"link"}
                icon={<IconX size={16} />}
              ></ATMButton>
            </div>
          </div>
          <div className="p-2 border flex items-start gap-4 bg-white shadow-sm rounded-md">
            <ATMImage
              extraClasses="h-24 w-24 rounded-sm overflow-hidden"
              imgUrl="https://images.bewakoof.com/uploads/grid/app/HC-1x1-CS-common-1722607686.jpg"
            />
            <div className="flex flex-col gap-1">
              <span>
                <ATMTypography variant="p">ProductName</ATMTypography>
                <ATMTypography variant="div">ProductDescrption</ATMTypography>
              </span>
              <div className="flex gap-2 items-baseline">
                <ATMTypography variant="span" extraClasses="font-semibold">
                  $1200
                </ATMTypography>
                <ATMTypography variant="div" extraClasses="line-through">
                  $1400
                </ATMTypography>
                <ATMTypography
                  variant="span"
                  extraClasses="text-green-700 font-bold"
                >
                  (20% Off)
                </ATMTypography>
              </div>
            </div>
          </div>
        </div>
        <div className="w-fit flex flex-col gap-4">
          <div className="border p-4 rounded-sm relative bg-white shadow-sm flex flex-col gap-4">
            <div className="flex gap-2 items-end">
              <ATMInput
                label="Have Coupon?"
                placeholder="Enter coupon code"
                type="text"
                onChange={() => {}}
              />
              <ATMButton>Apply</ATMButton>
            </div>
            {/* <Separator /> */}
            <ATMTypography variant="span" extraClasses="text-primary">
              Show available coupons
            </ATMTypography>
          </div>
          <div className="border p-4 rounded-sm bg-white shadow-sm">
            Summary
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
