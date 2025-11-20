import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(req) {
  const { username, password } = await req.json();

  // valida usuário e senha do .env
  if (
    username === process.env.ADMIN_USER &&
    password === process.env.ADMIN_PASS
  ) {
    const token = jwt.sign({ role: "admin" }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    const response = NextResponse.json({ success: true });

    response.cookies.set("admin_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 dias
    });

    return response;
  }

  return NextResponse.json({ error: "Credenciais inválidas" }, { status: 401 });
}
