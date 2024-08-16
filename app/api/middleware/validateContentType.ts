import { NextResponse } from "next/server";

export function validateContentType(req: Request) {
  const contentType = req.headers.get("Content-Type");
  if (contentType !== "application/json") {
    return NextResponse.json(
      { message: "Content-Type must be application/json" },
      { status: 400 }
    );
  }
  return null;
}
