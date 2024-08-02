import Image from "next/image";
import React from "react";

type Props = {
  imgUrl: string;
  extraClasses?: string;
};
const ATMImage = ({ imgUrl, extraClasses }: Props) => {
  return (
    <div className={`${extraClasses}`}>
      <div className="unset-img">
        <Image fill sizes="100%" className="custom-img" src={imgUrl} alt="" />
      </div>
    </div>
  );
};

export default ATMImage;
