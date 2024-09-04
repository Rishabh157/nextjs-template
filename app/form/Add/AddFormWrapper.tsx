import { Form, Formik, FormikHelpers } from "formik";
import FormLayout from "../Layout/FormLayout";
import { array, boolean, date, number, object, string } from "yup";

type Props = {
  onClose?: () => void;
};

const AddFormWrapper = ({ onClose }: Props) => {
  // Form Initial Values
  const initialValues: any = {
    email: "",
    password: "",
    gender: "",
    frameWork: "",
    frameWorks: [
      { value: "remix", label: "Remix" },
      { value: "nuxt.js", label: "Nuxt.js" },
    ],
    check: "",
    terms: true,
    date: null,
    dateRange: null,
  };

  // Validation Schema
  const validationSchema = object().shape({
    email: string().email().required("Please enter email"),
    password: string().required("Please enter Password"),
    gender: string().required("Please  select gender"),
    frameWork: object().required("Please select Framework"),
    frameWorks: array()
      .min(1, "Please select at least one")
      .required("Please select Frameworks"),
    check: array()
      .min(1, "Please select at least one")
      .required("Please select one"),
    terms: boolean()
      .oneOf([true], "You must accept the terms and conditions")
      .required("required"),
    date: date().required("Please select date"),
    dateRange: object().required("Please select date range"),
  });

  // Handle Submit
  const handleSubmit = (
    values: any,
    { setSubmitting, resetForm }: FormikHelpers<any>
  ) => {
    setSubmitting(false);
    console.log(values);
  };

  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {(formikProps) => (
        <Form>
          <FormLayout formikProps={formikProps} />
        </Form>
      )}
    </Formik>
  );
};

export default AddFormWrapper;
