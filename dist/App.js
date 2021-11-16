"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Routes_1 = __importDefault(require("./Routes/Routes"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
class App {
    constructor() {
        this.server = (0, express_1.default)();
        this.port = process.env.PORT || 3000;
        this.databaseUrl = process.env.DATABASE_URL || '';
        this.middlewares();
    }
    middlewares() {
        this.server.use(express_1.default.json());
        this.server.use((0, cors_1.default)());
        this.server.use(Routes_1.default);
    }
    startServer() {
        this.server.listen(this.port, () => {
            console.log('server is running on port', this.port);
        });
    }
    createDatabaseConnection() {
        mongoose_1.default.connect(this.databaseUrl);
        const db = mongoose_1.default.connection;
        db.on('open', () => {
            console.log('database connected');
        });
        db.on('error', () => {
            console.log('error on database connection');
        });
    }
}
exports.default = new App();
//# sourceMappingURL=App.js.map