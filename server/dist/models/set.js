import { Schema, model } from 'mongoose';
const setSchema = new Schema({
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
}, {
    timestamps: true,
    toJSON: { getters: true },
    toObject: { getters: true }
});
const Set = model('Set', setSchema);
export default Set;
