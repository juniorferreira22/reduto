import jwt from "jsonwebtoken";

export function verifyAdmin({ cookies }) {
    try {
        const token = cookies().get("auth_token")?.value;
        if (!token) return false;

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        return decoded.role === "admin";

    } catch (error) {
        return false;
    }
}
