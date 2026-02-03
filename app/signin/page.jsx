// app/signin/page.jsx
"use client";

import { signIn } from "next-auth/react";

export default function SigninPage() {
  async function handleSubmit(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    await signIn("credentials", {
      redirect: true,
      email,
      password,
      callbackUrl: "/",
    });
  }

  return (
    <div style={{ maxWidth: 420, margin: "2rem auto" }}>
      <h2>Sign in</h2>
      <form onSubmit={handleSubmit}>
        <input name="email" type="email" placeholder="Email" required />
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
        />
        <button type="submit" style={{ marginTop: 12 }}>
          Sign in
        </button>
      </form>
    </div>
  );
}
