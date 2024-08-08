import { Form, Formik, FormikHelpers } from "formik";
import FormLayout from "../Layout/FormLayout";
import { array, number, object, string } from "yup";

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
  };

  // Validation Schema
  const validationSchema = object().shape({
    email: string().email().required("Please enter email"),
    password: string().required("Please enter Password"),
    gender: string().required("Please  select gender"),
    frameWork: object().required("Please select Framework"),
    frameWorks: array().required("Please select Frameworks"),
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
