import redisAdapter from '../../adapter/redis.adapter.js';

class RedisService {
    constructor() {
        this._redisAdapter = redisAdapter;
    }

    async hset(hash, key, value) {
        try {
            await this._redisAdapter.hset(hash, key, value);
            return true;
        } catch (error) {
            throw error;
        }
    }

    async hget(hash, key) {
        try {
            return await this._redisAdapter.hget(hash, key);
        } catch (error) {
            throw error;
        }
    }
    
    async hdel(hash, key) {
        try {
            return await this._redisAdapter.hdel(hash, key);
        } catch (error) {
            throw error;
        }
    }

    async set(key, value, expiration = 0) {
        try {
            await this._redisAdapter.set(key, value, expiration);
            return true;
        } catch (error) {
            throw error;
        }
    }
  
    async get(key) {
        try {
            return await this._redisAdapter.get(key);
        } catch (error) {
            throw error;
        }
    }

    async expirationAt(key, milliseconds) {
        try {
            await this._redisAdapter.expirationAt(key, milliseconds);
            return true;
        } catch (error) {
            throw error;
        }
    }
}

export default new RedisService();
