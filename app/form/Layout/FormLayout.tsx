import ATMCheckBox from "@/components/ui/atom/ATMCheckBox/ATMCheckBox";
import ATMDatePicker from "@/components/ui/atom/ATMDatePicker/ATMDatePicker";
import ATMFileUpLoader from "@/components/ui/atom/ATMFileUpLoader/ATMFileUpLoader";
import ATMInput from "@/components/ui/atom/ATMInput/ATMInput";
import ATMPassword from "@/components/ui/atom/ATMPassword/ATMPassword";
import ATMRadioGroup from "@/components/ui/atom/ATMRadioGroup/ATMRadioGroup";
import ATMSelect from "@/components/ui/atom/ATMSelect/ATMSelect";
import ATMTermsCondition from "@/components/ui/atom/ATMTermsCondition/ATMTermsCondition";
import ATMTextArea from "@/components/ui/atom/ATMTextArea/ATMTextArea";
import ATMTypography from "@/components/ui/atom/ATMTypography/ATMTypography";
import { FormikProps } from "formik";
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
type Props = {
  formikProps: FormikProps<any>;
  onClose?: () => void;
};

const FormLayout = ({ formikProps, onClose }: Props) => {
  const { values, setFieldValue, isSubmitting, handleBlur } = formikProps;

  return (
    <>
      <div className="flex flex-col gap-4">
        <div>
          <ATMInput
            name="email"
            value={values?.email}
            type="text"
            placeholder="Email"
            label="Email"
            supportText="Enter Valid Email Address"
            onChange={(e) => setFieldValue("email", e.target.value)}
            required
            inline
          />
        </div>
        <div>
          <ATMPassword
            name="password"
            value={values?.password}
            placeholder="Password"
            label="Password"
            supportText="password must be a 8 digit"
            onChange={(e) => setFieldValue("password", e.target.value)}
            required
            inline
          />
        </div>
        {/* <div>
          <ATMFileUpLoader
            type="file"
            placeholder="file"
            label="file"
            supportText="File less then 5MB"
            onChange={(e) => console.log(e)}
            required
            inline
          />
        </div> */}

        <div>
          <ATMSelect
            value={values?.frameWork}
            name="frameWork"
            label="Select"
            placeholder="Select"
            options={options}
            onChange={(selected: any) => setFieldValue("frameWork", selected)}
            inline
            supportText="select relevent framework"
            required
          />
        </div>
        <div>
          <ATMSelect
            value={values?.frameWorks}
            name="frameWorks"
            label="Select"
            placeholder="Select"
            options={options}
            onChange={(selected: any) => setFieldValue("frameWorks", selected)}
            inline
            supportText="select relevent frameworks"
            required
            multiple
          />
        </div>

        <div>
          <ATMTermsCondition
            value={values?.terms}
            name="terms"
            onChange={(checked) => setFieldValue("terms", checked)}
            terms={
              <ATMTypography
                variant="span"
                extraClasses="flex items-center gap-1"
              >
                i accept
                <ATMTypography
                  variant="span"
                  extraClasses="cursor-pointer text-blue-400"
                >
                  terms considiton
                </ATMTypography>
              </ATMTypography>
            }
            inline
          />
        </div>

        <div>
          <ATMDatePicker
            name="date"
            value={values?.date}
            label="Single Date"
            placeholder="Select a date"
            onChange={(date) => setFieldValue("date", date)}
            required
            inline
          />

          <ATMDatePicker
            name="dateRange"
            value={values?.dateRange}
            label="Select date range"
            placeholder="Pick a date range"
            onChange={(range) => setFieldValue("dateRange", range)}
            mode="range"
            required
            inline
            // disabled={(date) => date > new Date()}
          />
        </div>
        <div>
          <ATMRadioGroup
            name="gender"
            value={values?.gender}
            groupData={radioGroupData}
            label="Gender"
            required
            onChange={(e) => setFieldValue("gender", e)}
            supportText="select one "
            inline
            orientation="horizontal "
          />
        </div>
        <div>
          <ATMCheckBox
            value={values?.check}
            name="check"
            groupData={radioGroupData}
            label="Select Check"
            inline
            onChange={(value) => setFieldValue("check", value)}
            required={true}
            supportText="Please select at least one option"
            orientation="horizontal"
          />
        </div>
        <button type="submit">save</button>
      </div>
    </>
  );
};

export default FormLayout;
