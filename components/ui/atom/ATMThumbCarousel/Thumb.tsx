import React from "react";
import ATMImage from "../ATMImage/ATMImage";

type PropType = {
  selected: boolean;
  index: number;
  onClick: () => void;
  imgUrl: string;
};

export const Thumb: React.FC<PropType> = (props) => {
  const { selected, onClick, imgUrl } = props;

  return (
    <div
      className={`embla-thumbs__slide border rounded-md aspect-square w-14 overflow-hidden${
        selected ? "" : ""
      }`}
    >
      <div onClick={onClick} className="h-full w-full">
        <ATMImage imgUrl={imgUrl} extraClasses="h-full w-full" />
      </div>
    </div>
  );
};
