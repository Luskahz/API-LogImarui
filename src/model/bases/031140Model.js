import { PrismaClient } from "@prisma/client";
import { z } from 'zod'
import { baseModelMap } from "../utils/baseRouterMap";
import { baseMetadataSchema } from "../../middleware/updateBaseMiddleware";

const prisma = new PrismaClient()


const conteudo031140Schema = z.array(z.object({
  "Mapa": z.string().min(1),
  "Veículo": z.string().min(1),
  "Placa": z.string().min(1),
  "Dt Entrega": z.string().min(1),
  "Entregas": z.string().min(1),
  "Hora Emis": z.string().min(1),
  "Hora Carreg": z.string().min(1),
  "Hora Saida": z.string().min(1),
  "Hora Chegada": z.string().min(1),
  "Hora P.Fis": z.string().min(1),
  "Hora P.Fin": z.string().min(1),
  "Tempo Rota": z.string().min(1),
  "Tempo P.Fis": z.string().min(1),
  "Tempo P.Fin": z.string().min(1),
  "Tempo Interno": z.string().min(1),
  "KM Inicial": z.string().min(1),
  "KM Final": z.string().min(1),
  "KM Rodado": z.string().min(1)
}));

export const conteudo031140Validator = (jsonData) => {
  return conteudo031140Schema.safeParse(jsonData);
};

export async function create(baseMapa, baseId) {
  const result = await baseModelMap[baseId].create({
    data: baseMapa
  });
  return result;
}