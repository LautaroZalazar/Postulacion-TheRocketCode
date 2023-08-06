import { Router } from "express";
import { createUser, getUsers } from "../controllers/userController.js";
import { userFieldsValidate } from "../middlewares/userFieldsValidate.js";
import { emailUniqueValidate } from "../middlewares/emailUniqueValidate.js";

const router = Router();

router.get("/", getUsers);

router.post("/", userFieldsValidate, emailUniqueValidate, createUser);

export default router;
