import jwt from 'jsonwebtoken';

class JwtMiddleware {
    constructor() {
        this._secret = process.env.JWT.SECRET;
        this._jwt = jwt; 
    }

    async checkRequestToken(req, res, next) {
        try {
            const token = this.getTokenFromHeader(req);
    
            const decoded = await this.verifyJWT(token);
            req.token = decoded;
            next();
        } catch (error) {
            res.status(401).json({ error });
        }
    }

    async verifyJWT(token) {
        try {
            this._jwt.verify(token, this._secret, (err, decoded) => {
                if(err) return err;
                return decoded;
            });
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    getTokenFromHeader(req) {
        const token = req.headers.authorization;
        console.log(`Token: ${token}`);
        return token;
    }
}

export default new JwtMiddleware();
