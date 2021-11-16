import { Request, Response } from 'express';
import CollectPointModel from '../models/CollectPoint.model';
import messagesConstants from '../common/messages.constants';
import UserModel from '../models/User.model';

class ProductController {
    public async findAll(req: Request, res: Response) {
        const collectPoints = await CollectPointModel.find();

        return res.status(200).json(collectPoints);
    }

    public async create(req: Request, res: Response) {
        const {
            name,
            description,
            latitude,
            longitude,
            user: userId,
        } = req.body;

        const product = await CollectPointModel.create({
            name,
            description,
            latitude,
            longitude,
            user: userId,
        });

        const owner = await UserModel.findById(userId);
        if (!owner) {
            return res.status(400).json({
                message: messagesConstants.NO_USER_FOUNDED_TO_LINK_PRODUCT,
            });
        }

        owner.collectPoints?.push(product._id);

        await UserModel.updateOne(
            { _id: owner._id },
            { collectPoints: owner.collectPoints }
        );

        await product.populate('user');

        return res.json(product);
    }

    public async update(req: Request, res: Response) {
        const { id } = req.params;
        const {
            name,
            description,
            latitude,
            longitude,
            userId: user,
        } = req.body;

        const updated = await CollectPointModel.updateOne(
            { id },
            {
                name,
                description,
                latitude,
                longitude,
                user,
            }
        );

        return res.json(updated);
    }

    public async remove(req: Request, res: Response) {
        const { id } = req.params;

        await CollectPointModel.deleteOne({ id });

        return res.json({ message: `collect point #${id} has been deleted` });
    }
}

export default new ProductController();
