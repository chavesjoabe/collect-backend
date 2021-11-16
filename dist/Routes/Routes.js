"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
const product_controller_1 = __importDefault(require("../controllers/product.controller"));
const session_controller_1 = __importDefault(require("../controllers/session.controller"));
class Routes {
    constructor() {
        this.routes = express_1.default.Router();
        this.loadRoutes();
        this.routes;
    }
    loadRoutes() {
        this.routes.get('/users', user_controller_1.default.findAll);
        this.routes.post('/users', user_controller_1.default.create);
        this.routes.put('/users/:id', user_controller_1.default.update);
        this.routes.delete('/users/:id', user_controller_1.default.remove);
        this.routes.get('/collect-points', product_controller_1.default.findAll);
        this.routes.post('/collect-points', product_controller_1.default.create);
        this.routes.put('/collect-points/:id', product_controller_1.default.update);
        this.routes.delete('/collect-points/:id', product_controller_1.default.remove);
        this.routes.post('/session', session_controller_1.default.createSession);
    }
}
exports.default = new Routes().routes;
//# sourceMappingURL=Routes.js.map