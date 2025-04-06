import { User, Exercise, Workout } from "../models/index";
import { signToken, AuthenticationError } from "../utils/auth";
import { Muscle } from "../types/muscle";
import { Set } from "../types/set";

interface User {
    _id: string;
    username: string;
    mail: string;
    password: string;
    workouts: string[];
    firstName: string;
    lastName: string;
    currentWeight: number;
    goalWeight: number;
}

interface UserArgs {
    userId: string;
}

interface AddUserArgs {
    input: {
        username: string;
        email: string;
        password: string;
        firstName: string;
        lastName: string;
    }
}

interface AddWorkoutArgs {
     userId: string;
     workout: string;
    }

interface RemoveWorkoutArgs {
    userId: string;
    workout: string;
}

interface AddExerciseArgs {
    userId: string;
    workout: string;
    exercise: string;
}

interface RemoveExerciseArgs {
    userId: string;
    workout: string;
    exercise: string;
}

interface Context {
    user?: User;
}

interface Exercise {
    _id: string;
    description: string;
    primaryMuscle: Muscle;
    secondaryMuscles: Array<Muscle>;
    video: any;
}

interface Workout {
    _id: string;
        description: string;
        primaryMuscle: Muscle;
        secondaryMuscles: Array<Muscle>;
        exercises: Map<Exercise, Array<Set>>
}


const resolvers = {
  Query: {
      users: async (): Promise<User[]> => {
          return await User.find();
      },
      user: async (_parent: any, { userId }: UserArgs): Promise<User | null> => {
          return await User.findOne ({ _id: userId });
      },
      workouts: async (): Promise<Workout[]> => {
            return await Workout.find();
        }
  } 
}          
        
export default resolvers;