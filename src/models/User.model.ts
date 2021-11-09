import { Schema, model } from 'mongoose';

export interface User {
    id: string;
    name: string;
    email: string;
    password: string;
    collectPoints?: string[];
}
class UserSchema {
    private createSchema() {
        const userSchema = new Schema<User>({
            name: { type: String, required: true },
            email: { type: String, required: true },
            password: { type: String, required: true },
            collectPoints: { type: Array, required: false },
        });

        return userSchema;
    }

    public loadModel() {
        return model<User>('User', this.createSchema());
    }
}

export default new UserSchema().loadModel();
