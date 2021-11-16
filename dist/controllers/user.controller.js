"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_model_1 = __importDefault(require("../models/User.model"));
const messages_constants_1 = __importDefault(require("../common/messages.constants"));
class UserController {
    async findAll(req, res) {
        const users = await User_model_1.default.find();
        return res.json(users);
    }
    async create(req, res) {
        const { name, email, password, favorites, products } = req.body;
        try {
            const user = await User_model_1.default.create({
                name,
                email,
                password,
                favorites,
                products,
            });
            return res.status(201).json(user);
        }
        catch (error) {
            return res.status(500).json({
                message: messages_constants_1.default.INTERNAL_SERVER_ERROR,
                stack: error,
            });
        }
    }
    async update(req, res) {
        const { name, email, password, favorites, products } = req.body;
        const { id } = req.params;
        try {
            const updated = await User_model_1.default.updateOne({ id }, {
                name,
                email,
                password,
                favorites,
                products,
            });
            return res.json(updated);
        }
        catch (error) {
            return res
                .status(500)
                .json({
                message: messages_constants_1.default.INTERNAL_SERVER_ERROR,
                stack: error,
            });
        }
    }
    async remove(req, res) {
        const { id } = req.params;
        await User_model_1.default.deleteOne({ id });
        return res
            .status(200)
            .json({ message: `User #${id} has been deleted` });
    }
}
exports.default = new UserController();
//# sourceMappingURL=user.controller.js.map