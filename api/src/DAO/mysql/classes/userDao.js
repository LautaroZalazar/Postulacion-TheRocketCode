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

  getUserByEmail = async email => {
    try {
      const user = await UserModel.findOne({
        where: {
          email,
        },
      });
      return user;
    } catch (error) {
      console.log(error);
    }
  };

  createUser = async user => {
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
