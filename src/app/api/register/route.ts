import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { saveUserToFirestore } from "@/lib/db";

export async function POST(req: Request) {
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

        // Save user to Firestore with all details
        await saveUserToFirestore({
            id: user.id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            college: user.college,
            course: user.course,
            studentId: user.studentId,
            role: user.role,
        });

        return NextResponse.json(
            { message: "User created successfully", user },
            { status: 201 }
        );
    } catch (error: any) {
        console.error("Registration error:", error);
        return NextResponse.json(
            {
                message: "Internal server error",
                error: process.env.NODE_ENV === "development" ? error.message : undefined
            },
            { status: 500 }
        );
    }
}
