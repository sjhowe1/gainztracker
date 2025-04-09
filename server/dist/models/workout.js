import { Schema, model } from 'mongoose';
const workoutSchema = new Schema({
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
}, {
    timestamps: true,
    toJSON: { getters: true },
    toObject: { getters: true }
});
const Workout = model('Workout', workoutSchema);
export default Workout;
