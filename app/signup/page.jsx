// app/signup/page.jsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signup } from "../actions/signup"; // import the server action
import { signIn } from "next-auth/react";

export default function SignupPage() {
  const router = useRouter();
  const [error, setError] = useState("");

  async function formAction(formData) {
    setError("");
    const res = await signup(formData);

    if (res?.error) {
      setError(res.error);
      return;
    }

    // Option A: redirect to signin page
    // router.push("/signin");

    // Option B: auto-login after signup (calls next-auth on client)
    const email = formData.get("email");
    const password = formData.get("password");

    // signIn returns a promise; redirect will happen to callbackUrl
    await signIn("credentials", {
      redirect: true,
      email,
      password,
      callbackUrl: "/",
    });
  }

  return (
    <div style={{ maxWidth: 420, margin: "2rem auto" }}>
      <h2>Create account</h2>

      <form action={formAction}>
        <label style={{ display: "block", marginTop: 8 }}>Email</label>
        <input name="email" type="email" required />

        <label style={{ display: "block", marginTop: 8 }}>Password</label>
        <input name="password" type="password" minLength={6} required />

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit" style={{ marginTop: 12 }}>
          Sign up
        </button>
      </form>
    </div>
  );
}
