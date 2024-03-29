import TestBase from '../../test.base.js';
import userService from '../../../src/service/user/user.service.js';
import { tags } from '../../../src/utils/constants.js';

class UserService extends TestBase {
    constructor() {
        super(userService, tags.TAG_SERVICE);
    }

    test() {
        beforeEach(() => {
            this._service = this.sinonMock(this.service);
            this._userModel = this.sinonMock(this.service._userModel);
        });

        describe("method findUserByEmail", () => {
            it("should find user by email", async () => {
                const email = "test@example.com";
                const userMock = { email, password: "hashedPassword" };

                this._userModel.expects('findOne').returns({
                    select: () => {
                        return Promise.resolve(userMock);
                    }
                });

                const result = await this.service.findUserByEmail(email);

                this.assert.deepEqual(result, userMock);
            });
            
            it("should handle errors when finding user by email", async () => {
                const email = "test@example.com";
                
                this._userModel.expects('findOne').throws(new Error("Database error"));
                
                try {
                    await this.service.findUserByEmail(email);
                } catch (error) {
                    this.assert.deepEqual(error.message, "Database error");
                }
            });
        });
        
        describe("method CreateUser", () => {
            it("should create a new user", async () => {
                const userMock = {
                    email: "test@example.com",
                    password: "hashedPassword",
                };
                
                this._userModel.expects('create').resolves(userMock);
                
                const result = await this.service.createUser(userMock);
                
                this.assert.deepEqual(result, userMock);
            });
            
            it("should handle errors when creating a user", async () => {
                const userMock = {
                    email: "test@example.com",
                    password: "hashedPassword",
                };
                
                this._userModel.expects('create').throws(new Error("Database error"));
                
                try {
                    await this.service.createUser(userMock);
                } catch (error) {
                    this.assert.deepEqual(error.message, "Database error");
                }
            });
        });
    }
}

new UserService().run();