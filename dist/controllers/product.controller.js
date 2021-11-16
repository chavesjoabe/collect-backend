"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CollectPoint_model_1 = __importDefault(require("../models/CollectPoint.model"));
const messages_constants_1 = __importDefault(require("../common/messages.constants"));
const User_model_1 = __importDefault(require("../models/User.model"));
class ProductController {
    async findAll(req, res) {
        const collectPoints = await CollectPoint_model_1.default.find();
        return res.status(200).json(collectPoints);
    }
    async create(req, res) {
        var _a;
        const { name, description, latitude, longitude, user: userId, } = req.body;
        const product = await CollectPoint_model_1.default.create({
            name,
            description,
            latitude,
            longitude,
            user: userId,
        });
        const owner = await User_model_1.default.findById(userId);
        if (!owner) {
            return res.status(400).json({
                message: messages_constants_1.default.NO_USER_FOUNDED_TO_LINK_PRODUCT,
            });
        }
        (_a = owner.collectPoints) === null || _a === void 0 ? void 0 : _a.push(product._id);
        await User_model_1.default.updateOne({ _id: owner._id }, { collectPoints: owner.collectPoints });
        await product.populate('user');
        return res.json(product);
    }
    async update(req, res) {
        const { id } = req.params;
        const { name, description, latitude, longitude, userId: user, } = req.body;
        const updated = await CollectPoint_model_1.default.updateOne({ id }, {
            name,
            description,
            latitude,
            longitude,
            user,
        });
        return res.json(updated);
    }
    async remove(req, res) {
        const { id } = req.params;
        await CollectPoint_model_1.default.deleteOne({ id });
        return res.json({ message: `collect point #${id} has been deleted` });
    }
}
exports.default = new ProductController();
//# sourceMappingURL=product.controller.js.map