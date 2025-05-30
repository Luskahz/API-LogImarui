// middlewares/updateBaseMiddleware.js
import { baseModelMap } from '../model/schemas/baseRouterMap.js' 
import { baseControllers } from '../controllers/updateBaseController.js'
import { baseSchemas } from '../model/schemas/basesSchemaMap.js' 


export function partialValidatorBuffer(baseMapa, partial = null) {
    if (partial) {
      return baseSchemas["csvBuffer"].partial(partial).safeParse(baseMapa)
    }
    return baseSchemas["csvBuffer"].safeParse(baseMapa)
  }
export function updateBaseMiddleware(req, res, next) {
  try {
    const { baseId } = req.params
    const file = req.file
    const uploader = req.body.uploader || 'Sistema'

    if (!file) {
      console.error('\nProblemas com o recebimento do arquivo\n')
      return res.status(400).json({ error: 'Arquivo não enviado.' })
    }
    if (!baseModelMap[baseId]) {
      return res.status(400).json({ error: 'Base desconhecida.' })
    }
    if (!baseControllers[baseId]) {
      return res.status(500).json({ error: 'Controller da base não implementado.' })
    }
    const metadata = {
      baseId: baseId,
      uploadedAt: new Date(),
      fileBuffer: file.buffer,
      uploader: uploader || 'Sistema',
    }
    if (req.body.id) {
      metadata.id = parseInt(req.body.id, 10)
    }

    const parsed = partialValidatorBuffer(metadata, { id: true })
    if (!parsed.success) {
      const details = parsed.error.format()
      return res.status(400).json({ error: 'Erro na validação dos metadados.', details })
    }

    req.validatedBaseMetadata = parsed.data
    req.selectedBaseController = baseControllers[baseId]
    next()
  } catch (error) {
    next(error)
  }
}
