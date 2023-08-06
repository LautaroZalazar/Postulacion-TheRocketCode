import userService from "../services/userService.js";

export const emailUniqueValidate = async (req, res, next) => {
  const { email } = req.body;
  const user = await userService.getUserByEmail(email);
  if (user) {
    return res.status(500).json({ status: "Rejected", payload: "this email already registered" });
  }
  next();
};
