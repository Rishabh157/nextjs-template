"use client";
import ATMCheckBox from "@/components/ui/atom/ATMCheckBox/ATMCheckBox";
import ATMDatePicker from "@/components/ui/atom/ATMDatePicker/ATMDatePicker";
import ATMFileUpLoader from "@/components/ui/atom/ATMFileUpLoader/ATMFileUpLoader";
import ATMInput from "@/components/ui/atom/ATMInput/ATMInput";
import ATMPassword from "@/components/ui/atom/ATMPassword/ATMPassword";
import ATMRadioGroup from "@/components/ui/atom/ATMRadioGroup/ATMRadioGroup";
import { ATMSelect } from "@/components/ui/atom/ATMSelect/ATMSelect";
import ATMTermsCondition from "@/components/ui/atom/ATMTermsCondition/ATMTermsCondition";
import ATMTextArea from "@/components/ui/atom/ATMTextArea/ATMTextArea";
import ATMTypography from "@/components/ui/atom/ATMTypography/ATMTypography";
import { useState } from "react";
import AddFormWrapper from "../form/Add/AddFormWrapper";

const radioGroupData = [
  {
    label: "Male",
    value: "MALE",
  },
  {
    label: "Female",
    value: "FEMALE",
  },
  {
    label: "Other",
    value: "OTHER",
  },
  {
    label: "Other",
    value: "OTHER",
  },
  {
    label: "Other",
    value: "OTHER",
  },
  {
    label: "Other",
    value: "OTHER",
  },
  {
    label: "Other",
    value: "OTHER",
  },
  {
    label: "Other",
    value: "OTHER",
  },
  {
    label: "Other",
    value: "OTHER",
  },
  {
    label: "Other",
    value: "OTHER",
  },
  {
    label: "Other",
    value: "OTHER",
  },
  {
    label: "Other",
    value: "OTHER",
  },
];

const options = [
  { value: "next.js", label: "Next.js" },
  { value: "sveltekit", label: "SvelteKit" },
  { value: "nuxt.js", label: "Nuxt.js" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
];

const Index = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [selectedDateRange, setSelectedDateRange] = useState<
    { from: Date; to?: Date } | undefined
  >(undefined);

  return (
    // <div className="flex flex-col gap-4">
    //   <div>
    //     <ATMInput
    //       type="text"
    //       placeholder="Email"
    //       label="Email"
    //       supportText="Enter Valid Email Address"
    //       onChange={(e) => console.log(e.target.value)}
    //       required
    //       inline
    //     />
    //   </div>
    //   <div>
    //     <ATMPassword
    //       placeholder="Password"
    //       label="password"
    //       supportText="password must be a 8 digit"
    //       onChange={(e) => console.log(e.target.value)}
    //       required
    //       inline
    //     />
    //   </div>
    //   <div>
    //     <ATMFileUpLoader
    //       type="file"
    //       placeholder="file"
    //       label="file"
    //       supportText="File less then 5MB"
    //       onChange={(e) => console.log(e)}
    //       required
    //       inline
    //     />
    //   </div>
    //   <div>
    //     <ATMTextArea
    //       placeholder="Address"
    //       label="Address"
    //       onChange={(e) => console.log(e)}
    //       required
    //       inline
    //     />
    //   </div>

    //   <div>
    //     <ATMRadioGroup
    //       groupData={radioGroupData}
    //       label="gender"
    //       required
    //       onChange={(e) => console.log(e)}
    //       supportText="select one "
    //       inline
    //       orientation="horizontal "
    //     />
    //   </div>
    //   <div>
    //     <ATMSelect
    //       label="Select"
    //       placeholder="Select"
    //       options={options}
    //       onChange={(selected: any) => console.log(selected)}
    //       inline
    //       multiple
    //     />
    //     {/* <ComboboxDemo /> */}
    //   </div>
    //   <div>
    //     <ATMCheckBox
    //       groupData={radioGroupData}
    //       label="Select options"
    //       inline
    //       required={true}
    //       supportText="Please select at least one option"
    //       orientation="horizontal"
    //     />
    //   </div>
    //   <div>
    //     <ATMTermsCondition
    //       onChange={(checked) => console.log(checked)}
    //       terms={
    //         <ATMTypography
    //           variant="span"
    //           extraClasses="flex items-center gap-1"
    //         >
    //           i accept
    //           <ATMTypography
    //             variant="span"
    //             extraClasses="cursor-pointer text-blue-400"
    //           >
    //             terms considiton
    //           </ATMTypography>
    //         </ATMTypography>
    //       }
    //       inline
    //     />
    //   </div>

    //   <div>
    //     <ATMDatePicker
    //       value={date}
    //       label="Single Date"
    //       placeholder="Select a date"
    //       onChange={(date) => setDate(date)}
    //       required
    //       inline
    //     />

    //     <ATMDatePicker
    //       value={selectedDateRange}
    //       label="Select date range"
    //       placeholder="Pick a date range"
    //       onChange={(range) =>
    //         setSelectedDateRange(range as { from: Date; to?: Date })
    //       }
    //       mode="range"
    //       required
    //       inline
    //       // disabled={(date) => date > new Date()}
    //     />
    //   </div>
    // </div>
    <div>
      <AddFormWrapper />
    </div>
  );
};

export default Index;
