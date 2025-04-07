import { IExercise } from "./exercise";
import { Muscle } from "./muscle";
import { Set } from "./set";
import { Document } from "mongoose";

export interface IWorkout extends Document{
    _id: string;
    description: string;
    primaryMuscle: Muscle;
    secondaryMuscles: Array<Muscle>;
    exercises: Map<IExercise, Array<Set>>;
}