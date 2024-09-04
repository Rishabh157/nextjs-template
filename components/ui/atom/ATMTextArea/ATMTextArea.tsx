// Mark this file as a client component
"use client";

import React from "react";
import { Textarea } from "../../textarea";
import ATMTypography from "../ATMTypography/ATMTypography";

type ATMTextAreaProps = {
  name?: string;
  label: string;
  placeholder: string;
  onChange: (e: any) => void;
  inline?: boolean;
  disabled?: boolean;
  required?: boolean;
  supportText?: string;
};

const ATMTextArea = ({
  name,
  label,
  placeholder,
  onChange,
  inline = false,
  disabled = false,
  required = false,
  supportText,
}: ATMTextAreaProps) => {
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
            <Textarea
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

export default ATMTextArea;
