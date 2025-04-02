import { Muscle } from "./muscle";

export type Exercise = {
    description: string;
    primaryMuscle: Muscle;
    secondaryMuscles: Array<Muscle>;
    video: any;
}