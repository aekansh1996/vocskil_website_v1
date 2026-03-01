import PDFDocument from "pdfkit";
import { prisma } from "./prisma";
import nodemailer from "nodemailer";

export async function generateCertificate(userId: string, targetId: string, isCourse: boolean = true) {
    const user = await prisma.user.findUnique({ where: { id: userId } });
    let title = "";

    if (isCourse) {
        const course = await prisma.course.findUnique({ where: { id: targetId } });
        if (!course) throw new Error("Course not found");
        title = course.title;
    } else {
        const exam = await prisma.exam.findUnique({ where: { id: targetId } });
        if (!exam) throw new Error("Exam not found");
        title = exam.title;
    }

    if (!user) throw new Error("User not found");

    return new Promise<Buffer>((resolve, reject) => {
        const doc = new PDFDocument({
            layout: "landscape",
            size: "A4",
        });

        const buffers: Buffer[] = [];
        doc.on("data", buffers.push.bind(buffers));
        doc.on("end", () => resolve(Buffer.concat(buffers)));

        // Design the certificate
        doc.rect(0, 0, doc.page.width, doc.page.height).fill("#f8fafc");

        // Border
        doc.rect(20, 20, doc.page.width - 40, doc.page.height - 40)
            .lineWidth(2)
            .stroke("#1e293b");

        doc.rect(30, 30, doc.page.width - 60, doc.page.height - 60)
            .lineWidth(1)
            .stroke("#94a3b8");

        // Content
        doc.fillColor("#1e293b")
            .fontSize(50)
            .text("CERTIFICATE OF COMPLETION", 0, 150, { align: "center" });

        doc.fontSize(20)
            .text("This is to certify that", 0, 230, { align: "center" });

        doc.fontSize(40)
            .font("Helvetica-Bold")
            .text(user.name || "Student", 0, 270, { align: "center" });

        doc.font("Helvetica")
            .fontSize(20)
            .text(`has successfully completed the ${isCourse ? 'course' : 'examination'}`, 0, 330, { align: "center" });

        doc.fontSize(30)
            .font("Helvetica-Bold")
            .text(title, 0, 370, { align: "center" });

        doc.fontSize(15)
            .font("Helvetica")
            .text(`Issued on ${new Date().toLocaleDateString()}`, 0, 450, { align: "center" });

        doc.end();
    });
}

export async function sendCertificateEmail(userEmail: string, userName: string, courseTitle: string, pdfBuffer: Buffer) {
    const transporter = nodemailer.createTransport({
        service: "gmail", // Adjust based on provider
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: userEmail,
        subject: `Certificate of Completion - ${courseTitle}`,
        text: `Congratulations ${userName}!\n\nPlease find your certificate for the course "${courseTitle}" attached.`,
        attachments: [
            {
                filename: `${courseTitle}_Certificate.pdf`,
                content: pdfBuffer,
            },
        ],
    };

    return transporter.sendMail(mailOptions);
}
