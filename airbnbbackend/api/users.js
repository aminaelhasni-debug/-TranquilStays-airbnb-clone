import { getUsers, createUser, deleteUser } from "../controllers/usersController";

export default async function handler(req, res) {
  try {
    if (req.method === "GET") return getUsers(req, res);
    if (req.method === "POST") return createUser(req, res);
    if (req.method === "DELETE") return deleteUser(req, res);

    return res.status(405).json({ message: "Method not allowed" });
  } catch (err) {
    return res.status(500).json({ message: "Server error", error: err.message });
  }
}

