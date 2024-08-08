"use client";
import React from "react";
import { Checkbox } from "../../checkbox";
import ATMTypography from "../ATMTypography/ATMTypography";

type GroupData = {
  label: string;
  value: string;
};

type ATMCheckBoxProps = {
  groupData: GroupData[];
  label: string;
  onChange?: (value: string, checked: boolean) => void;
  inline?: boolean;
  required?: boolean;
  supportText?: string;
  orientation?: "vertical" | "horizontal";
};

const ATMCheckBox = ({
  groupData,
  label,
  onChange,
  inline = false,
  required = false,
  supportText,
  orientation = "vertical",
}: ATMCheckBoxProps) => {
  return (
    <>
      <div
        className={`gap-2 mt-1  min-w-[400px] ${
          inline ? "flex" : "flex flex-col"
        } items-start`}
      >
        {label && (
          <div
            className={` min-w-[200px] ${
              !inline ? "flex items-center gap-2  " : "flex flex-col "
            }`}
          >
            <ATMTypography variant="span" extraClasses="capitalize">
              {label} {required && <span className="text-red-500"> * </span>}
            </ATMTypography>
            <ATMTypography variant="div">
              {supportText && <div>{`(${supportText})`}</div>}
            </ATMTypography>
          </div>
        )}
        <div
          className={`flex gap-1 flex-wrap ${
            orientation === "vertical" ? "flex-col " : ""
          }`}
        >
          {groupData?.map((group) => {
            return (
              <div
                key={group.value}
                className="flex items-center space-x-2  min-w-[80px] "
              >
                <Checkbox
                  id={group.value}
                  onCheckedChange={(checked) =>
                    // onChange(checked , group.value)
                    {}
                  }
                />
                <ATMTypography variant="span">{group.label}</ATMTypography>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ATMCheckBox;
