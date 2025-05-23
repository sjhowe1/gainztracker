import {Schema, model} from 'mongoose';
import { IExercise } from '../types/exercise';
import { Muscle } from '../types/muscle';

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
                type: Object as unknown as Muscle,
                trim: true
            }
        ],
        sets: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Set'
            }
        ],
        video: {
            
                type: Schema.Types.ObjectId,
                ref: 'Video'
            }
        

    },
    {
        timestamps: true,
        toJSON: { getters: true},
        toObject: { getters: true}
    }
);

const Exercise = model<IExercise>('Exercise', exerciseSchema);

export default Exercise;