import base030237_2Controller from './update_base/030237_2Controller.js'
import base030237Controller from './update_base/030237Controller.js'
import base030530Controller from './update_base/030530Controller.js'
import base031140Controller from './update_base/031140Controller.js'
import baseBeesController from './update_base/beesController.js'
import baseClientesController from './update_base/clientesController.js'
import baseProdutosController from './update_base/produtosController.js'
import baseWMSController from './update_base/wmsController.js'
import csvBufferBaseController from './csvBufferBaseController.js'


export const baseControllers = {
  '030237_2': base030237_2Controller,
  '030237':   base030237Controller,
  '030530':   base030530Controller,
  '031140':   base031140Controller,
  'bees':     baseBeesController,
  'clientes': baseClientesController,
  'produtos': baseProdutosController,
  'wms':      baseWMSController,
  'csvBuffer': csvBufferBaseController
}

export default async function updateBaseController(req, res, next) {
  try {
    //RECAPTULANDO
    const { validatedBaseMetadata, selectedBaseController } = req
    const { fileBuffer, uploader } = validatedBaseMetadata
    const { baseId } = req.params


    //SALVANDO O BUFFER NA BASE CSVBUFFER
    const resultBuffer = await baseControllers["csvBuffer"](req, fileBuffer, uploader, baseId)
    if (!resultBuffer.success) {
      return res.status(400).json({
        message: "erro ao salvar o buffer no banco",
        error: resultBuffer.error,
        details: resultBuffer.details
      })
    }
    const bufferId = resultBuffer.bufferId 

    //SALVANDO O CSV NA BASE ESPECÍFICA
    const result = await selectedBaseController(fileBuffer, uploader, baseId, req, bufferId)
    if (!result.success) {
      return res.status(400).json({
        message: "erro ao salvar os objetos na base",
        error: result.error,
        details: result.details
      })
    }

    //RESPOSTA AO USER
    return res.status(201).json({
      message: "Base atualizada com sucesso!\n",
      data: result.data
    })
  } catch (error) {
    next(error)
  }
}