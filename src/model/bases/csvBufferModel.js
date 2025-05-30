import { PrismaClient } from "@prisma/client"
import { baseModelMap } from "../schemas/baseRouterMap.js"

const prisma = new PrismaClient()

export async function createCsvBuffer(base) {
  try {
    const result = await baseModelMap["csvBuffer"].create({
      data: base
    })
    console.log(`>> Registro criado na tabela buffer\n`, result)
    return { success: true, data: result }
  } catch (error) {
    return { success: false, error: error.message, details: error }
  }
}