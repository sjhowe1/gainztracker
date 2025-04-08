import {Schema, model} from 'mongoose';
import { Set } from '../types/set';

const setSchema = new Schema<Set>(
    {
        setNumber: {
            type: Number,
            required: true,
            trim: true
        },
        reps: {
            type: Number,
            required: true,
            trim: true
        },
        weight: {
            
                type: Number,
                required: true,
                trim: true
            }
        

    },
    {
        timestamps: true,
        toJSON: { getters: true},
        toObject: { getters: true}
    }
);

const Set = model<Set>('Set', setSchema);

export default Set;