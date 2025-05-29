import { PrismaClient } from "@prisma/client"
import { baseModelMap } from "../schemas/baseRouterMap.js"

const prisma = new PrismaClient()


export async function createCsvBuffer(base) {
  const result = await baseModelMap["csvBuffer"].create({
    data: base
  })
  console.log(`>> registro criado na tabela buffer`, result)
  return result;
}