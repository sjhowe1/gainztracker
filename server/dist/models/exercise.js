import { Schema, model } from 'mongoose';
const exerciseSchema = new Schema({
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
}, {
    timestamps: true,
    toJSON: { getters: true },
    toObject: { getters: true }
});
const Exercise = model('Exercise', exerciseSchema);
export default Exercise;
