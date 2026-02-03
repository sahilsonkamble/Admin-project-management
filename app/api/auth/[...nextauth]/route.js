// app/api/auth/[...nextauth]/route.js
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../../lib/mongodb"; // 4 levels up to lib
import bcrypt from "bcryptjs";

export const authOptions = {
  adapter: MongoDBAdapter(clientPromise),
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const client = await clientPromise;
        const users = client.db().collection("users");

        const user = await users.findOne({ email: credentials.email });
        if (!user) {
          throw new Error("No user found with that email");
        }

        const valid = await bcrypt.compare(credentials.password, user.password);
        if (!valid) {
          throw new Error("Incorrect password");
        }

        // return minimal user object
        return { id: user._id.toString(), email: user.email };
      },
    }),
  ],

  pages: {
    signIn: "/signin",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
