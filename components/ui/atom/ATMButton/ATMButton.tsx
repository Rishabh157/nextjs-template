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
  borderRadius?: "none" | "sm" | "md";
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
  borderRadius = "sm",
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
      className={` 
        ${
          borderRadius === "sm"
            ? "rounded"
            : borderRadius === "md"
            ? "rounded-sm"
            : borderRadius === "none"
            ? "border-none"
            : ""
        }
        
        ${
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
