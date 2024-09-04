import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../db/mongodb"; // Adjust the path as needed

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    await dbConnect();
    res.status(200).json({ message: "Connected to MongoDB successfully" });
  } catch (error) {
    console.error("Error connecting to MongoDB in API route:", error);
    res.status(500).json({ message: "Failed to connect to MongoDB" });
  }
}
