import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { saveUserToFirestore } from "@/lib/db";

export async function POST(req: Request) {
    // Debug: ensure DATABASE_URL is present (mask credentials)
    if (!process.env.DATABASE_URL) {
        console.error("[REGISTRATION] DATABASE_URL env var missing");
    } else {
        const masked = process.env.DATABASE_URL.replace(/(?<=postgresql:\/\/[^:]+:)[^@]+(?=@)/, "*****");
        console.log("[REGISTRATION] Using DATABASE_URL:", masked);
    }
    try {
        const { name, email, password, phone, college, course, studentId } = await req.json();

        if (!email || !password || !name || !phone) {
            return NextResponse.json(
                { message: "Missing required fields (Name, Email, Password, and Phone are required)" },
                { status: 400 }
            );
        }

        const existingUser = await prisma.user.findUnique({
            where: { email },
        });

        if (existingUser) {
            return NextResponse.json(
                { message: "User with this email already exists" },
                { status: 400 }
            );
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                phone,
                college,
                course,
                studentId,
                role: "STUDENT",
            },
        });

        // Save user to Firestore with all details (non-blocking)
        saveUserToFirestore({
            id: user.id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            college: user.college,
            course: user.course,
            studentId: user.studentId,
            role: user.role,
        }).catch(err => console.error("Background Firestore sync failed:", err));

        return NextResponse.json(
            { message: "User created successfully", user },
            { status: 201 }
        );
    } catch (error: any) {
        console.error("Registration error:", error);
        // Log stack trace for deeper insight
        if (error && (error as any).stack) {
            console.error(error.stack);
        }
        return NextResponse.json(
            {
                message: "Internal server error",
                // Expose detailed error only in development
                error: process.env.NODE_ENV === "development" ? error.message : undefined,
                // Include Prisma error code if available
                code: (error as any).code ?? null,
            },
            { status: 500 }
        );
    }
}
