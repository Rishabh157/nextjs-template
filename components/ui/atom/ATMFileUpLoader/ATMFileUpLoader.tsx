// Mark this file as a client component
"use client";

import React from "react";
import { Input } from "../../input";
import ATMTypography from "../ATMTypography/ATMTypography";

type ATMFileUpLoaderProps = {
  name?: string;
  label: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: "file";
  inline?: boolean;
  disabled?: boolean;
  required?: boolean;
  supportText?: string;
};

const ATMFileUpLoader = ({
  name,
  label,
  placeholder,
  onChange,
  type,
  inline = false,
  disabled = false,
  required = false,
  supportText,
}: ATMFileUpLoaderProps) => {
  return (
    <div className="min-w-[400px] select-none">
      <div className={` gap-2 mt-1 ${inline ? "flex" : "flex flex-col"}`}>
        {label && (
          <ATMTypography variant="span" extraClasses="min-w-[200px] ">
            {" "}
            {label} {required && <span className="text-red-500"> * </span>}
          </ATMTypography>
        )}
        <div className="w-full flex-col flex gap-1 text-[14px] font-medium text-slate-700">
          <div className="relative">
            <Input
              type={type}
              placeholder={placeholder}
              disabled={disabled}
              onChange={(e) => {
                onChange(e);
              }}
            />
          </div>
          <ATMTypography variant="div">{supportText}</ATMTypography>
        </div>
      </div>
    </div>
  );
};

export default ATMFileUpLoader;
