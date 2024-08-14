// Mark this file as a client component
"use client";

import React from "react";
import { Input } from "../../input";
import ATMTypography from "../ATMTypography/ATMTypography";
import { ErrorMessage } from "formik";

type ATMInputProps = {
  name?: string;
  label: string;
  value?: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: "email" | "text";
  inline?: boolean;
  disabled?: boolean;
  required?: boolean;
  supportText?: string;
};

const ATMInput = ({
  value,
  name,
  label,
  placeholder,
  onChange,
  type,
  inline = false,
  disabled = false,
  required = false,
  supportText,
}: ATMInputProps) => {
  return (
    <div className="min-w-[300px] select-none">
      <div className={` gap-2 mt-1 ${inline ? "flex" : "flex flex-col"}`}>
        {label && (
          <ATMTypography variant="span" extraClasses="min-w-[200px] ">
            {" "}
            {label} {required && <span className="text-red-500"> * </span>}
          </ATMTypography>
        )}
        <div className="w-full flex-col flex gap-1">
          <div>
            <Input
              value={value}
              type={type}
              placeholder={placeholder}
              disabled={disabled}
              onChange={(e) => {
                onChange(e);
              }}
            />
          </div>

          {supportText && (
            <div className="relative">
              <ATMTypography variant="div">{supportText}</ATMTypography>
              {name && (
                <ErrorMessage name={name}>
                  {(errMsg) => (
                    <ATMTypography
                      variant="div"
                      extraClasses=" bg-white  absolute top-[-3px] text-red-500 w-full"
                    >
                      {errMsg}
                    </ATMTypography>
                  )}
                </ErrorMessage>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ATMInput;
