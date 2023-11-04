import moment from 'moment';
import redisService from './redis/redis.service.js';

class GenericService {
    constructor() {
        this._moment = moment;
        this._redisService = redisService;
    }
}

export default GenericService;
