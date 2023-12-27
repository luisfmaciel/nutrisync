import Redis from 'ioredis';

class RedisAdapter {
    constructor() {
        this._client = this.createClient();
    }

    async createClient() {
        if (!this._client && process.env.NODE_ENV === 'DEV') {
            const redisOptions = await this.getRedisOptions();
            this.createConnection(redisOptions);
        }
    }

    createConnection(redisOptions) {
        this._client = new Redis(redisOptions);
        this._client
            .on('connect', () => console.log('On connected event'))
            .on('ready', () => console.log('On ready event'))
            .on('error', (err) => console.log('On error event', err))
            .on('reconnecting', () => console.log('On reconnect event'))
            .on('close', () => console.log('On close event'))
            .on('end', () => console.log('On end event'));
    }

    async getRedisOptions() {
        return {
            port: process.env.REDIS_PORT,
            password: process.env.REDIS_PASSWORD,
        };
    }

    async set(key, value, expiration = 0) {
        try {
            let response;
            await this.createClient();
            if (value instanceof Object) value = JSON.stringify(value);
            response = await this._client.set(key, value);
            if (expiration) response = this._client.expireAt(key, expiration); 
            console.log('Key set')
            return response;
        } catch (error) {
            throw error;
        }
    }

    async get(key) {
        try {
            await this.createClient();
            const response = this._client.get(key);
            console.log("Getting a key value", response)
            return response;
        } catch (error) {
            throw error;
        }
    }
    
    // async del(key) {
    //     try {
    //         await this.createClient();
    //         console.log('Key deleted');
    //         return await this._client.del(key);
    //     } catch (error) {
    //         throw error;
    //     }
    // }
    
    async hset(hash, key, value) {
        try {
            this.createClient();
            if (value instanceof Object) value = JSON.stringify(value);
            console.log('Key set in hash')
            return await this._client.hset(hash, key, value)
        } catch (error) {
            throw error;
        }
    }
    
    async hget(hash, key) {
        try {
            await this.createClient();
            let response = this._client.hget(hash, key);
            console.log("Get a key in hash", response)
            return response;
        } catch (error) {
            throw error;
        }
    }
   
    async hdel(hash, key) {
        try {
            this.createClient();
            console.log('Key deleted from hash')
            await this._client.hdel(hash, key)
            return { hash, key, success: true }
        } catch (error) {
            throw error;
        }
    }
    
    async expirationAt(key, milliseconds) {
        try {
            await this._client.expireat(key, milliseconds);
            console.log('Defined key expiration')
        } catch (error) {
            throw error;
        }
    }

    // async getClientRedisConnection() {
    //     await this.createClient();
    //     return this._client;
    // }
}

export default new RedisAdapter();
