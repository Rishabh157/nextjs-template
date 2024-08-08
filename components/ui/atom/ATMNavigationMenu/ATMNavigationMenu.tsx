import Link from "next/link";
import React, { useState } from "react";
import ATMTypography from "../ATMTypography/ATMTypography";
import { NavigationMenuProps, Option } from "@/types/navigationMenuType";

const ATMNavigationMenu = ({
  id,
  type,
  label,
  options,
  url,
}: NavigationMenuProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      key={id}
      className="p-4 py-2 flex items-center justify-center group/navigationMenu cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {type === "navigation-menu" ? (
        <>
          <div>
            <ATMTypography variant="span">{label}</ATMTypography>
          </div>
          {isHovered && (
            <div
              className={`absolute z-50 left-0 top-full border shadow-lg p-8 container mx-auto bg-white transition-opacity duration-300 ${
                isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <div className="flex flex-col">
                {options?.map((option: Option) => (
                  <Link
                    href={option.optionUrl}
                    key={option.id}
                    className="py-2"
                  >
                    <ATMTypography variant="p" extraClasses="text-black">
                      {option.label}
                    </ATMTypography>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </>
      ) : (
        type === "link" && (
          <Link href={url || ""} passHref>
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
