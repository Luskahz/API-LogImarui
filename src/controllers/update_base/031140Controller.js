import csv from "csvtojson";

export default async function base031140Controller(fileBuffer, uploader, req, res) {
  try {
    const jsonData = await csv().fromString(fileBuffer.toString('utf8'));

    if (!jsonData || jsonData.length === 0) {
      return res.status(400).send('Arquivo CSV vazio ou inválido.');
    }

    // Aqui você pode fazer a validação e persistência
    res.status(200).send('Base 031140 atualizada com sucesso!');
  } catch (error) {
    console.error("Erro ao processar o CSV:", error);
    res.status(500).send('Erro ao processar o arquivo CSV.');
  }
}