import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth-options";
import { NextResponse } from "next/server";

export async function POST(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const session = await getServerSession(authOptions);
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
                moduleId: id,
            },
        });
        return NextResponse.json(lesson);
    } catch (error) {
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
