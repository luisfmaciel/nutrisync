import GenericController from "../generic.controller.js";
import openaiService from "../../../service/openai/openai.service.js";
import { template } from "./openai.template.js";
import { getAttributeValue } from "../../../utils/utils.js";

class OpenaiController extends GenericController {
    constructor() {
        super();
        this._openaiService = openaiService;
        this._template = template;
    }

    async buildPrompt(template, data) {
        template["food"] = getAttributeValue(data, "food", "Almoço");
        template["weight"] = getAttributeValue(data, "weight", 0);
        template["height"] = getAttributeValue(data, "height", 0);
        template["goal"] = getAttributeValue(data, "goal", "Manter peso");
        template["goalKgs"] = getAttributeValue(data, "goalKgs", 0);
        template["activityLevel"] = getAttributeValue(data, "activityLevel", "Moderado");
        template["restriction"] = getAttributeValue(data, "restriction", "Sem restrição");
        template["preference"] = getAttributeValue(data, "preference", "Sem preferência");

        return template;
    }

    async runPrompt(req, res, next) {
        try {
            let jsonResponse = {};
            const body = req.body || {};

            const prompt = await this.buildPrompt(this._template, body);
            const promptString = JSON.stringify(prompt);

            const response = await this._openaiService.runPrompt(promptString);

            if (response.choices[0].text) {
                jsonResponse = JSON.parse(response.choices[0].text);
                console.log(jsonResponse);
            } else throw new Error("Unable to get a response");

            this.sendSuccessResponse(res, "Sucesso", jsonResponse);
        } catch (error) {
            this.sendErrorResponse(res, error, {});
        }
    }
}

export default new OpenaiController();
