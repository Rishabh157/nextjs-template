import React from "react";

type Variant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";

type Props = {
  children: React.ReactNode;
  variant: Variant;
  extraClasses?: string;
};

const variantMap = {
  h1: "text-h2 sm:text-h2 md:text-h2 lg:text-h1 xl:text-h1", // Largest heading, scales down
  h2: "text-h3 sm:text-h3 md:text-h3 lg:text-h2 xl:text-h2", // Second largest, scales down
  h3: "text-h4 sm:text-h4 md:text-h4 lg:text-h3 xl:text-h3", // Third largest, scales down
  h4: "text-h5 sm:text-h5 md:text-h5 lg:text-h4 xl:text-h4", // Fourth largest, scales down
  h5: "text-h6 sm:text-h6 md:text-h6 lg:text-h5 xl:text-h5", // Fifth largest, scales down
  h6: "text-base sm:text-base md:text-base lg:text-h6 xl:text-h6", // Smallest heading, scales up
  p: "text-sm sm:text-sm md:text-sm lg:text-base xl:text-base", // Paragraph text, no significant change
  span: "text-xs sm:text-xs md:text-xs lg:text-sm xl:text-sm", // Small text, scales down
  div: "text-xs sm:text-xxs md:text-xxs lg:text-xs xl:text-xs", // Extra small text, consistent across sizes
};

const ATMTypography = ({ children, variant, extraClasses }: Props) => {
  const Tag = variant as keyof JSX.IntrinsicElements; // Dynamic tag
  const className = variantMap[variant];

  return <Tag className={`${className} ${extraClasses}`}>{children}</Tag>;
};

export default ATMTypography;
