import "dotenv/config";
import { Command } from "commander";

const program = new Command();
program.option("-d, --dao <dao>", "define the persistence", "mysql");
program.option("-p, --port <port>", "define the port", 8080);
program.parse();

export default {
  PORT: program.opts().port,
  DB_HOST: process.env.DB_HOST,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_USERNAME: process.env.DB_USERNAME,
  DB_NAME: process.env.DB_NAME,
  DAO: program.opts().dao,
};
