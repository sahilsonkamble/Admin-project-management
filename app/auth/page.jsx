"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { signup } from "../actions/signup";

export default function AuthPage() {
  const [tab, setTab] = useState("signin");
  const [error, setError] = useState("");

  async function handleSignin(e) {
    e.preventDefault();
    setError("");

    const email = e.target.email.value;
    const password = e.target.password.value;

    await signIn("credentials", {
      email,
      password,
      callbackUrl: "/",
    });
  }

  async function handleSignup(formData) {
    setError("");
    const res = await signup(formData);

    if (res?.error) {
      setError(res.error);
      return;
    }

    await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      callbackUrl: "/",
    });
  }

  return (
    <div className="w-full max-w-md">
      {/* Tabs */}
      <div className="flex mb-6 border-b border-neutral-700">
        <button
          onClick={() => setTab("signin")}
          className={`flex-1 py-2 text-center ${
            tab === "signin"
              ? "border-b-2 border-rose-500 text-white"
              : "text-neutral-400"
          }`}
        >
          Signin
        </button>

        <button
          onClick={() => setTab("signup")}
          className={`flex-1 py-2 text-center ${
            tab === "signup"
              ? "border-b-2 border-rose-500 text-white"
              : "text-neutral-400"
          }`}
        >
          Signup
        </button>
      </div>

      {/* Signin */}
      {tab === "signin" && (
        <form onSubmit={handleSignin} className="space-y-4">
          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            className="w-full rounded-lg bg-neutral-800 border border-neutral-700 px-4 py-2 text-white"
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            required
            className="w-full rounded-lg bg-neutral-800 border border-neutral-700 px-4 py-2 text-white"
          />

          {error && <p className="text-rose-400 text-sm">{error}</p>}

          <button className="w-full bg-rose-500 py-2 rounded-lg text-white">
            Sign in
          </button>
        </form>
      )}

      {/* Signup */}
      {tab === "signup" && (
        <form action={handleSignup} className="space-y-4">
          <input
            name="name"
            placeholder="Full name"
            required
            className="w-full rounded-lg bg-neutral-800 border border-neutral-700 px-4 py-2 text-white"
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            className="w-full rounded-lg bg-neutral-800 border border-neutral-700 px-4 py-2 text-white"
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            minLength={6}
            required
            className="w-full rounded-lg bg-neutral-800 border border-neutral-700 px-4 py-2 text-white"
          />

          {error && <p className="text-rose-400 text-sm">{error}</p>}

          <button className="w-full bg-rose-500 py-2 rounded-lg text-white">
            Sign up
          </button>
        </form>
      )}
    </div>
  );
}
