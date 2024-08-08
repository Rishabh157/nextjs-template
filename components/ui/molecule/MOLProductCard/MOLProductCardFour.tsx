import React from "react";
import ATMImage from "../../atom/ATMImage/ATMImage";
import ATMTypography from "../../atom/ATMTypography/ATMTypography";
import {
  IconHeart,
  IconHeartFilled,
  IconStarFilled,
} from "@tabler/icons-react";
import Link from "next/link";

type Props = {
  productImage: string;
  productName: string;
  productDescription: string;
  price: string;
  MRP: string;
  offerPercent: string;
  isWishlisted: boolean;
  onWishlistToggle: () => void;
};
const MOLProductCardFour = ({
  productImage,
  productName,
  productDescription,
  price,
  MRP,
  offerPercent,
  isWishlisted,
  onWishlistToggle,
}: Props) => {
  const handleWishlistClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    onWishlistToggle();
  };

  return (
    <Link href="" className="flex flex-col h-96">
      <div className="relative flex-1">
        <ATMImage extraClasses="w-full h-full" imgUrl={productImage} />
        <div
          className="p-2 bg-white bg-opacity-20 absolute right-0 top-0 rounded-full m-2 cursor-pointer"
          onClick={handleWishlistClick}
        >
          {isWishlisted ? (
            <IconHeartFilled size={22} color="red" />
          ) : (
            <IconHeart size={22} />
          )}
        </div>
      </div>
      <div className="flex flex-col gap-2 pt-2">
        <div className="flex items-end gap-1">
          <IconStarFilled size={14} color="#ffc700" />
          <ATMTypography
            variant="div"
            extraClasses="font-semibold leading-none"
          >
            5.0
          </ATMTypography>
          <ATMTypography
            variant="div"
            extraClasses="text-muted-foreground font-medium leading-none"
          >
            (100+)
          </ATMTypography>
        </div>
        <div>
          <ATMTypography variant="p" extraClasses="font-medium line-clamp-1">
            {productName}
          </ATMTypography>
          <ATMTypography variant="div" extraClasses="line-clamp-1">
            {productDescription}
          </ATMTypography>
        </div>
        <div className="flex items-end gap-2 mt-2">
          <ATMTypography variant="p" extraClasses="font-semibold leading-none">
            ${price}
          </ATMTypography>
          <ATMTypography
            variant="div"
            extraClasses="line-through leading-none text-muted-foreground"
          >
            ${MRP}
          </ATMTypography>
          <ATMTypography
            variant="div"
            extraClasses="text-green-600 font-bold leading-none"
          >
            {offerPercent}% OFF
          </ATMTypography>
        </div>
      </div>
    </Link>
  );
};

export default MOLProductCardFour;
