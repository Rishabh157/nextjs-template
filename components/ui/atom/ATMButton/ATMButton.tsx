"use client";

import React from "react";
import { Button } from "../../button";

type Props = {
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | null
    | undefined;
  children?: any;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  size?: "default" | "sm" | "lg" | "icon" | null | undefined;
  extraClasses?: string;
  icon?: any;
  iconPosition?: "start" | "end";
  width?: "full" | "fit";
};
const ATMButton = ({
  variant = "default",
  children,
  onClick,
  size = "sm",
  extraClasses,
  icon,
  iconPosition = "start",
  width = "fit",
}: Props) => {
  return (
    // <Button
    //   asChild={asChild}
    //   variant={variant}
    //   className={`flex gap-2 items-center
    //             ${iconPosition === "start" ? "" : "flex-row-reverse"}
    //             ${width === "full" ? "w-full" : "w-fit"} ${extraClasses}`}
    //   onClick={onClick}
    //   size={size}
    // >
    //   <div
    //     className={`flex gap-2 items-center ${
    //       iconPosition === "start" ? "" : "flex-row-reverse"
    //     }`}
    //   >
    //     {icon && <div className="">{icon}</div>}
    //     {children}
    //   </div>
    // </Button>
    <Button
      variant={variant}
      className={`  ${
        width === "full" ? "w-full" : "w-fit"
      } ${extraClasses} ${extraClasses}`}
      onClick={onClick}
      size={size}
    >
      <span
        className={`flex gap-2 items-center ${
          iconPosition === "start" ? "" : "flex-row-reverse"
        }`}
      >
        {icon && <div className="">{icon}</div>}
        {children}
      </span>
    </Button>
  );
};

export default ATMButton;
