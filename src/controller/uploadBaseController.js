import csvtojson from 'csvtojson'; 
import { uploadBase } from '../model/baseModel.js'



export async function uploadBaseController(req, res) {
    try {
        if (!req.file) {
            return res.status(400).send('Nem um arquivo foi enviado');
        }
        const filePath = req.file.path;
        const jsonData = await csvtojson().fromFile(filePath);

        if (!Array.isArray(jsonData) || jsonData.length === 0) {
            return res.status(400).send('Arquivo CSV inválido ou vazio');
        }
        
        await uploadBase(jsonData);

        res.status(200).send('Dados atualizados com sucesso!');
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro ao processar o arquivo');
    }
}