import { Router } from "express";
import { createUser, getUsers } from "../controllers/userController.js";
import { userFieldsValidate } from "../middlewares/userFieldsValidate.js";

const router = Router();

router.get("/", getUsers);

router.post("/", userFieldsValidate, createUser);

export default router;
