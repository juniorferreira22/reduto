import { dbConnect } from "@/app/lib/mongoose";
import Player from "@/app/models/Player";

export async function GET() {
  await dbConnect();
  const players = await Player.find().sort({ _id: -1 });
  return Response.json(players);
}

export async function POST(req) {
  await dbConnect();
  const body = await req.json();
  const newPlayer = await Player.create(body);
  return Response.json(newPlayer);
}

export async function PUT(req) {
  await dbConnect();
  const body = await req.json();
  const updated = await Player.findByIdAndUpdate(body._id, body, { new: true });
  return Response.json(updated);
}

export async function DELETE(req) {
  await dbConnect();
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  await Player.findByIdAndDelete(id);
  return Response.json({ success: true });
}
