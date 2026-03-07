import { prisma } from "@/lib/prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                console.log("[AUTH] Attempting login for:", credentials.email);
                const user = await prisma.user.findUnique({
                    where: { email: credentials.email },
                });

                if (!user) {
                    console.log("[AUTH] User not found:", credentials.email);
                    return null;
                }

                console.log("[AUTH] User found, checking password...");
                const isPasswordValid = await bcrypt.compare(
                    credentials.password,
                    user.password
                );

                if (!isPasswordValid) {
                    console.log("[AUTH] Invalid password for:", credentials.email);
                    return null;
                }

                console.log("[AUTH] Login successful for:", credentials.email);

                return {
                    id: user.id,
                    email: user.email,
                    name: user.name,
                    role: user.role,
                    phone: user.phone,
                    college: user.college,
                    course: user.course,
                    studentId: user.studentId,
                };
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.role = (user as any).role;
                token.phone = (user as any).phone;
                token.college = (user as any).college;
                token.course = (user as any).course;
                token.studentId = (user as any).studentId;
            }
            return token;
        },
        async session({ session, token }) {
            if (session.user) {
                (session.user as any).role = token.role as string;
                (session.user as any).id = token.sub as string;
                (session.user as any).phone = token.phone as string;
                (session.user as any).college = token.college as string;
                (session.user as any).course = token.course as string;
                (session.user as any).studentId = token.studentId as string;
            }
            return session;
        },
    },
    pages: {
        signIn: "/login",
    },
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
};
