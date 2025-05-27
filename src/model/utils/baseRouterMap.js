import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const baseModelMap = {
  '031140': prisma.base031140,
  '030530': prisma.base030530,
  '030237': prisma.base030237,
  '030237_2': prisma.base030237Itens,
  'bees': prisma.baseBees,
  'wms': prisma.baseWMS,
  'clientes': prisma.baseClientes,
  'produtos': prisma.baseProdutos,
}

export const baseMapaSchema = z.object({// validação zod para os atributos do schemma 
  id: z.number({
    required_error: 'O id é obrigatório.',
    invalid_type_error: 'O id deve ser um número.'
  })
    .int()
    .positive({ message: 'O ID deve ser um valor numérico positivo.' }),

  filename: z.string({
    required_error: 'O nome do arquivo é obrigatório.',
    invalid_type_error: 'O nome do arquivo deve ser uma string.'
  })
    .min(1, { message: 'O nome do arquivo não pode estar vazio.' }),

  uploadedAt: z.coerce.date({
    required_error: 'A data de upload é obrigatória.',
    invalid_type_error: 'A data de upload deve ser uma data válida.'
  }),

  fileBuffer: z.instanceof(Buffer, {
    message: 'O conteúdo do arquivo deve ser um Buffer.'
  }),

  uploader: z.string({
    invalid_type_error: 'O nome do uploader deve ser uma string.'
  })
    .optional()
})




export { prisma }