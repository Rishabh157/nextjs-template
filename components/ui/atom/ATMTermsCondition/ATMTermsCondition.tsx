import React, { ReactNode } from "react";
import ATMTypography from "../ATMTypography/ATMTypography";
import { Checkbox } from "../../checkbox";
import { ErrorMessage } from "formik";
type ATMTermsConditionProps = {
  name?: string;
  value: boolean;
  terms: ReactNode;
  onChange: (checked: any) => void;
  inline?: boolean;
};
const ATMTermsCondition = ({
  name,
  value,
  terms,
  onChange,
  inline = false,
}: ATMTermsConditionProps) => {
  return (
    <>
      <div
        className={`gap-2 min-w-[400px] ${
          inline ? "flex items-center" : "flex flex-col"
        } `}
      >
        <Checkbox
          checked={value}
          onCheckedChange={(checked) => {
            onChange(checked);
          }}
        />
        <ATMTypography variant="div">{terms}</ATMTypography>
      </div>
      {name && (
        <ErrorMessage name={name}>
          {(errMsg) => (
            <ATMTypography
              variant="div"
              extraClasses="text-red-500 w-full bg-white"
            >
              {errMsg}
            </ATMTypography>
          )}
        </ErrorMessage>
      )}
    </>
  );
};

export default ATMTermsCondition;
