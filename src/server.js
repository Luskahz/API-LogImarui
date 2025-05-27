import express from "express"
import basesRouter from "./router/basesRouter.js"
import cors from "cors"
import { logger } from "./middleware/logger.js" 
import { errorsHandler } from "./middleware/errorsHandler.js" 
import { notFoundController } from "./controllers/notFoundController.js"
import { welcomeController } from "./controllers/welcomeController.js" 

const app = express()
const port = 3000

app.use(logger)
app.use(cors())
app.use(express.json())


app.get('/', welcomeController)
app.use('/bases', basesRouter)

app.use('*', notFoundController)
app.use(errorsHandler)

app.listen(port, () => {
  console.log(`\n\nServidor rodando em http://localhost:${port}`)
})
