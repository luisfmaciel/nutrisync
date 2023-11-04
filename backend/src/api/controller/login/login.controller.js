import pkg from 'bcryptjs';
import authService from '../../../service/auth/auth.service.js';
import constants from './login.constants.js'
import GenericController from '../generic.controller.js';

class LoginController extends GenericController {
    constructor() {
        super();
        this._authService = authService;
        this._constants = constants;
        this._compare = pkg.compare;
    }

    async login(req, res, next) {
        const data = {};
        try {
            const body = req.body;
            const user = { email: body.email, password: body.password };
            
            if (!user) throw this._constants.USER_NOT_FOUND;
            
            // const passwordMatch = await this._compare(password, user.password);
            const passwordMatch = body.password === user.password;
            
            if (!passwordMatch) throw this._constants.MISMATCHED_PASSWORDS;
            
            const token = await this._authService.login(user);      
            data.token = token;
            
            this.sendSuccessResponse(res, this._constants.USER_SUCCESSFULLY_AUTHENTICATED, data, next);
        } catch (error) {
            this.sendErrorResponse(res, error, data, next);
        }
    }
}

export default new LoginController();
