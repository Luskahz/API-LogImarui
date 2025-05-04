import express from "express";
import baseRouter from "./router/baseRouter.js";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use("/base", baseRouter);

app.listen(port, () => {
  console.log(`\n\nServidor rodando em http://localhost:${port}`);
});
