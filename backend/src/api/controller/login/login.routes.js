import { Router } from "express";
import loginController from "./login.controller.js";

const router = Router({ mergeParams: true });

router.post('/login', async (req, res, next) => loginController.login(req, res, next));

// router.get('/signout', (req, res, next) => loginController.logout(req, res, next));

export default router;
