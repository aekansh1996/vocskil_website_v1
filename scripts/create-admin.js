const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    const adminEmail = 'admin@vocskill.com';
    const hashedPassword = '$2b$10$ytBUV/.PKeo62JIqQ6noH.c1.l1NZRudX0//yHnfoX5r3RCHoyaQK'; // admin@123

    const user = await prisma.user.upsert({
        where: { email: adminEmail },
        update: { role: 'ADMIN' },
        create: {
            email: adminEmail,
            name: 'Vocskill Admin',
            password: hashedPassword,
            role: 'ADMIN',
            phone: '1234567890',
        },
    });

    console.log('Admin account created/updated:', user.email);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
