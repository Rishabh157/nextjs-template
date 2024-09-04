import React from "react";
import ATMImage from "../../atom/ATMImage/ATMImage";
type Props = {
  count: number;
};
const ORGBanner = ({ count }: Props) => {
  return (
    <div className={`grid grid-cols-${count} p-4 gap-4`}>
      <div className="w-full aspect-square overflow-hidden">
        <ATMImage
          extraClasses=""
          imgUrl="https://images.pexels.com/photos/6249454/pexels-photo-6249454.jpeg?auto=compress&cs=tinysrgb&w=600"
        />
      </div>
      <div className="w-full aspect-square overflow-hidden">
        <ATMImage
          extraClasses=""
          imgUrl="https://images.pexels.com/photos/6249454/pexels-photo-6249454.jpeg?auto=compress&cs=tinysrgb&w=600"
        />
      </div>
      <div className="w-full aspect-square overflow-hidden">
        <ATMImage
          extraClasses=""
          imgUrl="https://images.pexels.com/photos/6249454/pexels-photo-6249454.jpeg?auto=compress&cs=tinysrgb&w=600"
        />
      </div>
    </div>
  );
};

export default ORGBanner;
