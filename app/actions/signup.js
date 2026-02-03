"use server";

import clientPromise from "../../lib/mongodb";
import bcrypt from "bcryptjs";

export async function signup(formData) {
  try {
    const name = formData.get("name")?.trim();
    const email = formData.get("email")?.trim();
    const password = formData.get("password");

    if (!name || !email || !password) {
      return { error: "All fields are required" };
    }

    const client = await clientPromise;
    const users = client.db().collection("users");

    const exists = await users.findOne({ email });
    if (exists) return { error: "User already exists" };

    const hashed = await bcrypt.hash(password, 10);

    await users.insertOne({
      name,
      email,
      password: hashed,
      createdAt: new Date(),
    });

    return { success: true };
  } catch (err) {
    console.error(err);
    return { error: "Server error" };
  }
}
