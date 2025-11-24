import jwt from "jsonwebtoken";
import { cookies } from "next/headers";


export function verifyAdmin() {
  // verifica se o usuário é admin baseado no cookie de autenticação
  try {
    const cookieStore = cookies();
    const token = cookieStore.get("admin_token")?.value;

    if (!token) return false;

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded.role === "admin";
  } catch {
    return false;
  }
}
