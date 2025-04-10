import {Schema, model} from 'mongoose';
import { IExercise } from '../types/exercise';
import { Muscle } from '../types/muscle';
import { Set } from '../types/set';
import { IVideo } from '../types/video';

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
                type: Object as unknown as Set,
                trim: true
            }
        ],
        video: {
            
                type: Object as unknown as IVideo,
                trim: true
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