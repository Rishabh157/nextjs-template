// Mark this file as a client component
"use client";

import React, { useState } from "react";
import { Input } from "../../input";
import { IconEye, IconEyeOff } from "@tabler/icons-react";
import ATMTypography from "../ATMTypography/ATMTypography";
import { ErrorMessage } from "formik";

type ATMPasswordProps = {
  label: string;
  value: string;
  name: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inline?: boolean;
  disabled?: boolean;
  required?: boolean;
  supportText?: string;
};

const ATMPassword = ({
  label,
  value,
  name,
  placeholder,
  onChange,
  inline = false,
  disabled = false,
  required = false,
  supportText,
}: ATMPasswordProps) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

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
              value={value}
              type={isShowPassword ? "text" : "password"}
              placeholder={placeholder}
              disabled={disabled}
              onChange={(e) => {
                onChange(e);
              }}
            />
            <div
              onClick={() => setIsShowPassword((prev) => !prev)}
              className={`text-xl text-slate-500 cursor-pointer absolute top-2 right-5 `}
            >
              {isShowPassword ? <IconEyeOff /> : <IconEye />}
            </div>
          </div>

          <div className="relative">
            <ATMTypography variant="div">{supportText}</ATMTypography>
            {name && (
              <ErrorMessage name={name}>
                {(errMsg) => (
                  <ATMTypography
                    variant="div"
                    extraClasses=" bg-white  absolute top-[-3px] text-red-500 w-full "
                  >
                    {errMsg}
                  </ATMTypography>
                )}
              </ErrorMessage>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ATMPassword;
