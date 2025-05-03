import express from 'express'
import { uploadBase } from '../controller/uploadBaseController'


const router  = express.Router()


router.post('/UpdateBase', uploadBase) // rota para receber a base de dados