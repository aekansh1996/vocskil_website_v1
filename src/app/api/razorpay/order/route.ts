import { NextResponse } from "next/server";
import { razorpay } from "@/lib/razorpay";
import { auth } from "@/auth";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
    try {
        const session = await auth();
        const { courseId } = await req.json();

        if (!session || !session.user || !session.user.email) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const course = await prisma.course.findUnique({
            where: { id: courseId },
        });

        if (!course) {
            return new NextResponse("Course not found", { status: 404 });
        }

        // Check if already enrolled
        const enrollment = await prisma.enrollment.findFirst({
            where: {
                userId: session.user.id,
                courseId: courseId,
            },
        });

        if (enrollment) {
            return new NextResponse("Already enrolled", { status: 400 });
        }

        const options = {
            amount: Math.round(course.price! * 100), // Amount in paise
            currency: "INR",
            receipt: `receipt_${course.id}_${session.user.id}`,
            notes: {
                courseId: course.id,
                userId: session.user.id!,
            },
        };

        const order = await razorpay.orders.create(options);

        return NextResponse.json(order);
    } catch (error) {
        console.log("[RAZORPAY_ORDER]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}
