import express, { Request, Response } from 'express';
import userController from '../controllers/user.controller';
import productController from '../controllers/product.controller';
import sessionController from '../controllers/session.controller';

class Routes {
    public routes = express.Router();

    constructor() {
        this.loadRoutes();
        this.routes;
    }

    public loadRoutes() {
        //user routes
        this.routes.get('/users/:id', userController.findOne);
        this.routes.get('/users', userController.findAll);
        this.routes.post('/users', userController.create);
        this.routes.put('/users/:id', userController.update);
        this.routes.delete('/users/:id', userController.remove);
        // product routes
        this.routes.get('/users/:id/collect-points', productController.findAllByUser);

        this.routes.get('/collect-points', productController.findAll);
        this.routes.post('/collect-points', productController.create);
        this.routes.put('/collect-points/:id', productController.update);
        this.routes.delete('/collect-points/:id', productController.remove);
        // session routes
        this.routes.post('/session', sessionController.createSession);
    }
}
export default new Routes().routes;
