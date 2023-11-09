import { Router } from "express";
import openaiController from "./openai.controller.js";

const router = Router({ mergeParams: true });

router.post('/openai', (req, res) => openaiController.runPrompt(req, res));

export default router;