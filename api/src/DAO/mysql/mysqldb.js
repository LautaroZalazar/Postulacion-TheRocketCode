import { Sequelize } from "sequelize";
import env from "../../config/dotenv.js";
import User from "./models/user.js";

const { DB_PASSWORD, DB_USERNAME, DB_HOST, DB_NAME } = env;

export const sequelize = new Sequelize({
  database: DB_NAME,
  dialect: "mysql",
  username: DB_USERNAME,
  password: DB_PASSWORD,
  host: DB_HOST,
});

export const UserModel = User(sequelize);

export const connection = async () => {
  try {
    await sequelize.sync();
    console.log("db conected");
  } catch (error) {
    console.log(error);
  }
};
