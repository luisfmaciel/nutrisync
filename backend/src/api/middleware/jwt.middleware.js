import jwt from 'jsonwebtoken';
import redisService from '../../service/redis/redis.service.js';

const AUTHENTICATION_SESSIONS = 'AUTHENTICATION_SESSIONS';

class JwtMiddleware {
    constructor() {
        this._jwt = jwt;
        this._redisService = redisService;
        this.checkRequestToken = this.checkRequestToken.bind(this);
    }

    async checkRequestToken(req, res, next) {
        try {
            const token = await this.getTokenFromHeader(req);
            const authenticated = await this._redisService.hget(AUTHENTICATION_SESSIONS, token);

            if (!authenticated) {
                req.token = '';
            } else {
                const decoded = await this.verifyJWT(token);
                req.token = decoded;
            }

            next();
        } catch (error) {
            res.status(401).json({ error });
        }
    }

    async verifyJWT(token) {
        let decodedToken;
        try {
            this._jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
                if(err) return err;
                decodedToken = decoded;
            });
            return decodedToken;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getTokenFromHeader(req) {
        const token = req.headers.authorization;
        console.log(`Token: ${token}`);
        return token;
    }

    initialize() {
        return this.checkRequestToken;
    }
}

export default new JwtMiddleware();
