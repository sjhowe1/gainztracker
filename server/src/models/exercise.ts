import {Schema, model} from 'mongoose';
import { IExercise } from '../types/exercise';

const exerciseSchema = new Schema<IExercise>(
    {
        description: {
            type: String,
            required: false,
            trim: true
        },
        primaryMuscle: {
            type: String,
            required: true,
            trim: true
        },
        secondaryMuscles: [
            {
                type: String,
                trim: true
            }
        ],
        video: [
            {
                type: URL,
                trim: true
            }
        ]

    },
    {
        timestamps: true,
        toJSON: { getters: true},
        toObject: { getters: true}
    }
);

const Exercise = model<IExercise>('Exercise', exerciseSchema);

export default Exercise;