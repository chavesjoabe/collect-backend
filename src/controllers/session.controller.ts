import { Request, Response } from 'express';
import messagesConstants from '../common/messages.constants';
import UserModel from '../models/User.model';

class SessionController {
    public async createSession(req: Request, res: Response) {
        const { email, password } = req.body;

        const user = await UserModel.findOne({
            email: email,
            password: password,
        });

        if (!user) {
            return res.json({ message: messagesConstants.USER_NOT_FOUND });
        }

        return res.json(user);
    }
}
export default new SessionController();
