



export async function uploadBase(req, res) {
    const base = req.body
    


    const result = await "funcão do model"

    return res.json({
        message: "Base recebida com sucesso",
        base: result
    })
}