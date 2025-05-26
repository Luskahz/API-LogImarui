import { baseModelMap } from '../../utils/prisma.js'


import base031140Controller from './update_base/031140Controller.js'
import base030530Controller from './update_base/030530Controller.js'
import base030237Controller from './update_base/030237Controller.js'
import base030237_2Controller from './update_base/030237_2Controller.js'
import baseBeesController from './update_base/beesController.js'
import baseWMSController from './update_base/wmsController.js'
import baseClientesController from './update_base/clientesController.js'
import baseProdutosController from './update_base/produtosController.js'


export const baseControllers = {
  '031140': base031140Controller,
  '030530': base030530Controller,
  '030237': base030237Controller,
  '030237_2': base030237_2Controller,
  'bees': baseBeesController,
  'wms': baseWMSController,
  'clientes': baseClientesController,
  'produtos': baseProdutosController,
}
export default async function updateBaseController(req, res, next) {
  try {
    const { baseId } = req.params;
    const file = req.file;
    const uploader = req.body.uploader || 'Sistema';

    if (!file) {
      return res.status(400).send('Arquivo não enviado.');
    }

    if (!baseModelMap[baseId]) {
      return res.status(400).send('Base desconhecida.');
    }

    if (!baseControllers[baseId]) {
      return res.status(500).send('Controller da base não implementado.')
    }

    await baseControllers[baseId](file, uploader, req, res)

    return res.status(200).send('Validação concluída.'); // Placeholder

  } catch (error) {
    next(error);
  }
}