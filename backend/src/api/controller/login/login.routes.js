import { Router } from "express";
import loginController from "./login.controller.js";
import userController from "../user/user.controller.js";
import jwtMiddleware from "../../middleware/jwt.middleware.js";

const router = Router({ mergeParams: true });

router.post('/', (req, res) => loginController.login(req, res));

router.get('/access', jwtMiddleware.checkRequestToken, (req, res, next) => {
    if (!req.token) res.status(401).json({ message: 'User not authorized', auth: false });
    else res.status(200).json(req.token.user)
});

router.post('/create', (req, res, next) => userController.createUser(req, res, next));

router.post('/logout', (req, res, next) => loginController.logout(req, res, next));

export default router;
