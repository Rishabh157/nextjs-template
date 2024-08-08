import React, { ReactNode } from "react";
import ATMTypography from "../ATMTypography/ATMTypography";
import { Checkbox } from "../../checkbox";
type ATMTermsConditionProps = {
  terms: ReactNode;
  onChange: (checked: any) => void;
  inline?: boolean;
};
const ATMTermsCondition = ({
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
          onCheckedChange={(checked) => {
            onChange(checked);
          }}
        />
        <ATMTypography variant="div">{terms}</ATMTypography>
      </div>
    </>
  );
};

export default ATMTermsCondition;
