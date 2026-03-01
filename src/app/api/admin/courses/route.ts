import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";

export async function POST(req: Request) {
    try {
        const session = await auth();

        if (!session || session.user.role !== "ADMIN") {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }

        const { title, description, price, image, published } = await req.json();

        const course = await prisma.course.create({
            data: {
                title,
                description,
                price: parseFloat(price) || 0,
                image,
                published: !!published,
            },
        });

        return NextResponse.json(course, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: "Internal Error" }, { status: 500 });
    }
}
