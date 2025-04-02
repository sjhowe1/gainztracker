import {Schema, model} from 'mongoose';
import { IWorkout } from '../types/workout';

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
                type: String,
                trim: true
            }
        ],
        exercises: [
            {
                type: String,
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