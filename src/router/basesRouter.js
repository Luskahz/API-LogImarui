import express from 'express'
import { atualBaseController } from '../controller/atualBaseController.js'


const router  = express.Router()

router.get('/atual', atualBaseController)



export default router