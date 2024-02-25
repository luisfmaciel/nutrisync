import GenericService from "../generic.service.js";
import menuModel from "../../model/menu.model.js";

class MenuService extends GenericService {
    constructor() {
        super();

        this._menuModel = menuModel;
    }

    async createMenu(body) {
        try {
            return await this._menuModel.create(body);
        } catch (error) {
            throw error;
        }
    }

    async updateClassificationMenu(userId, nome, classification) {
        try {
            return await this._menuModel.updateOne({ userId, nome }, { $set: { classification } });
        } catch (error) {
            throw error;
        }
    }

    async deleteMenu(userId, nome) {
        try {
            return await this._menuModel.delete({ userId, nome });
        } catch (error) {
            throw error;
        }
    }

    async getMenuById(menuId) {
        try {
            return await this._menuModel.findOne({ _id: menuId });
        } catch (error) {
            throw error;
        }
    }

    async getAllMenus(userId) {
        try {
            return await this._menuModel.find({ userId });
        } catch (error) {
            throw error;
        }
    }

}

export default new MenuService();
