import React from "react";
import { RadioGroup, RadioGroupItem } from "../../radio-group";
import ATMTypography from "../ATMTypography/ATMTypography";
import { ErrorMessage } from "formik";
type ATMRadioGroupProps = {
  groupData: any;
  label: string;
  value: string;
  name: string;
  onChange: (e: any) => void;
  inline?: boolean;
  required?: boolean;
  supportText?: string;
  orientation?: "vertical" | "horizontal ";
};
const ATMRadioGroup = ({
  groupData,
  label,
  value,
  name,
  onChange,
  inline = false,
  required = false,
  supportText,
  orientation,
}: ATMRadioGroupProps) => {
  return (
    <div className="min-w-[400px] select-none">
      <div
        className={` gap-2 mt-1 ${
          inline ? "flex" : "flex flex-col"
        } items-start`}
      >
        {label && (
          <div
            className={`min-w-[200px]   ${
              !inline ? "flex items-center gap-2" : "flex flex-col"
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
        <RadioGroup
          value={value}
          defaultValue="comfortable"
          className={`flex flex-wrap ${
            orientation === "vertical" && "flex-col"
          }`}
          onValueChange={(e) => {
            onChange(e);
          }}
        >
          {groupData?.map((gorup: any) => {
            return (
              <div className="flex items-center space-x-2 min-w-[80px]">
                <RadioGroupItem value={gorup?.label} id={gorup?.value} />
                <ATMTypography variant="span">{gorup?.label}</ATMTypography>
              </div>
            );
          })}
          <div>
            {name && (
              <ErrorMessage name={name}>
                {(errMsg) => (
                  <ATMTypography
                    variant="div"
                    extraClasses=" bg-white   text-red-500 w-full"
                  >
                    {errMsg}
                  </ATMTypography>
                )}
              </ErrorMessage>
            )}
          </div>
        </RadioGroup>
      </div>
    </div>
  );
};

export default ATMRadioGroup;
