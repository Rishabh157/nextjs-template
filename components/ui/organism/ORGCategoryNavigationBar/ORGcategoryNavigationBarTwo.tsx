import React from "react";
import ATMImage from "../../atom/ATMImage/ATMImage";
import ATMTypography from "../../atom/ATMTypography/ATMTypography";
import Link from "next/link";

type categoryProps = {
  id: string;
  imgUrl: string;
  text: string;
};

type Props = {
  categoryData: categoryProps[];
};
const ORGcategoryNavigationBarTwo = ({ categoryData }: Props) => {
  return (
    <div className="flex overflow-x-scroll scroll-hidden gap-4 items-center container mx-auto py-6">
      {categoryData?.map((data: any) => {
        return (
          <Link
            id={data?.id}
            href=""
            className="flex flex-col gap-1 items-center justify-center flex-1"
          >
            <ATMImage extraClasses="h-16 w-16" imgUrl={data?.imgUrl} />
            <ATMTypography
              variant="span"
              extraClasses="text-center line-clamp-2"
            >
              {data?.text}
            </ATMTypography>
          </Link>
        );
      })}
    </div>
  );
};

export default ORGcategoryNavigationBarTwo;
