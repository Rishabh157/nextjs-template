"use client";
import React from "react";
import { Checkbox } from "../../checkbox";
import ATMTypography from "../ATMTypography/ATMTypography";
import { ErrorMessage } from "formik";

type GroupData = {
  label: string;
  value: string;
};

type ATMCheckBoxProps = {
  name?: string;
  value: string[];
  groupData: GroupData[];
  label: string;
  onChange: (value: string[]) => void;
  inline?: boolean;
  required?: boolean;
  supportText?: string;
  orientation?: "vertical" | "horizontal";
};

const ATMCheckBox: React.FC<ATMCheckBoxProps> = ({
  groupData,
  label,
  value,
  name,
  onChange,
  inline = false,
  required = false,
  supportText,
  orientation = "vertical",
}) => {
  const handleCheckboxChange = (groupValue: string, checked: boolean) => {
    const updatedValues = checked
      ? [...value, groupValue]?.filter(
          (val, index, self) => self?.indexOf(val) === index
        )
      : value?.filter((val) => val !== groupValue);
    onChange(updatedValues);
  };

  return (
    <div
      className={`gap-2 mt-1 min-w-[400px] ${
        inline ? "flex items-start" : "flex flex-col"
      }`}
    >
      {label && (
        <div
          className={`min-w-[200px] ${
            inline ? "flex flex-col" : "flex items-center gap-2"
          }`}
        >
          <ATMTypography variant="span" extraClasses="capitalize">
            {label} {required && <span className="text-red-500"> *</span>}
          </ATMTypography>
          {supportText && (
            <ATMTypography variant="div">
              <span>{`(${supportText})`}</span>
            </ATMTypography>
          )}
        </div>
      )}
      <div
        className={`flex gap-1 flex-wrap ${
          orientation === "vertical" ? "flex-col" : ""
        }`}
      >
        {groupData.map(({ label: groupLabel, value: groupValue }) => (
          <div
            key={groupValue}
            className="flex items-center space-x-2 min-w-[80px]"
          >
            <Checkbox
              id={groupValue}
              checked={value.includes(groupValue)}
              onCheckedChange={(checked) =>
                handleCheckboxChange(groupValue, checked as boolean)
              }
            />
            <ATMTypography variant="span">{groupLabel}</ATMTypography>
          </div>
        ))}
        {name && (
          <ErrorMessage name={name}>
            {(errMsg) => (
              <ATMTypography
                variant="div"
                extraClasses="bg-white text-red-500 w-full"
              >
                {errMsg}
              </ATMTypography>
            )}
          </ErrorMessage>
        )}
      </div>
    </div>
  );
};

export default ATMCheckBox;
