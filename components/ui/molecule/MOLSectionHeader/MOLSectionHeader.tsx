import React from "react";
import ATMTypography from "../../atom/ATMTypography/ATMTypography";
import ATMLinkButton from "../../atom/ATMButton/ATMLinkButton";

type Props = {
  sectionTitle: string;
  buttonText: string;
  buttonLink: string;
};

const MOLSectionHeader = ({ sectionTitle, buttonText, buttonLink }: Props) => {
  return (
    <div className="flex justify-between items-center">
      <ATMTypography variant="h5">{sectionTitle}</ATMTypography>
      {buttonText && (
        <ATMLinkButton variant={"link"} href={`${buttonLink}`}>
          {buttonText}
        </ATMLinkButton>
      )}
    </div>
  );
};

export default MOLSectionHeader;
