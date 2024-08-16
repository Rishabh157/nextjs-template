import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import ATMTypography from "../ATMTypography/ATMTypography";

type Props = {
  id: any;
  type: any;
  label: any;
  options: any;
  url: any;
  accordionClass: string;
  accordionItemClass: string;
  accordionContentClass: string;
};
const ATMAccordion = ({
  id,
  type,
  label,
  options,
  url,
  accordionClass,
  accordionItemClass,
  accordionContentClass,
}: Props) => {
  return (
    <Accordion key={id} type="single" collapsible className={accordionClass}>
      <AccordionItem value="item-1" className={accordionItemClass}>
        <AccordionTrigger>
          <ATMTypography variant="p">{label}</ATMTypography>
        </AccordionTrigger>
        {options?.map((options: any) => {
          console.log(options);
          return (
            <AccordionContent
              className={accordionContentClass}
              id={options?.id}
            >
              <Link href={`${options?.optionUrl}`}>{options.label}</Link>
            </AccordionContent>
          );
        })}
      </AccordionItem>
    </Accordion>
  );
};

export default ATMAccordion;
