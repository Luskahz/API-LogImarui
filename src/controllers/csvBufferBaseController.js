import { 
    csvStringParaJson, 
    limparCabecalhosCsv, 
    getMinMaxDtEntrega, 
    jsonParaCsv, 
    LimparLixo 
} from "../controllers/csvTratamentController.js"
import { validateBaseById } from "../model/schemas/basesSchemaMap.js"

import { createCsvBuffer } from "../model/bases/csvBufferModel.js"


export default async function csvBufferBaseController(req, fileBuffer, uploader, baseId) {
try {
    //TRATANDO O ARQUIVO PARA JSON
    const fileString = fileBuffer.toString('latin1') //buffer em string
    const jsonData = await csvStringParaJson(fileString) //String em json
    if (!jsonData || jsonData.length === 0) {
      return { success: false, error: "\nArquivo CSV vazio ou inválido.\n" }

    }

    //TRATANDO O JSON
    const jsonCabeçalhoLimpo = limparCabecalhosCsv(jsonData)//limpar cabeçalhos
    const jsonLimpo = LimparLixo(jsonCabeçalhoLimpo, baseId)//limpar lixo do json com base no baseId
    const validateJsonData = validateBaseById(baseId, jsonLimpo)//validar se o json é válido para a base
    if (!validateJsonData.success) {
      const details = validateJsonData.error.format()
      return { success: false, error: "Csv incorreto, valide o arquivo", details }

    }
    //CONSTRUINDO METADADOS PARA SALVAR NO BUFFER
    const { minDate, maxDate } = getMinMaxDtEntrega(jsonLimpo)
    const csvString = jsonParaCsv(jsonLimpo)
    const fileBufferLimpo = Buffer.from(csvString, 'latin1')
    const metadata = {
      baseId: baseId,
      uploadedAt: new Date(),
      baseMinDate: minDate,
      baseMaxDate: maxDate,
      fileBuffer: fileBufferLimpo,  
      uploader: uploader || 'Developer',
    }

    //SALVANDO O BUFFER NA BASE CSVBUFFER
    const result = await createCsvBuffer(metadata)
    if (!result.success) {
      return { success: false, error: "Erro ao salvar o buffer no banco", details: result.details }
    } else{
      console.log(`Buffer salvo com sucesso na base csvBuffer para a baseId: ${baseId}`)
      return {
        success: true,
        data: result,
        bufferId: result.data.id
      }
      

    }
  } catch (error) {
    throw error

  }
}