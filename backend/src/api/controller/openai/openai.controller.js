import GenericController from '../generic.controller.js';
import openaiService from '../../../service/openai/openai.service.js';

class OpenaiController extends GenericController {
    constructor() {
        super();

        this._openaiService = openaiService
    }

    async runPrompt(req, res, next) {
        try {
            const response = await this._openaiService.runPrompt(prompt);
            this.sendSuccessResponse(res, 'Sucesso', {})
        } catch (error) {
            this.sendErrorResponse(res, error, {})
        }
    }
}

export default new OpenaiController();