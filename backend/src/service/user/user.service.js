import GenericService from '../generic.service.js';
import userModel from '../../model/user.model.js';

class UserService extends GenericService {
    constructor() {
        super();
        this._userModel  = userModel;
    }

    async findUserByEmailWithPassword(email) {
        try {
            return await this._userModel.findOne({ email }).select("+password");
        } catch (error) {
            throw error;
        }
    }
    
    async createUser(user) {
        try {
            return await this._userModel.create(user);
        } catch (error) {
            throw error;
        }
    }
}

export default new UserService();
