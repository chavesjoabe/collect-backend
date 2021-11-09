import express from 'express';
import Routes from './Routes/Routes';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

class App {
    private server = express();
    private port = process.env.PORT || 3000;
    private databaseUrl = process.env.DATABASE_URL || '';
    constructor() {
        this.middlewares();
    }

    public middlewares() {
        this.server.use(express.json());
        this.server.use(cors());
        this.server.use(Routes);
    }
    public startServer() {
        this.server.listen(this.port, () => {
            console.log('server is running on port', this.port);
        });
    }

    public createDatabaseConnection() {
        mongoose.connect(this.databaseUrl);
        const db = mongoose.connection;
        db.on('open', () => {
            console.log('database connected');
        });
        db.on('error', () => {
            console.log('error on database connection');
        });
    }
}

export default new App();
