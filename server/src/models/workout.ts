import {Schema, model} from 'mongoose';
import { IWorkout } from '../types/workout';
import { IExercise } from '../types/exercise';
import { Muscle } from '../types/muscle';

const workoutSchema = new Schema<IWorkout>(
    {
        description: {
            type: String,
            required: false,
            trim: true
        },
        primaryMuscle: {
            type: Object as unknown as Muscle,
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
                type: Object as unknown as IExercise,
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

const Workout = model<IWorkout>('Workout', workoutSchema);

export default Workout;