import { Parser } from 'json2csv'
import csv from 'csvtojson'
import { baseSchemas } from '../model/schemas/basesSchemaMap.js';

export const baseLineRules = {
  '031140':   { mainColumns: ['Mapa', 'Dt Entrega'], minValidColumns: 3 },
  '030530':   { mainColumns: ['Mapa'],               minValidColumns: 3 },
  '030237':   { mainColumns: ['Mapa'],               minValidColumns: 3 },
  '030237_2': { mainColumns: ['Mapa'],               minValidColumns: 3 },
  'wms':      { mainColumns: ['Mapa'],               minValidColumns: 3 },
  'clientes': { mainColumns: ['Codigo Cliente'],     minValidColumns: 3 },
  'produtos': { mainColumns: ['Código'],             minValidColumns: 3 },
  'bees':     { mainColumns: ['tour_display_id'],    minValidColumns: 3 },
};

export async function csvStringParaJson(csvString, options = {}) {
  return await csv({ 
    delimiter: ';', checkType: false, noheader: false, trim: true, flatKeys: true, ...options
  }).fromString(csvString);
}
export function jsonParaCsv(jsonData) {
  const json2csvParser = new Parser({ delimiter: ';' });
  const csv = json2csvParser.parse(jsonData);
  return csv;
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
export function linhaValidaPorBase(obj, baseId) {
  const rules = baseLineRules[baseId]
  if (!rules) return true;

  const schema = baseSchemas[baseId]?._def?.type;
  
  // Checa se as colunas principais estão presentes, não vazias e válidas pelo Zod
  const principaisValidas = rules.mainColumns.every(col => {
    const valor = obj[col];
    if (valor === undefined || valor === null || String(valor).trim() === '') return false;
    if (schema && schema.shape && schema.shape[col]) {
      // Valida o valor usando o schema Zod da coluna
      const result = schema.shape[col].safeParse(valor);
      return result.success;
    }

    return true;
  });

  const colunasValidas = Object.values(obj).filter(
    v => v !== undefined && v !== null && String(v).trim() !== ''
  ).length;

  return principaisValidas && colunasValidas >= rules.minValidColumns;
}
export function LimparLixo(arr, baseId) {
  return arr.filter(obj => linhaValidaPorBase(obj, baseId))
}
export function getMinMaxDtEntrega(jsonArray) {
  // Filtra apenas objetos que têm "Dt Entrega" preenchido
  const datas = jsonArray
    .map(obj => obj["Dt Entrega"])
    .filter(dt => dt && typeof dt === "string" && dt.trim() !== "")
    .map(dt => {
      const [dd, mm, yyyy] = dt.split("/");
      return new Date(`${yyyy}-${mm}-${dd}`);
    })
    .filter(date => !isNaN(date.getTime()));

  if (datas.length === 0) return { minDate: null, maxDate: null };

  const minDate = new Date(Math.min(...datas));
  const maxDate = new Date(Math.max(...datas));
  return { minDate, maxDate };
}