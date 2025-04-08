import { Muscle } from "./muscle";
import { Document } from "mongoose";
import { Set } from "./set"
import { IVideo } from "./video"

export interface IExercise extends Document {
    _id: string;
    name: string;
    description: string;
    primaryMuscle: Muscle;
    secondaryMuscles: Array<Muscle>;
    sets: Array<Set>;
    video: IVideo;
}