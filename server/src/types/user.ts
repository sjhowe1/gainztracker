import {Document} from 'mongoose';
import { IWorkout } from './workout';

export interface IUser extends Document {
    _id: string;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
    workouts: Array<IWorkout>;
    currentWeight: number;
    goalWeight: number;
    bodyFatPercentage: number;
    isCorrectPassword(password: string): Promise<boolean>;
}