import { NextResponse } from "next/server";

export async function GET() {
  try {
    const POSTS = process.env.ID_POSTSCS2;

    if (!POSTS) {
      return NextResponse.json(
        { error: "ID_POSTSCS2 não definido" },
        { status: 500 }
      );
    }

    const url = `https://opensheet.elk.sh/${POSTS}/Posts`;

    const res = await fetch(url, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Erro ao buscar posts");
    }

    const data = await res.json();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
