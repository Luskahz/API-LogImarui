import { Router } from 'express'
import multer from 'multer'
import updateBaseController from '../controllers/updateBaseController'

const router = Router()
const upload = multer()

router.post('/:baseId', upload.single('file'), updateBaseController)

export default router