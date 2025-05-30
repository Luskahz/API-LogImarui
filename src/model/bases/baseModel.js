import { PrismaClient } from "@prisma/client"
import { baseModelMap } from "../schemas/baseRouterMap.js"

const prisma = new PrismaClient()

export async function create(base, baseId) {
  const result = await baseModelMap[baseId].create({
    data: base
  })
  console.log(`>> Registro criado na tabela ${baseId}\n`, result)
  return result;
}