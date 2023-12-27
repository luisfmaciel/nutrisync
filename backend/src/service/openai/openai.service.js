import GenericService from "../generic.service.js";
import openaiAdapter from "../../adapter/openai.adapter.js";

class OpenaiService extends GenericService {
    constructor() {
        super();

        this._openaiAdapter = openaiAdapter;
    }

    async runPrompt(prompt) {
        try {
            return await this._openaiAdapter.runPrompt(prompt);
        } catch (error) {
            throw error;
        }
    }

}

export default new OpenaiService();
