import { getBookings, createBooking } from "../controllers/bookingsController";

export default async function handler(req, res) {
  if (req.method === "GET") return getBookings(req, res);
  if (req.method === "POST") return createBooking(req, res);
  return res.status(405).json({ message: "Method not allowed" });
}

