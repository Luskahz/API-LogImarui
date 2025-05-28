import { Parser } from 'json2csv';
import csv from 'csvtojson';


export function limparChavesDosObjetos(arr) {
  const dataRegex = /^\d{2}\/\d{2}\/\d{4}$/; // Formato dd/mm/yyyy
  const numeroRegex = /^\d+$/; // Apenas dígitos

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
      const mapa = obj["Mapa"];
      const dataEntrega = obj["Dt Entrega"];

      if (!mapa || typeof mapa !== "string") return false;
      if (mapa.toLowerCase().includes("resumo") || mapa.toLowerCase().includes("tempo")) return false;
      if (!numeroRegex.test(mapa)) return false;

      if (!dataEntrega || typeof dataEntrega !== "string") return false;
      if (!dataRegex.test(dataEntrega)) return false;

      return true;
    });
}

export function limparCabecalhosCsv(arr) {//recebe um array de objetos e limpa as chaves dos objetos, removendo espaços em branco e tratando os valores
  return arr.map(obj => {
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
  });
}
export function LimparLixo(arr){
    
}

export function jsonParaCsv(jsonData) {
  const json2csvParser = new Parser({ delimiter: ';' });
  const csv = json2csvParser.parse(jsonData);
  return csv;
}

export async function csvStringParaJson(csvString, options = {}) {
  return await csv({
    delimiter: ';',
    checkType: false,
    noheader: false,
    trim: true,
    flatKeys: true,
    ...options
  }).fromString(csvString);
}