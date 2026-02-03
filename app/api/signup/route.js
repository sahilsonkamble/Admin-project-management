import clientPromise from "@/lib/mongodb";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { email, password } = await req.json();

  const client = await clientPromise;
  const users = client.db().collection("users");

  const existing = await users.findOne({ email });
  if (existing) {
    return NextResponse.json({ error: "User already exists" }, { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await users.insertOne({
    email,
    password: hashedPassword,
  });

  return NextResponse.json({ success: true });
}
