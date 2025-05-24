import express from 'express'
import multer from 'multer'
import path from 'path'
import { atualBaseController } from '../controller/atualBaseController.js'
import { uploadBaseController } from '../controller/uploadBaseController.js'


const router  = express.Router()


const upload = multer({ storage })


router.post('/updateBase', upload.single('file'), uploadBaseController);
router.get('/atual', atualBaseController)



export default router