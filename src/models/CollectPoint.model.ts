import { model, Schema } from 'mongoose';

interface Product {
    id: string;
    name: string;
    description: string;
    latitude: string;
    longitude: string;
    user: string;
}

class CollectPointModel {
    private createSchema() {
        const productSchema = new Schema({
            name: { type: String, required: true },
            description: { type: String, required: true },
            latitude: { type: Number, required: true },
            longitude: { type: Number, required: true },
            user: { type: Schema.Types.ObjectId, ref: 'User' },
        });

        return productSchema;
    }

    public loadModel() {
        return model<Product>('CollectPoint', this.createSchema());
    }
}
export default new CollectPointModel().loadModel();
