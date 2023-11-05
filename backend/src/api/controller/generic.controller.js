import moment from 'moment';
import redisService from '../../service/redis/redis.service.js';

class GenericController {
    constructor() {
        this._moment = moment
        this._redisService = redisService;
    }

    sendSuccessResponse(res, message, data, next = false) {;
        const response = {
            statusCode: 200,
            message: message || 'Sucesso',
            data: data || {},
        }
        res.status(200).json(response);
        if (next) next();
    }

    sendErrorResponse(res, error, data, next = false) {
        const statusCode = error.status || 400;
        const response = {
            statusCode,
            message: error.message || error,
            data: data || {},
        }
        res.status(statusCode).json(response);
        if (next) next();
    }
    
}

export default GenericController;
