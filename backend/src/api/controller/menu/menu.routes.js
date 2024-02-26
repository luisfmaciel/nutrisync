import { Router } from "express";
import menuController from "./menu.controller.js";

const router = Router({ mergeParams: true });

router.get('/', async (req, res) => {
    try {
        await menuController.getAllMenusByCategory(req, res)
    } catch (error) {
        menuController.sendErrorResponse(res, { status: 500, message: 'Ocorreu um erro inesperado', error });
    }
});

router.post('/create', async (req, res) => {
    try {
        await menuController.createMenu(req, res)
    } catch (error) {
        menuController.sendErrorResponse(res, { status: 500, message: 'Ocorreu um erro inesperado', error });
    }
});

router.put('/updateClassification', async (req, res) => {
    try {
        await menuController.updateClassificationMenu(req, res)
    } catch (error) {
        menuController.sendErrorResponse(res, { status: 500, message: 'Ocorreu um erro inesperado', error });
    }
});

router.delete('/delete', async (req, res) => {
    try {
        await menuController.deleteMenu(req, res)
    } catch (error) {
        menuController.sendErrorResponse(res, { status: 500, message: 'Ocorreu um erro inesperado', error });
    }
});

export default router;