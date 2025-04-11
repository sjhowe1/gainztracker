import {Schema, model} from 'mongoose';
import bcrypt from 'bcrypt';
import { IUser } from '../types/user';

const userSchema = new Schema<IUser> (
    {
        firstName: {
            type: String,
            required: true,
            unique: false,
            trim: true
        },
        lastName: {
            type: String,
            required: true,
            unique: false,
            trim: true
        },
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must match an email address!'],
        },
        password: {
            type: String,
            required: true,
            minlength: 8,
            maxlength: 20
        },
        workouts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Workout'
            }
        ],
        currentWeight: {
            type: Number,
            required: false,
            trim: true
        },
        goalWeight: {
            type: Number,
            required: false,
            trim: true
        },
        bodyFatPercentage: {
            type: Number,
            required: false,
            trim: true
        }
    },
    {
        timestamps: true,
        toJSON: { getters: true},
        toObject: { getters: true}
    }
);

userSchema.pre<IUser>('save', async function (next) {
    if(this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

userSchema.methods.isCorrectPassword = async function (password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password);
};

const User = model<IUser>('User', userSchema);

export default User;