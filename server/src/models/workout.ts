import {Schema, model} from 'mongoose';
import { IWorkout } from '../types/workout';
import { Muscle } from '../types/muscle';

const workoutSchema = new Schema<IWorkout>(
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
        exercises: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Exercise'
            }
        ]

    },
    {
        timestamps: true,
        toJSON: { getters: true},
        toObject: { getters: true}
    }
);

const Workout = model<IWorkout>('Workout', workoutSchema);

export default Workout;