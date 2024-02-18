import userService from "../../../service/user/user.service.js";
import authService from "../../../service/auth/auth.service.js";
import { getAttributeValue, validateEmail, validadePassword } from "../../../utils/utils.js";
import constants from "./user.constants.js";
import GenericController from "../generic.controller.js";

class UserController extends GenericController {
    constructor() {
        super();
        this._userSevice = userService;
        this._authService = authService;
        this._constants = constants;
    }

    async findUserByEmail(email) {
        try {
            return await this._userSevice.findUserByEmail(email);
        } catch (error) {
            throw error;
        }
    }

    async createUser(req, res, next) {
        try {
            const body = getAttributeValue(req, "body", {});
            const email = getAttributeValue(body, "email", "");
            
            const errors = this.validateFields(body);
            
            const emailAlreadyExists = await this.findUserByEmail(email);
            if (emailAlreadyExists) errors['email'] = 'User already exists';

            if (Object.values(errors).length) throw errors;

            const user = await this._userSevice.createUser(body);
            
            const token = await this._authService.login(user);
            
            this.sendSuccessResponse(res, null, { ...user, token }, next);
        } catch (error) {
            this.sendErrorResponse(res, error, { success: false }, next);
        }
    }

    validateFields(fields) {
        const errors = {};
        Object.keys(fields).forEach(async (key) => {
            const value = fields[key] || '';
            if (key === "email") {
                const emailIsValid = validateEmail(value);
                if (!emailIsValid) errors[key] = this.setMessageError(key);    
            } else if (key === "password") {
                const passwordIsValid = validadePassword(value);
                if (!passwordIsValid) errors[key] = this.setMessageError(key);
            } else if (!value) {
                errors[key] = this.setMessageError(key);
            }
        });
        return errors;
    }

    setMessageError(field) {
        return `The ${field} field is invalid`;
    }
}

export default new UserController();
