import bcrypt from "bcryptjs";
import dbConnect from "../../db/mongodb";
import User from "../../model/User";
import { validateContentType } from "../../middleware/validateContentType";
import { validateBody } from "../../middleware/validateBody";
import httpStatus from "http-status";
import ApiError from "../../utils/apiError";

export async function POST(req: Request) {
  try {
    // Validate Content-Type
    const contentTypeError = validateContentType(req);
    if (contentTypeError) return contentTypeError;

    // // Parse the request body
    const body = await req.text();

    const parsedBody = JSON.parse(body);

    const bodyError = validateBody("register", parsedBody);
    if (bodyError) return bodyError;

    const { email, password } = parsedBody;

    // Connect to the database
    await dbConnect();

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return ApiError("User already exists", httpStatus.BAD_REQUEST, "", null);
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const user = new User({ email, password: hashedPassword });
    await user.save();

    return ApiError(
      "User created successfully",
      httpStatus.CREATED,
      "OK",
      user
    );
  } catch (error) {
    console.error("Error in POST /register:", error);

    return ApiError(
      "Internal Server Error",
      httpStatus.INTERNAL_SERVER_ERROR,
      "",
      null
    );
  }
}
