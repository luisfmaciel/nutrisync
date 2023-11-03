import redisAdapter from '../adapter/redis.adapter.js';

class RedisService {
    constructor() {
        this._redisAdapter = redisAdapter;
    }

    async hset(hash, key, value) {
        try {
            await this._redisAdapter.hset(hash, key, value);
            return true;
        } catch (error) {
            console.log(error);
        }
    }

    async hget(hash, key) {
        try {
            return await this._redisAdapter.hget(hash, key);
        } catch (error) {
            console.log(error);
        }
    }

    async set(key, value, expiration = 0) {
        try {
            await this._redisAdapter.set(key, value, expiration);
            return true;
        } catch (error) {
            console.log(error);
        }
    }
  
    async get(key) {
        try {
            return await this._redisAdapter.get(key);
        } catch (error) {
            console.log(error);
        }
    }

    async expirationAt(key, milliseconds) {
        try {
            await this._redisAdapter.expirationAt(key, milliseconds);
            return true;
        } catch (error) {
            consolse.log(error);
        }
    }
}

export default new RedisService();
