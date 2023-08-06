import { UserDto } from "../../DTO/user.js";
import { UserModel } from "../mysqldb.js";

class UserDao {
  constructor() {}

  getAll = async () => {
    try {
      const users = await UserModel.findAll();
      return users;
    } catch (error) {
      console.log(error);
    }
  };

  createUser = async (user) => {
    try {
      const formattedUser = new UserDto(user);
      const dbUser = await UserModel.create(formattedUser);
      return dbUser.dataValues;
    } catch (error) {
      console.log(error);
    }
  };
}

export default new UserDao();
