import { csvStringParaJson, limparCabecalhosCsv, getMinMaxDtEntrega, jsonParaCsv, LimparLixo } from "../csvTratamentController.js"
import { validateBaseById} from "../../model/schemas/basesSchemaMap.js"
import { createCsvBuffer } from "../../model/bases/csvBufferModel.js"

export default async function base031140Controller(fileBuffer, uploader, baseId, req, bufferId) {
  try {
    //TRATANDO O ARQUIVO PARA JSON
    const fileString = fileBuffer.toString('latin1') //buffer em string
    const jsonData = await csvStringParaJson(fileString) //String em json
    if (!jsonData || jsonData.length === 0) {
      return { success: false, error: "\nArquivo CSV vazio ou inválido.\n" }
    }

    //TRATAMENTO DO JSON
    const jsonCabeçalhoLimpo = limparCabecalhosCsv(jsonData)//limpar cabeçalhos
    const jsonLimpo = LimparLixo(jsonCabeçalhoLimpo, baseId)//limpar lixo do json com base no baseId
    const validateJsonData = validateBaseById(baseId, jsonLimpo)//validar se o json é válido para a base
    if (!validateJsonData.success) {
      const details = validateJsonData.error.format()
      return { success: false, error: "Csv incorreto, valide o arquivo", details }
    }


    //CONSTRUINDO METADADOS PARA SALVAR NA BASE 031140
    const metadata = {}


    const result = await createCsvBuffer(metadata) //salva o buffer na base csvBufferBases

    return {
      success: true,
      data: result
    }

  } catch (error) {
    throw error
  }
}
