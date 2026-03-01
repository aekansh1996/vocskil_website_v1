import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";
import { NextResponse } from "next/server";

export async function POST(
    req: Request,
    { params }: { params: { id: string } }
) {
    const session = await auth();
    if (!session?.user || session.user.role !== "ADMIN") {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        const { title, content, videoUrl, slidesUrl, order } = await req.json();
        const lesson = await (prisma.lesson as any).create({
            data: {
                title,
                content,
                videoUrl,
                slidesUrl,
                order: order || 0,
                moduleId: params.id,
            },
        });
        return NextResponse.json(lesson);
    } catch (error) {
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
