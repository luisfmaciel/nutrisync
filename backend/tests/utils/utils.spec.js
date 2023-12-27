import bcrypt from "bcryptjs";
import TestBase from "../test.base.js";
import utils from "../../src/utils/utils.js";
import { tags } from "../../src/utils/constants.js";

class Utils extends TestBase {
    constructor() {
        super(utils, tags.TAG_UTILS);
    }

    test() {
        describe("method getAttributeValue", () => {
            beforeEach(() => {
                this._utils = this.sinonMock(this.utils);
                this._bcrypt = this.sinonMock(bcrypt);
            });

            it("should return the attribute value if it exists", () => {
                const object = {
                    nested: { attribute: "value" },
                };
                const path = "nested.attribute";

                const result = this.utils.getAttributeValue(object, path);

                this.assert.deepEqual(result, "value");
            });

            it("should return the default value if the attribute does not exist", () => {
                const object = {
                    nested: {},
                };
                const path = "nested.attribute";
                const defaultValue = "default";

                const result = this.utils.getAttributeValue(
                    object,
                    path,
                    defaultValue
                );

                this.assert.deepEqual(result, defaultValue);
            });

            it("should return the default value if an error occurs", () => {
                const object = null;
                const path = "nested.attribute";
                const defaultValue = "default";

                const result = this.utils.getAttributeValue(
                    object,
                    path,
                    defaultValue
                );

                this.assert.deepEqual(result, defaultValue);
            });
        });

        describe("method getDescendantProp", () => {
            it("should return the correct descendant property", () => {
                const object = {
                    nested: {
                        attribute: "value",
                    },
                };
                const path = "nested.attribute";

                const result = this.utils.getDescendantProp(object, path);

                this.assert.deepEqual(result, "value");
            });

            it("should return undefined for non-existent property", () => {
                const object = {
                    nested: {},
                };
                const path = "nested.attribute";

                const result = this.utils.getDescendantProp(object, path);

                this.expect(result).to.be.undefined;
            });
        });

        describe("method generateHash", () => {
            it("should return a hashed value", async () => {
                const value = "password";
                const expectedValue = "hashedValue"
                this._bcrypt.expects('hash').returns(Promise.resolve(expectedValue));

                const result = await this.utils.generateHash(value);
                this.assert.deepEqual(result, expectedValue);
            });

        });

        describe('method validateEmail', () => {
            it('should return true for a valid email', () =>{
                const email = 'test@example.com';
                const result = this.utils.validateEmail(email);
                this.expect(result).to.be.true;
            });
        
            it('should return false for an invalid email', () => {
                const email = 'invalid email';
                const result = this.utils.validateEmail(email);
                this.expect(result).to.be.false;
            });
        });

        describe('method validadePassword', () => {
            it('should return true for a valid password', () => {
                const password = 'Password1';
                const result = this.utils.validadePassword(password);
                this.expect(result).to.be.true;
            });
        
            it('should return false for a password without a lowercase letter', () => {
                const password = 'PASSWORD1';
                const result = this.utils.validadePassword(password);
                this.expect(result).to.be.false;
            });
        
            it('should return false for a password without an uppercase letter', () => {
                const password = 'password1';
                const result = this.utils.validadePassword(password);
                this.expect(result).to.be.false;
            });
        
            it('should return false for a password without a number', () => {
                const password = 'Password';
                const result = this.utils.validadePassword(password);
                this.expect(result).to.be.false;
            });
        
            it('should return false for a password with less than 6 characters', () => {
                const password = 'Pass1';
                const result = this.utils.validadePassword(password);
                this.expect(result).to.be.false;
            });
        });
    }
}

new Utils().run();
