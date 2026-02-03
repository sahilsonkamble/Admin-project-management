// app/actions/signup.js
"use server";

import clientPromise from "../../lib/mongodb"; // two levels up from app/actions -> project root/lib
import bcrypt from "bcryptjs";

export async function signup(formData) {
  try {
    const email = (formData.get("email") || "").toString().trim();
    const password = formData.get("password");

    if (!email || !password)
      return { error: "Email and password are required." };

    const client = await clientPromise;
    const users = client.db().collection("users");

    const exists = await users.findOne({ email });
    if (exists) return { error: "User already exists." };

    const hashed = await bcrypt.hash(password.toString(), 10);

    await users.insertOne({
      email,
      password: hashed,
      createdAt: new Date(),
    });

    return { success: true };
  } catch (err) {
    console.error("Signup error:", err);
    return { error: "Server error" };
  }
}
