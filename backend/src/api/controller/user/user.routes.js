import { Router } from "express";
import userController from "../user/user.controller.js";

const router = Router({ mergeParams: true });

router.post('/', async (req, res, next) => {
    try {
        await userController.createUser(req, res, next)
    } catch (error) {
        userController.sendErrorResponse(res, { status: 500, message: 'Ocorreu um erro inesperado', error });
    }
});

export default router;
