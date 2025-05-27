import { PrismaClient } from "@prisma/client";
import { baseModelMap } from "../utils/baseRouterMap.js";
import { Schema031140 } from "../utils/basesSchemaMap.js";

const prisma = new PrismaClient()


export const conteudo031140Validator = (jsonFile) => {//quero validar todos os dados
  return Schema031140.safeParse(jsonFile);
}

export async function create(base031140, baseId) {
  const result = await baseModelMap[baseId].create({
    data: base031140
  });
  return result;
}