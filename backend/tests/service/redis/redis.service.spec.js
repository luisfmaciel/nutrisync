import TestBase from "../../test.base.js";
import redisService from "../../../src/service/redis/redis.service.js";
import { tags } from "../../../src/utils/constants.js";

class RedisService extends TestBase {
    constructor() {
        super(redisService, tags.TAG_SERVICE);
    }

    test() {
        beforeEach(() => {
            this._service = this.sinonMock(this.service);
            this._redisAdapter = this.sinonMock(this.service._redisAdapter);
        });

        describe("method hset", () => {
            it('should set a value for a key in a hash in Redis', async () => {
                const hash = 'myHash';
                const key = 'myKey';
                const value = 'myValue';
          
                this._redisAdapter.expects('hset').resolves();
          
                const result = await this.service.hset(hash, key, value);
          
                this.expect(result).to.be.true;
              });

            it("should throw an error when RedisAdapter throws an error", async () => {
                const hash = "myHash";
                const key = "myKey";
                const expectedError = new Error("Redis error");

                this._redisAdapter.expects("hset").throws(expectedError);

                try {
                    await this.service.hset(hash, key);
                } catch (error) {
                    this.assert.deepEqual(error, expectedError);
                }
            });
        });

        describe("method hget", () => {
            it("should get value from hash in Redis", async () => {
                const hash = "myHash";
                const key = "myKey";
                const expectedValue = "myValue";

                this._redisAdapter.expects("hget").resolves(expectedValue);

                const result = await this.service.hget(hash, key);

                this.assert.deepEqual(result, expectedValue);
            });

            it("should throw an error when RedisAdapter throws an error", async () => {
                const hash = "myHash";
                const key = "myKey";
                const expectedError = new Error("Redis error");

                this._redisAdapter.expects("hget").throws(expectedError);

                try {
                    await this.service.hget(hash, key);
                } catch (error) {
                    this.assert.deepEqual(error, expectedError);
                }
            });
        });

        describe("method hdel", () => {
            it("should delete entry from hash in Redis", async () => {
                const hash = "myHash";
                const key = "myKey";
                const expectedResult = 1;

                this._redisAdapter.expects("hdel").resolves(expectedResult);

                const result = await this.service.hdel(hash, key);

                this.assert.deepEqual(result, expectedResult);
            });

            it("should throw an error when RedisAdapter throws an error", async () => {
                const hash = "myHash";
                const key = "myKey";
                const expectedError = new Error("Redis error");

                this._redisAdapter.expects("hdel").throws(expectedError);

                try {
                    await this.service.hdel(hash, key);
                } catch (error) {
                    this.assert.deepEqual(error, expectedError);
                }
            });
        });

        describe("method set", () => {
            it("should set a key-value pair in Redis", async () => {
                const key = "myKey";
                const value = "myValue";
                const expiration = 3600;
                const expectedResult = true;

                this._redisAdapter.expects("set").resolves();

                const result = await this.service.set(key, value, expiration);

                this.assert.deepEqual(result, expectedResult);
            });

            it("should throw an error when RedisAdapter throws an error", async () => {
                const key = "myKey";
                const value = "myValue";
                const expiration = 3600;
                const expectedError = new Error("Redis error");

                this._redisAdapter.expects("set").throws(expectedError);

                try {
                    await this.service.set(key, value, expiration);
                } catch (error) {
                    this.assert.deepEqual(error, expectedError);
                }
            });
        });

        describe("method get", () => {
            it("should get a value from Redis by key", async () => {
                const key = "myKey";
                const expectedValue = "myValue";

                this._redisAdapter.expects("get").resolves(expectedValue);

                const result = await this.service.get(key);

                this.assert.deepEqual(result, expectedValue);
            });
            
            it("should throw an error when RedisAdapter throws an error", async () => {
                const key = "myKey";
                const expectedError = new Error("Redis error");

                this._redisAdapter.expects("get").rejects(expectedError);

                try {
                    await this.service.get(key);
                } catch (error) {
                    this.assert.deepEqual(error, expectedError);
                }
            });
        });
        
        describe("method expirationAt", () => {
            it("should set expiration time for a key in Redis", async () => {
                const key = "myKey";
                const milliseconds = 60000;
                const expectedResult = true;
                
                this._redisAdapter.expects('expirationAt').resolves();
                
                const result = await this.service.expirationAt(key, milliseconds);
                
                this.assert.deepEqual(result, expectedResult);
            });
            
            it("should throw an error when RedisAdapter throws an error", async () => {
                const key = "myKey";
                const milliseconds = 60000; 
                const expectedError = new Error("Redis error");
                
                this._redisAdapter.expects('expirationAt').rejects(expectedError);
                    
                try {
                    await this.service.expirationAt(key, milliseconds);
                } catch (error) {
                    this.assert.deepEqual(error, expectedError);
                }
            });
        });
    }
}

new RedisService().run();
