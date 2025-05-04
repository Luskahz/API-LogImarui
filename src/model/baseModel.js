import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function uploadBase(json) {
    const result = await prisma.baseData.create({
        data: {
            dados: json,
            timestamp: new Date()  
        }
    })
    return result
}


export async function atualBase() {
    const result = await prisma.baseData.findFirst({
        orderBy: {
            timestamp: 'desc'
        }
    })
    return result
}