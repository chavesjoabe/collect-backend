import UserModel, { User } from '../models/User.model';
import { Request, Response } from 'express';
import messagesConstants from '../common/messages.constants';

class UserController {
    public async findAll(req: Request, res: Response) {
        const users = await UserModel.find();

        return res.json(users);
    }

    public async create(req: Request, res: Response) {
        const { name, email, password, favorites, products } = req.body;

        try {
            const user = await UserModel.create({
                name,
                email,
                password,
                favorites,
                products,
            });

            return res.status(201).json(user);
        } catch (error) {
            return res.status(500).json({
                message: messagesConstants.INTERNAL_SERVER_ERROR,
                stack: error,
            });
        }
    }

    public async update(req: Request, res: Response) {
        const { name, email, password, favorites, products } = req.body;
        const { id } = req.params;

        try {
            const updated = await UserModel.updateOne(
                { id },
                {
                    name,
                    email,
                    password,
                    favorites,
                    products,
                }
            );

            return res.json(updated);
        } catch (error) {
            return res
                .status(500)
                .json({
                    message: messagesConstants.INTERNAL_SERVER_ERROR,
                    stack: error,
                });
        }
    }

    public async remove(req: Request, res: Response) {
        const { id } = req.params;

        await UserModel.deleteOne({ id });

        return res
            .status(200)
            .json({ message: `User #${id} has been deleted` });
    }
}
export default new UserController();
