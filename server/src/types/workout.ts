import { Exercise } from "./exercise";
import { Muscle } from "./muscle";
import { Set } from "./set";

export type Workout = {
    description: string;
    primaryMuscle: Muscle;
    secondaryMuscles: Array<Muscle>;
    exercises: Map<Exercise, Array<Set>>
}