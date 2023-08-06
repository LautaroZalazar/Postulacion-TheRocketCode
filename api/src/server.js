import express from "express";
import { connection } from "./DAO/mysql/mysqldb.js";
import env from "./config/dotenv.js";
import mainRouter from "./routes/index.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/api", mainRouter);

const PORT = env.PORT;

if (env.DAO === "mysql") {
  connection();
}

app.listen(PORT, console.log(`Server listen at port ${PORT}`));
