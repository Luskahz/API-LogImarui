// middlewares/updateBaseMiddleware.js
import { z } from 'zod'
import { baseModelMap } from '../model/utils/baseRouterMap.js' 
import { baseControllers } from '../controllers/updateBaseController.js'


const baseMapaSchema = z.object({// validação zod para os atributos do schemma 
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

export function validator (baseMapa, partial = null){// função pra validação dos metadados do schemma
    if (partial) {
      return baseMapaSchema.partial(partial).safeParse(baseMapa);
    }
    return baseMapaSchema.safeParse(baseMapa);
  }

export function updateBaseMiddleware(req, res, next) {//middleware propriamente dito
  const { baseId } = req.params
  const file = req.file

  if (!file) {// verifica a existencia do csv
    return res.status(400).json({ error: 'Arquivo não enviado.' })
  }
  if (!baseModelMap[baseId]) {//verifica se há uma base equivalente a esse id
    return res.status(400).json({ error: 'Base desconhecida.' })
  }
  if (!baseControllers[baseId]) {//verifica se há um controller pra esse id
    return res.status(500).json({ error: 'Controller da base não implementado.' })
  }

  const metadata = {
    id: parseInt(req.body.id, 10),
    filename: file.originalname,
    uploadedAt: new Date(),
    fileBuffer: file.buffer,
    uploader: req.body.uploader || 'Sistema'
  }

  const parsed = baseMapaSchema.safeParse(metadata)//cria o parsed, e valida no zod
  if (!parsed.success) {
    const details = parsed.error.format()
    return res.status(400).json({ error: 'Erro na validação dos metadados.', details })
  }


  req.validatedBaseMetadata = parsed.data
  req.selectedBaseController = baseControllers[baseId]
  next()
}
