// middlewares/updateBaseMiddleware.js
import { z } from 'zod'
import { baseModelMap } from '../utils/prisma.js'        // ou o caminho correto pra seu prisma.js
import baseControllers from '../controllers/update_base/baseControllers.js'  // import dos controllers mapeados

// 1) Zod schema (id, filename, uploadedAt, fileBuffer, uploader)
const baseMapaSchema = z.object({
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

export function updateBaseMiddleware(req, res, next) {
  const { baseId } = req.params
  const file = req.file

  // 1) Verifica se veio um arquivo
  if (!file) {
    return res.status(400).json({ error: 'Arquivo não enviado.' })
  }

  // 2) Verifica se o baseId existe no schema Prisma
  if (!baseModelMap[baseId]) {
    return res.status(400).json({ error: 'Base desconhecida.' })
  }

  // 3) Verifica se há um controller implementado pra esse baseId
  if (!baseControllers[baseId]) {
    return res.status(500).json({ error: 'Controller da base não implementado.' })
  }

  // 4) Monta o objeto de "metadados" e valida com Zod
  const metadata = {
    id: parseInt(req.body.id, 10),
    filename: file.originalname,
    uploadedAt: new Date(),
    fileBuffer: file.buffer,
    uploader: req.body.uploader || 'Sistema'
  }

  const parsed = baseMapaSchema.safeParse(metadata)
  if (!parsed.success) {
    const details = parsed.error.format()
    return res.status(400).json({ error: 'Erro na validação dos metadados.', details })
  }

  // 5) Se chegou aqui, tudo ok: injeta no req
  req.validatedBaseMetadata = parsed.data
  req.selectedBaseController = baseControllers[baseId]
  next()
}
