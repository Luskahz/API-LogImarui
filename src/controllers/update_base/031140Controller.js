import { csvStringParaJson, limparCabecalhosCsv, jsonParaCsv } from "../csvTratamentController.js";
import { validateBaseById} from "../../model/schemas/basesSchemaMap.js";
import { create } from "../../model/bases/basesModel.js";

export default async function base031140Controller(fileBuffer, uploader) {
  try {
    const now = Date.now();
    const formattedDate = new Date(now).toISOString().replace(/[-:]/g, '').replace('T', '_').split('.')[0];

    const fileString = fileBuffer.toString('latin1');
    const jsonData = await csvStringParaJson(fileString)


    if (!jsonData || jsonData.length === 0) {
      return { success: false, error: "Arquivo CSV vazio ou inválido." };
    }

    // ajustar os cabeçalhos
    const jsonLimpo = limparCabecalhosCsv(jsonData);
    console.log('JSON Limpo:', jsonLimpo);
    //limpar lixo
    


    const validateJsonData = validateBaseById('031140', jsonLimpo);

    if (!validateJsonData.success) {
      const details = validateJsonData.error.format();
      return { success: false, error: "Erro na validação do CSV.", details };
    }
    const csvString = jsonParaCsv(jsonLimpo);
    const fileBufferLimpo = Buffer.from(csvString, 'latin1');

    const metadata = {
      filename: `base_031140_${formattedDate}.csv`,
      uploadedAt: new Date(),
      fileBuffer: fileBufferLimpo,  
      uploader: uploader || 'Sistema'
    };

    const result = await create(metadata, '031140'); // 

    return {
      success: true,
      data: result
    };

  } catch (error) {
    next(error)
  }
}
