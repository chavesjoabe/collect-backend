"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
class UserSchema {
    createSchema() {
        const userSchema = new mongoose_1.Schema({
            name: { type: String, required: true },
            email: { type: String, required: true },
            password: { type: String, required: true },
            collectPoints: { type: Array, required: false },
        });
        return userSchema;
    }
    loadModel() {
        return (0, mongoose_1.model)('User', this.createSchema());
    }
}
exports.default = new UserSchema().loadModel();
//# sourceMappingURL=User.model.js.map