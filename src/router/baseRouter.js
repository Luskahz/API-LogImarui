import express from 'express'
import multer from 'multer'
import path from 'path'
import { atualBaseController } from '../controller/atualBaseController.js'
import { uploadBaseController } from '../controller/uploadBaseController.js'


const router  = express.Router()

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, 'uploads/')
    }, 
    filename: (req, file, cb)=>{
        const ext = path.extname(file.originalname)
        const uniqueName = `basebees_${Date.now()}${ext}`
        cb(null, uniqueName)
    }
})

const upload = multer({ storage })


router.post('/updateBase', upload.single('file'), uploadBaseController);
router.get('/atual', atualBaseController)



export default router