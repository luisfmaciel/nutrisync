import userService from '../../../service/user/user.service.js'
import { getAttributeValue } from '../../../utils/utils.js';
import GenericController from '../generic.controller.js';

class UserController extends GenericController {
    constructor() {
        super();
        this._userSevice = userService;
    }

    async findUserByEmail(email) {
        try {
            return await this._userSevice.findUserByEmailWithPassword(email);
        } catch (error) {
            throw error;
        }
    }

    async createUser(req, res, next) {
        try {
            const body = getAttributeValue(req, 'body', {});
            const user = await this._userSevice.createUser(body);
            this.sendSuccessResponse(res, null, user, next);
        } catch (error) {
            this.sendErrorResponse(res, error, { success: false }, next);
        }
    }

}

export default new UserController();
