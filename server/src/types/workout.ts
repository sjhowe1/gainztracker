import { Exercise } from "./exercise";
import { Set } from "./set";

export type Workout = {
    description: string;
    primaryMuscle: string;
    secondaryMuscles: Array<string>;
    exercises: Map<Exercise, Array<Set>>
}