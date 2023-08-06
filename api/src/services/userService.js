import UserDao from "../DAO/factory.js";

class UserService {
  constructor() {}

  async getUsers() {
    return await UserDao.getAll();
  }
  async getUserByEmail(email) {
    return await UserDao.getUserByEmail(email);
  }
  async createUser(user) {
    return await UserDao.createUser(user);
  }
}

export default new UserService();
