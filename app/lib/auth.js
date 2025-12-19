import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function verifyAdmin(tokenFromParam) {
  try {
    let token = tokenFromParam;

    if (!token) {
      const cookieStore = await cookies();
      token = cookieStore.get("admin_token")?.value;
    }

    if (!token) return false;

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded.role === "admin";
  } catch {
    return false;
  }
}
