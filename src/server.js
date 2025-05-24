import express from "express";
import basesRouter from "./router/basesRouter.js";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use("/bases", basesRouter);

app.listen(port, () => {
  console.log(`\n\nServidor rodando em http://localhost:${port}`);
});
