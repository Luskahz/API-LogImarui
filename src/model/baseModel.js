import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

let baseCache = null; 

export async function uploadBase(json) {
    baseCache = json

    const result = await prisma.baseData.create({
        data: {
            dados: json,
            timestamp: new Date()  
        }
    })
    return result
}


export async function atualBase() {
    if(baseCache){
        return baseCache
    }

    const ultimaBase = await prisma.baseData.findFirst({
        orderBy: {
            timestamp: 'desc'
        }
    })

    baseCache = ultimaBase?.dados
    return baseCache
}