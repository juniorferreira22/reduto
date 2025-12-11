import jwt from "jsonwebtoken";
import { cookies } from "next/headers";


export function verifyAdmin(tokenFromParam) {
  try {
    const token = tokenFromParam ?? cookies().get("admin_token")?.value;
    if (!token) return false;

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded.role === "admin";
  } catch {
    return false;
  }
}
export function generateAdminToken(adminData) {
  const token = jwt.sign(
    { 
      id: adminData.id,
      username: adminData.username,
      role: "admin"
    },
    process.env.JWT_SECRET,
    { expiresIn: "2h" }
  );
  return token;
}
