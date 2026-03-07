import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth-options";

export async function GET() {
    try {
        const session = await getServerSession(authOptions);
        if (!session || session.user.role !== "ADMIN") {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }

        const courses = await prisma.course.findMany({
            orderBy: { createdAt: "desc" },
            include: {
                _count: {
                    select: { modules: true, enrollments: true },
                },
            },
        });

        return NextResponse.json(courses);
    } catch (error) {
        return NextResponse.json({ message: "Internal Error" }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const session = await getServerSession(authOptions);

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
