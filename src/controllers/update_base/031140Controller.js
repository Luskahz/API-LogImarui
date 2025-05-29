import { csvStringParaJson, limparCabecalhosCsv, getMinMaxDtEntrega, jsonParaCsv, LimparLixo } from "../csvTratamentController.js";
import { validateBaseById} from "../../model/schemas/basesSchemaMap.js";
import { createCsvBuffer } from "../../model/bases/basesModel.js";

export default async function base031140Controller(fileBuffer, uploader, baseId) {
  try {
    const fileString = fileBuffer.toString('latin1') //buffer em string
    const jsonData = await csvStringParaJson(fileString) //String em json

    if (!jsonData || jsonData.length === 0) {
      return { success: false, error: "\nArquivo CSV vazio ou inválido.\n" };
    }
    //tratamento do arquivo
    const jsonCabeçalhoLimpo = limparCabecalhosCsv(jsonData)
    const jsonLimpo = LimparLixo(jsonCabeçalhoLimpo, baseId); 
    const validateJsonData = validateBaseById(baseId, jsonLimpo);
    if (!validateJsonData.success) {
      const details = validateJsonData.error.format();
      return { success: false, error: "Csv incorreto, valide o arquivo", details };
    }
    const { minDate, maxDate } = getMinMaxDtEntrega(jsonLimpo);
    console.log("Data mais antiga:", minDate);
    console.log("Data mais recente:", maxDate);
    

    const csvString = jsonParaCsv(jsonLimpo);
    const fileBufferLimpo = Buffer.from(csvString, 'latin1');

    const metadata = {
      baseId: baseId,
      uploadedAt: new Date(),
      baseMinDate: minDate,
      baseMaxDate: maxDate,
      fileBuffer: fileBufferLimpo,  
      uploader: uploader || 'Developer',
    };

    const result = await createCsvBuffer(metadata); //salva o buffer na base csvBufferBases

    return {
      success: true,
      data: result
    };

  } catch (error) {
    throw error;
  }
}
