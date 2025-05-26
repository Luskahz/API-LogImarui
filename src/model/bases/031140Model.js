import { PrismaClient } from "@prisma/client";
import { z } from 'zod'
import { baseModelMap } from "../utils/baseRouterMap";
import { baseMetadataSchema } from "../../middleware/updateBaseMiddleware";

const prisma = new PrismaClient()


const baseMapaSchema = z.object({
  id: z.number({
    required_error: 'O id é obrigatório.',
    invalid_type_error: 'O id deve ser um número.'
  }).int().positive({ message: 'O ID deve ser um valor numérico positivo.' }),

  filename: z.string({
    required_error: 'O nome do arquivo é obrigatório.',
    invalid_type_error: 'O nome do arquivo deve ser uma string.'
  }).min(1, { message: 'O nome do arquivo não pode estar vazio.' }),

  uploadedAt: z.coerce.date({
    required_error: 'A data de upload é obrigatória.',
    invalid_type_error: 'A data de upload deve ser uma data válida.'
  }),

  fileBuffer: z.instanceof(Buffer, {
    message: 'O conteúdo do arquivo deve ser um Buffer.'
  }),

  uploader: z.string({
    invalid_type_error: 'O nome do uploader deve ser uma string.'
  }).optional()
})

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

export const base031140Validator = (baseMapa, partial = null) => {// função pra validação dos metadados do schemma
  if (partial) {
    return baseMapaSchema.partial(partial).safeParse(baseMapa);
  }
  return baseMapaSchema.safeParse(baseMapa);
};
export const conteudo031140Validator = (jsonData) => {
  return conteudo031140Schema.safeParse(jsonData);
};

export async function create(baseMapa, baseId) {
  const result = await baseModelMap[baseId].create({
    data: baseMapa
  });
  return result;
}