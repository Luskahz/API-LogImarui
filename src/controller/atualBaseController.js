import { atualBase } from "../model/baseModel.js"



export async function atualBaseController(req, res){
    try{
        const latest = await atualBase()
        if(!latest){
            return res.status(404).send('Nenhuma base encontrada...')
        }
        res.status(200).json(latest);

    } catch(error) {
        console.error(error);
        res.status(500).send('Erro ao buscar a base mais recente');
    }
    
    
}