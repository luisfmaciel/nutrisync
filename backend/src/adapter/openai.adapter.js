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
            const response = await this._openai.chat.completions.create({
                model: 'gpt-4-0125-preview',
                messages: [
                    {
                        role: 'system',
                        content: prompt
                    }
                ],
                max_tokens: 2048,
                temperature: 1
            });
            console.log('RESPONSE', response.choices[0].message.content)
            return response;
        } catch(error) {
            console.log(error)
            throw error;
        }
        
    }
}

export default new OpenaiAdapter();
