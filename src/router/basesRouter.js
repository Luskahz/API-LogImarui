import { Router } from 'express'
import multer from 'multer'
import updateBaseController from '../controllers/updateBaseController.js'
import { updateBaseMiddleware } from '../middleware/updateBaseMiddleware.js'



const router = Router()
const upload = multer()


router.post('/:baseId', upload.single('file'), updateBaseMiddleware, updateBaseController)

export default router