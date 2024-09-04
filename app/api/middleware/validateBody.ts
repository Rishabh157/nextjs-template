import { NextResponse } from "next/server";
import { registerSchema } from "./validationMiddleware/userValidation";
import Joi from "joi"; // Correct import

// Add a mapping of schemas based on module names or routes
const schemas: { [key: string]: Joi.ObjectSchema } = {
  register: registerSchema,

  // Add more mappings as needed
};

export function validateBody(module: string, body: any) {
  const schema = schemas[module];
  if (!schema) {
    return NextResponse.json(
      { message: "Validation schema not found for this module" },
      { status: 400 }
    );
  }

  const { error } = schema.validate(body, { abortEarly: false });
  if (error) {
    const details = error.details
      .map((detail: any) => detail.message)
      .join(", ");
    return NextResponse.json({ message: details }, { status: 400 });
  }
  return null;
}
