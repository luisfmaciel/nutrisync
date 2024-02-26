import GenericController from "../generic.controller.js";
import menuService from "../../../service/menu/menu.service.js";
import { getAttributeValue } from "../../../utils/utils.js";

class MenuController extends GenericController {
    constructor() {
        super();

        this._menuService = menuService;
    }

    
    async getMenuById(req, res, next) {
        try {
            const menuId = getAttributeValue(req, 'body.menuId', '');
            const data = await this._menuService.getMenuById(menuId);
            this.sendSuccessResponse(res, null, {...data, success: true}, next);
        } catch (error) {
            this.sendErrorResponse(res, error, { success: false }, next);
        }
    }

    async getAllMenusByCategory(req, res, next) {
        try {
            const userId = getAttributeValue(req, 'query.userId', '');    
            const cateogry = getAttributeValue(req, 'query.category', '');
            const data = await this._menuService.getAllMenus(userId, cateogry);
            this.sendSuccessResponse(res, null, {menus: data, success: userId ? true : false}, next);
        } catch (error) {
            this.sendErrorResponse(res, error, { success: false }, next);
        }
    }

    async createMenu(req, res, next) {
        try {
            const body = getAttributeValue(req, 'body', {});

            const data = await this._menuService.createMenu(body);
            
            this.sendSuccessResponse(res, "Menu is created", {...data, success: true}, next);
        } catch (error) {
            this.sendErrorResponse(res, error, { success: false }, next);
        }
    }

    async updateClassificationMenu(req, res, next) {
        try {
            let menus = [];
            const _id = getAttributeValue(req, "body._id", "");
            const classification = getAttributeValue(req, "body.classification", 0);

            const data = await this._menuService.updateClassificationMenu(
                _id,
                classification
            );
            
            if(data._doc) {
                menus = await this._menuService.getAllMenus(data._doc.userId, data._doc.tipo);
            } 

            this.sendSuccessResponse(res, "Menu is updated", { menus, classification: data.classification || 0 }, next);
        } catch (error) {
            this.sendErrorResponse(res, error, { success: false }, next);
        }
    }
    
    async deleteMenu(req, res, next) {
        try {
            const userId = getAttributeValue(req, "body.userId", "");
            const nome = getAttributeValue(req, "body.nome", "");

            await this._menuService.deleteMenu(userId, nome);

            this.sendSuccessResponse(res, "Menu is deleted", { success: true }, next);
        } catch (error) {
            this.sendErrorResponse(res, error, { success: false }, next);
        }
    }
}

export default new MenuController();
