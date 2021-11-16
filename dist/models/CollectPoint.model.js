"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
class CollectPointModel {
    createSchema() {
        const productSchema = new mongoose_1.Schema({
            name: { type: String, required: true },
            description: { type: String, required: true },
            latitude: { type: String, required: true },
            longitude: { type: String, required: true },
            user: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User' },
        });
        return productSchema;
    }
    loadModel() {
        return (0, mongoose_1.model)('CollectPoint', this.createSchema());
    }
}
exports.default = new CollectPointModel().loadModel();
//# sourceMappingURL=CollectPoint.model.js.map