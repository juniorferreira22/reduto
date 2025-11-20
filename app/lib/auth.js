import jwt from "jsonwebtoken";

export function verifyAdmin(token) {
  if (!token) return false;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    return decoded.role === "admin";
  } catch (err) {
    console.error("Erro ao validar token:", err);
    return false;
  }
}
