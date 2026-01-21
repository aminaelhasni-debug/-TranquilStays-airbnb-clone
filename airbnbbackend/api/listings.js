import { getListings, createListing, deleteListing } from "../controllers/listingsController";

export default async function handler(req, res) {
  try {
    if (req.method === "GET") return getListings(req, res);
    if (req.method === "POST") return createListing(req, res);
    if (req.method === "DELETE") return deleteListing(req, res);

    return res.status(405).json({ message: "Method not allowed" });
  } catch (err) {
    return res.status(500).json({ message: "Server error", error: err.message });
  }
}
