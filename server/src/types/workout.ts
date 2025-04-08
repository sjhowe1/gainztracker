import { IExercise } from "./exercise";
import { Muscle } from "./muscle";
import { Document } from "mongoose";

export interface IWorkout extends Document{
    _id: string;
    name: string;
    description: string;
    primaryMuscle: Muscle;
    secondaryMuscles: Array<Muscle>;
    exercises: Array<IExercise>
}