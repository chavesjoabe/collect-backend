"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const messages_constants_1 = __importDefault(require("../common/messages.constants"));
const User_model_1 = __importDefault(require("../models/User.model"));
class SessionController {
    async createSession(req, res) {
        const { email, password } = req.body;
        const user = await User_model_1.default.findOne({
            email: email,
            password: password,
        });
        if (!user) {
            return res.json({ message: messages_constants_1.default.USER_NOT_FOUND });
        }
        return res.json(user);
    }
}
exports.default = new SessionController();
//# sourceMappingURL=session.controller.js.map