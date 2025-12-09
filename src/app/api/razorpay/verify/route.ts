import { NextResponse } from "next/server";
import crypto from "crypto";
import { PrismaClient } from "@prisma/client";
import { savePurchaseToFirestore } from "@/lib/db";

const prisma = new PrismaClient();

export async function POST(req: Request) {
    try {
        const {
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature,
            courseId,
            userId,
        } = await req.json();

        const body = razorpay_order_id + "|" + razorpay_payment_id;

        const expectedSignature = crypto
            .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
            .update(body.toString())
            .digest("hex");

        if (expectedSignature === razorpay_signature) {
            // Payment is verified, enroll the user
            await prisma.enrollment.create({
                data: {
                    courseId: courseId,
                    userId: userId,
                },
            });

            // Save purchase to Firestore
            await savePurchaseToFirestore({
                userId,
                courseId,
                amount: 4999, // Assuming fixed price for now, or pass it from frontend
                orderId: razorpay_order_id,
                paymentId: razorpay_payment_id,
            });

            return NextResponse.json({ message: "Payment verified and enrolled" }, { status: 200 });
        } else {
            return NextResponse.json({ message: "Invalid signature" }, { status: 400 });
        }
    } catch (error) {
        console.log("[RAZORPAY_VERIFY]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}
