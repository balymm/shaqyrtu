import { PrismaClient } from "@prisma/client";

// Один инстанс Prisma на всё приложение (важно для serverless/Render free tier)
export const prisma = new PrismaClient();
