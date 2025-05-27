import csv from "csvtojson";
import fs from "fs";


export default async function base031140Controller(file, uploader, req, res) {
   const jsonData = await csv().fromFile(file.path)
    if (!jsonData || jsonData.length === 0) {
      return res.status(400).send('Arquivo CSV vazio ou inválido.');
    }

    
  res.status(200).send('Base 031140 atualizada com sucesso!')
}