// middlewares/updateBaseMiddleware.js
import { baseModelMap } from '../model/schemas/baseRouterMap.js' 
import { baseControllers } from '../controllers/updateBaseController.js'
import { csvBufferBasesSchema } from '../model/schemas/basesSchemaMap.js'


export function partialValidator(baseMapa, partial = null) {
    if (partial) {
      return csvBufferBasesSchema.partial(partial).safeParse(baseMapa)
    }
    return csvBufferBasesSchema.safeParse(baseMapa)
  }
export function updateBaseMiddleware(req, res, next) {
  try {
    const { baseId } = req.params
    const file = req.file
    const uploader = req.body.uploader || 'Sistema'

    if (!file) {
      console.error('\nArquivo não enviado.\n')
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
      uploader
    }
    console.log('Metadados recebidos:', metadata)
    if (req.body.id) {
      metadata.id = parseInt(req.body.id, 10)
    }
    const parsed = partialValidator(metadata, { id: true })
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
