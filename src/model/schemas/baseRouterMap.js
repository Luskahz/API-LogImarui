import { PrismaClient } from "@prisma/client";
import { z } from "zod";

const prisma = new PrismaClient();



export const baseModelMap = {
  "031140": prisma.base031140,
  "030530": prisma.base030530,
  "030237": prisma.base030237,
  "030237_2": prisma.base030237Itens,
  bees: prisma.baseBees,
  wms: prisma.baseWMS,
  clientes: prisma.baseClientes,
  produtos: prisma.baseProdutos,
  csvBuffer: prisma.csvBufferBases, 
}

export { prisma };
