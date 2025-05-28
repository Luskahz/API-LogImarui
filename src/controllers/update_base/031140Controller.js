import csv from "csvtojson";
import { validateBaseById} from "../../model/schemas/basesSchemaMap.js";
import { create } from "../../model/bases/basesModel.js";
import { Parser } from 'json2csv';

function limparChavesDosObjetos(arr) {
  return arr
    .map(obj => {
      const novoObj = {};
      for (const key in obj) {
        const chaveLimpa = key.trim();
        if (typeof obj[key] === 'object' && obj[key] !== null) {
          for (const subKey in obj[key]) {
            novoObj[`${chaveLimpa} ${subKey}`] = obj[key][subKey];
          }
        } else {
          novoObj[chaveLimpa] = typeof obj[key] === 'string' ? obj[key].trim() : obj[key];
        }
      }
      return novoObj;
    })
    .filter(obj => {
      // Filtro para remover linhas inválidas
      if (!obj["Placa"] || !obj["Dt Entrega"] || !obj["KM Rodado"]) return false;
      if (obj["Mapa"]?.toLowerCase().includes("resumo")) return false;
      if (obj["Mapa"]?.toLowerCase().includes("tempo")) return false;
      return true;
    });
}

function jsonParaCsv(jsonData) {
  const json2csvParser = new Parser({ delimiter: ';' });
  const csv = json2csvParser.parse(jsonData);
  return csv;
}

export default async function base031140Controller(fileBuffer, uploader) {
  try {
    const now = Date.now();
    const formattedDate = new Date(now).toISOString().replace(/[-:]/g, '').replace('T', '_').split('.')[0];

    const fileString = fileBuffer.toString('latin1');
    
    const jsonData = await csv({
      delimiter: ';',
      checkType: false,
      noheader: false,
      trim: true,
      flatKeys: true
    }).fromString(fileString);

    if (!jsonData || jsonData.length === 0) {
      return { success: false, error: "Arquivo CSV vazio ou inválido." };
    }

    const jsonLimpo = limparChavesDosObjetos(jsonData);

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

    console.log('fileBuffer (tamanho):', fileBuffer.length);
    console.log('fileBuffer (início):', fileBuffer.toString('utf8', 0, 20000));

    const result = await create(metadata, '031140'); // 

    return {
      success: true,
      data: result
    };

  } catch (error) {
    console.error("Erro ao processar o CSV:", error);
    return { success: false, error: "Erro ao processar o arquivo CSV." };
  }
}
