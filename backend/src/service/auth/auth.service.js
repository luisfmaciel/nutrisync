import jwt from 'jsonwebtoken';
import GenericService from '../generic.service.js';

const AUTHENTICATION_SESSIONS = 'AUTHENTICATION_SESSIONS';
const jwtParams = {
    algorithm: 'HS256',
    expiresIn: '12h',
}

class AuthService extends GenericService {
    constructor() {
        super();
        this._jwt = jwt;
    }

    async login(user) {
        try {
            const token = this._jwt.sign({ datetime: new Date() }, process.env.JWT_SECRET, jwtParams);
            await this._redisService.hset(AUTHENTICATION_SESSIONS, token, user);
            const expirationAt = this._moment().utc().endOf('day').unix();
            await this._redisService.expirationAt(AUTHENTICATION_SESSIONS, expirationAt);
            return token;
        } catch (error) {
            throw error;
        }
    }
}

export default new AuthService();
