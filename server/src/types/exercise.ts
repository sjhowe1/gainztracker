import { Muscle } from "./muscle";
import { Document } from "mongoose";

export interface IExercise extends Document {
    _id: string;
    description: string;
    primaryMuscle: Muscle;
    secondaryMuscles: Array<Muscle>;
    video: any;
}