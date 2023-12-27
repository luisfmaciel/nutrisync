import OpenAI from "openai";

class OpenaiAdapter {
    constructor() {
        this._openai;
    }

    async createClient() {
        if (!this._openai) {
            const config = {
                apiKey: process.env.KEY_OPENAI,
            };
            this.createConnection(config);
        }
    }

    createConnection(config) {
        try {
            this._openai = new OpenAI(config);
            console.log("Connected to openai");
        } catch (error) {
            console.log("OpenAI - On error event", error);
        }
    }

    async runPrompt(prompt) {
        try {
            await this.createClient();
            const response = await this._openai.completions.create({
                model: 'text-davinci-003',
                prompt,
                max_tokens: 2048,
                temperature: 1
            });
            console.log('RESPONSE', response)
            return response;
        } catch(error) {
            console.log(error)
            throw error;
        }
        
    }
}

export default new OpenaiAdapter();
