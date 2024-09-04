import { NextResponse } from "next/server";

const ApiError = (
  message: string,
  statusCode: number,
  code: string,
  data: any
) => {
  return NextResponse.json(
    { message, code, data, statusCode },
    { status: statusCode }
  );
};

export default ApiError;
