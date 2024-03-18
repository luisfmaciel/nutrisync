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
        template["refeicao"] = getAttributeValue(data, "food", "Almoço");
        template["peso_kg"] = `${getAttributeValue(data, "weight", 0)}kg`;
        template["altura_cm"] = `${getAttributeValue(data, "height", 0)}cm`;
        template["idade"] = getAttributeValue(data, "age", 0);
        template["tipo_dieta"] = getAttributeValue(data, "goal", "Manter peso");
        template["peso_meta"] = `${getAttributeValue(data, "goalKgs", 0)}kg`;
        template["problemas_saúde"] = getAttributeValue(data, "healthProblems", "Nenhum");
        template["retricoes_alimentares"] = getAttributeValue(data, "restriction", "Sem restrição");
        template["preferencias_alimentares"] = getAttributeValue(data, "preference", "Sem preferência");

        return template;
    }

    async runPrompt(req, res, next) {
        try {
            let jsonResponse = {};
            const body = req.body || {};

            const prompt = await this.buildPrompt(this._template, body);
            const promptString = JSON.stringify(prompt);
            console.log(promptString);

            const response = await this._openaiService.runPrompt(promptString);

            if (response.choices[0].message) {
                jsonResponse = JSON.parse(response.choices[0].message.content);
                console.log(jsonResponse);
            } else throw new Error("Unable to get a response");

            this.sendSuccessResponse(res, "Sucesso", jsonResponse);
        } catch (error) {
            this.sendErrorResponse(res, error, {});
        }
    }
}

export default new OpenaiController();
