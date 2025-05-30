import { baseModelMap, baseFieldsMap } from "./baseRouterMap.js"

// Mapeamento dos campos obrigatórios por baseId
const extraFieldsByBase = {
  "031140": ["filename", "uploadedAt", "uploader"],
  "030530": ["filename", "uploadedAt", "uploader"],
  "030237": ["filename", "uploadedAt", "uploader"],
  "030237_2": ["filename", "uploadedAt", "uploader"],
  bees: ["filename", "uploadedAt", "uploader"],
  wms: ["filename", "uploadedAt", "uploader"],
  clientes: ["filename", "uploadedAt", "uploader"],
  produtos: ["filename", "uploadedAt", "uploader"]
}

// Função para construir o objeto de metadados
export function buildBaseMetadata(baseId, filename,) {

  // Pega os campos do modelo Prisma dinamicamente
  const modelDelegate = baseModelMap[baseId]
  if (!modelDelegate) throw new Error(`baseId ${baseId} não encontrado em baseModelMap impossivel validar schema para construção dos metadados`)

  // Usa o baseFieldsMap para pegar os campos válidos
  const modelFields = baseFieldsMap[baseId] || []

  // Monta o objeto apenas com os campos válidos
  const base = {}
  for (const key of modelFields) {
    if (data[key] !== undefined) {
      base[key] = data[key]
    }
  }

  // Adiciona campos extras obrigatórios
  const extras = extraFieldsByBase[baseId] || []
  if (extras.includes("filename")) base.filename = filename
  if (extras.includes("uploadedAt")) base.uploadedAt = new Date()
  if (extras.includes("uploader")) base.uploader = uploader

  return base
}