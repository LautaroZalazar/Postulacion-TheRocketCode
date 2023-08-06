import env from "../config/dotenv.js";

let UserDao;

switch (env.DAO) {
  case "mysql":
    UserDao = (await import("./mysql/classes/userDao.js")).default;
    break;

  // Agrega más casos según tus necesidades

  default:
    throw new Error("DAO not supported");
}

export default UserDao;
