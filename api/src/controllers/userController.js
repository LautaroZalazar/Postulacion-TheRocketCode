import userService from "../services/userService.js";

export const getUsers = async (req, res) => {
  try {
    const users = await userService.getUsers();
    res.status(200).json({ status: "Success", payload: users });
  } catch (error) {
    res.status(500).json({ status: "Rejected", payload: error.message });
  }
};

export const createUser = async (req, res) => {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json({ status: "Success", payload: user });
  } catch (error) {
    res.status(500).json({ status: "Rejected", payload: "Error creating a user" });
  }
};
