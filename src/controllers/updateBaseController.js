import base030237_2Controller from './update_base/030237_2Controller.js'
import base030237Controller from './update_base/030237Controller.js'
import base030530Controller from './update_base/030530Controller.js'
import base031140Controller from './update_base/031140Controller.js'
import baseBeesController from './update_base/beesController.js'
import baseClientesController from './update_base/clientesController.js'
import baseProdutosController from './update_base/produtosController.js'
import baseWMSController from './update_base/wmsController.js'


export const baseControllers = {
  '030237_2': base030237_2Controller,
  '030237':   base030237Controller,
  '030530':   base030530Controller,
  '031140':   base031140Controller,
  'bees':     baseBeesController,
  'clientes': baseClientesController,
  'produtos': baseProdutosController,
  'wms':      baseWMSController
}

export default async function updateBaseController(req, res, next) {
  try {
    const { validatedBaseMetadata, selectedBaseController } = req
    const { fileBuffer, uploader } = validatedBaseMetadata

    const result = await selectedBaseController(fileBuffer, uploader)
    if (!result.success) {
      return res.status(400).json({ error: result.error, details: result.details });
    }
    return res.status(201).json({
      message: "Base atualizada com sucesso!",
      data: result.data
    });
  } catch (error) {
    next(error)
  }
}