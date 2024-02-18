import { Router } from "express";
import loginController from "./login.controller.js";
import jwtMiddleware from "../../middleware/jwt.middleware.js";

const router = Router({ mergeParams: true });

router.post('/', (req, res) => loginController.login(req, res));

router.get('/access', jwtMiddleware.checkRequestToken, (req, res, next) => {
    if (!req.token) res.status(401).json({ message: 'User not authorized', auth: false });
    else res.status(200).json(req.token)
});

router.get('/logout', async (req, res, next) => {
    try {
        await loginController.logout(req, res, next);
    } catch (error) {
        userController.sendErrorResponse(res, { status: 500, message: 'Ocorreu um erro inesperado', error });
    }
});

export default router;
