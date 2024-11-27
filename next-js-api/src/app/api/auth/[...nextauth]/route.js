import NextAuth from "next-auth";

import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

import bcrypt from "bcrypt";
import User from "@/models/user";

export const authOptions = {
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60
    },
    secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET, // Ensure this is server-side only
    providers: [
        CredentialsProvider({
            credentials: {
                email: { label: "Email", type: "text", placeholder: "email" },
                password: { label: "Password", type: "password", placeholder: "password" },
            },
            async authorize(credentials) {
                const { email, password } = credentials;

                if (!email || !password) {
                    throw new Error("25: Email and password are required.");
                }

                // Look up the user in the database
                const user = await User.findOne({ email });
                if (!user) {
                    throw new Error("31: User not found.");
                }

                // Compare the password
                const isPasswordValid = await bcrypt.compare(password, user.password);
                if (!isPasswordValid) {
                    throw new Error("37: Invalid password.");
                }

                // Return user details to be included in the session
                return { _id: user._id, email: user.email };
            },
        }),
        GoogleProvider({
            clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
            clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
            scope: "openid email profile",
            async profile(profile) {
                console.log("Google Profile:", profile);  // This will show the full profile response
                const user = await User.findOne({ email: profile.email });
                if (!user) {
                    console.log("No user found with this email:", profile.email);
                    throw new Error("52: Invalid email.");
                }
                return { 
                    _id: user._id, 
                    email: user.email, 
                    id: profile.sub 
                };
            },            
        })        
    ],
    jwt: {
        secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET,
    },
    callbacks: {
        async jwt({ token, account, user }) {
            if (account && user) {
                token.email = user.email;
                token._id = user._id;
            }
            return token;
        },
        async session({ session, token }) {
            session.user.email = token.email;
            session.user._id = token._id;
            return session;
        },
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };