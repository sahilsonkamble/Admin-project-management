"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Signup() {
  const router = useRouter();
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const res = await fetch("/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.error);
      return;
    }

    router.push("/signin");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Sign Up</h1>

      <input name="email" placeholder="Email" required />
      <input name="password" type="password" placeholder="Password" required />

      {error && <p style={{ color: "red" }}>{error}</p>}

      <button type="submit">Create Account</button>
    </form>
  );
}
