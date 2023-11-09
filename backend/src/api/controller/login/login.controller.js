import pkg from 'bcryptjs';
import authService from '../../../service/auth/auth.service.js';
import constants from './login.constants.js'
import GenericController from '../generic.controller.js';
import userController from '../user/user.controller.js';
import { getAttributeValue } from '../../../utils/utils.js';

const AUTHENTICATION_SESSIONS = 'AUTHENTICATION_SESSIONS';

class LoginController extends GenericController {
    constructor() {
        super();
        this._authService = authService;
        this._userController = userController;
        this._constants = constants;
        this.compareSync = pkg.compareSync;
    }

    async login(req, res) {
        const data = {};
        try {
            const email = getAttributeValue(req, 'body.email');            
            const password = getAttributeValue(req, 'body.password', '');

            let user = await this._userController.findUserByEmailWithPassword(email);
            if (!user) throw this._constants.USER_NOT_FOUND;
            
            const passwordMatch = await user.checkPassword(password);       
            if (!passwordMatch) throw this._constants.MISMATCHED_PASSWORDS;
       
            user = getAttributeValue(user, '_doc', user);
            delete user.password;
            
            const token = await this._authService.login(user);      
            data.token = token;
            
            this.sendSuccessResponse(res, this._constants.USER_SUCCESSFULLY_AUTHENTICATED, data);
        } catch (error) {
            this.sendErrorResponse(res, error, data);
        }
    }
    
    async logout(req, res, next) {
        try {
            const token = getAttributeValue(req, 'headers.authorization');
            const data = this._redisService.hdel(AUTHENTICATION_SESSIONS, token);
            this.sendSuccessResponse(res, this._constants.USER_SUCCESSFULLY_DELETED, data, next);
        } catch (error) {
            this.sendErrorResponse(res, error, data, next);
        }
    }
}

export default new LoginController();
