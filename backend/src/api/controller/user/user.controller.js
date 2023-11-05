import userService from "../../../service/user/user.service.js";
import { getAttributeValue, validateEmail, validadePassword } from "../../../utils/utils.js";
import constants from "./user.constants.js";
import GenericController from "../generic.controller.js";

class UserController extends GenericController {
    constructor() {
        super();
        this._userSevice = userService;
        this._constants = constants;
    }

    async findUserByEmailWithPassword(email) {
        try {
            return await this._userSevice.findUserByEmailWithPassword(email);
        } catch (error) {
            throw error;
        }
    }

    async createUser(req, res, next) {
        try {
            const body = getAttributeValue(req, "body", {});

            const errors = this.validateFields(body);
            if (errors) throw errors;

            const user = await this._userSevice.createUser(body);
            
            this.sendSuccessResponse(res, null, user, next);
        } catch (error) {
            this.sendErrorResponse(res, error, { success: false }, next);
        }
    }

    validateFields(fields) {
        const errors = {};
        Object.keys(fields).forEach((key) => {
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
