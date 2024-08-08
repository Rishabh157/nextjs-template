import Link from "next/link";
import React, { useState } from "react";
import ATMTypography from "../ATMTypography/ATMTypography";

type Props = {
  type: "navigation-menu" | "link";
  label: string;
  options?: { id: string; label: string; optionUrl: string }[];
  url?: string;
};

const ATMNavigationMenu = ({ type, label, options, url }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`p-4 flex items-center justify-center group/navigationMenu ${
        isHovered
          ? "border-b-4 border-primary cursor-pointer"
          : "border-b-4 border-transparent"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {type === "navigation-menu" ? (
        <>
          <div>
            <ATMTypography variant="p">{label}</ATMTypography>
          </div>
          {isHovered && (
            <div
              className={`absolute z-50 left-0 top-full border shadow-lg p-8 container mx-auto bg-white transition-opacity duration-700 ${
                isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <div className="flex flex-col">
                {options?.map((option) => (
                  <Link
                    href={option?.optionUrl}
                    key={option?.id}
                    className="py-2"
                  >
                    {option?.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </>
      ) : (
        type === "link" && (
          <Link href={url || ""}>
            <div className="cursor-pointer">
              <ATMTypography variant="p">{label}</ATMTypography>
            </div>
          </Link>
        )
      )}
    </div>
  );
};

export default ATMNavigationMenu;
