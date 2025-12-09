import { NextResponse } from "next/server";
import { saveEnquiryToFirestore } from "@/lib/db";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, phone, message, courseName } = body;

        if (!name || !email || !phone) {
            return NextResponse.json(
                { message: "Missing required fields" },
                { status: 400 }
            );
        }

        await saveEnquiryToFirestore({
            name,
            email,
            phone,
            message,
            courseName
        });

        return NextResponse.json(
            { message: "Enquiry submitted successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error("[ENQUIRY_API]", error);
        return NextResponse.json(
            { message: "Internal server error" },
            { status: 500 }
        );
    }
}
