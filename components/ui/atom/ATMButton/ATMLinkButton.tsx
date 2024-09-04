"use client";

import React from "react";
import { Button } from "../../button";
import Link from "next/link";

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
  href: string;
};

const ATMLinkButton = ({
  variant = "default",
  children,
  onClick,
  size = "sm",
  extraClasses,
  icon,
  iconPosition = "start",
  width = "fit",
  href,
}: Props) => {
  return (
    <Link href={href}>
      <Button
        asChild
        variant={variant}
        className={`flex ${
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
    </Link>
  );
};

export default ATMLinkButton;
