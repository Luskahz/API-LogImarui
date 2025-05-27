// middlewares/updateBaseMiddleware.js
import { baseModelMap } from '../model/utils/baseRouterMap.js' 
import { baseControllers } from '../controllers/updateBaseController.js'
import { baseMapaSchema } from '../model/utils/baseRouterMap.js';


export function partialValidator(baseMapa, partial = null){// função pra validação dos metadados do schemma
    if (partial) {
      return baseMapaSchema.partial(partial).safeParse(baseMapa);
    }
    return baseMapaSchema.safeParse(baseMapa);
  }
export function updateBaseMiddleware(req, res, next) {//middleware valida a existencia dos arquivos, e pra qual controller eles vão ser mandados
  const { baseId } = req.params
  const file = req.file
  const uploader = req.body.uploader || 'Sistema';

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
    filename: file.originalname,
    uploadedAt: new Date(),
    fileBuffer: file.buffer,
    uploader: req.body.uploader || 'Sistema'
  }
  if (req.body.id) {
    metadata.id = parseInt(req.body.id, 10);
  }
  const parsed = partialValidator(metadata, { id: true })
  if (!parsed.success) {
    const details = parsed.error.format()
    return res.status(400).json({ error: 'Erro na validação dos metadados.', details })
  }

  req.validatedBaseMetadata = parsed.data
  req.selectedBaseController = baseControllers[baseId]
  next()
}
