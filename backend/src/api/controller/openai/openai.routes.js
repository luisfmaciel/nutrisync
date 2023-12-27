import { Router } from "express";
import openaiController from "./openai.controller.js";

const router = Router({ mergeParams: true });

router.post('/', async (req, res) => {
    try {
        await openaiController.runPrompt(req, res)
    } catch (error) {
        userController.sendErrorResponse(res, { status: 500, message: 'Ocorreu um erro inesperado', error });
    }
});

export default router;