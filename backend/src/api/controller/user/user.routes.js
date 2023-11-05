import { Router } from "express";
import userController from "../user/user.controller.js";

const router = Router({ mergeParams: true });

router.post('/', (req, res, next) => userController.createUser(req, res, next));

export default router;
