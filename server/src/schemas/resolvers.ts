import { User, Exercise, Workout } from "../models/index";
import { signToken, AuthenticationError } from "../utils/auth";
import { Muscle } from "../types/muscle";
import { Set } from "../types/set";
import { IWorkout } from "../types/workout";

interface User {
    _id: string;
    username: string;
    email: string;
    password: string;
    workouts: IWorkout[];
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
    name: string;
    description: string;
    primaryMuscle: Muscle;
    secondaryMuscles: Array<Muscle>;
}

interface RemoveWorkoutArgs {
    userId: string;
    workoutId: string;
}

interface AddExerciseArgs {
    workout: string;
    exercise: string;
    workoutId: string;
}

interface RemoveExerciseArgs {
    userId: string;
    workout: string;
    exercise: string;
    workoutId: string;
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
interface WorkoutArgs {
    workoutId: string;
}

interface ExerciseArgs {
    exerciseId: string;
}
const resolvers = {
    Query: {
        users: async (): Promise<User[]> => {
            return await User.find();
        },
        user: async (_parent: any, { userId }: UserArgs): Promise<User | null> => {
            return await User.findOne({ _id: userId });
        },
        workouts: async (): Promise<Workout[]> => {
            return await Workout.find();
        },
        workout: async (_parent: any, { workoutId }: WorkoutArgs): Promise<Workout | null> => {
            return await Workout.findOne({ _id: workoutId });
        },
        exercises: async (): Promise<Exercise[]> => {
            return await Exercise.find();
        },
        exercise: async (_parent: any, { exerciseId }: ExerciseArgs): Promise<Exercise | null> => {
            return await Exercise.findOne({ _id: exerciseId });
        },
        me: async (_parent: any, _args: any, context: Context): Promise<User | null> => {
            if (context.user) {
              return await User.findOne({ _id: context.user._id });
            }
            throw AuthenticationError;
          },
    },
    Mutation: {
        addUser: async (_parent: any, { input }: AddUserArgs): Promise<{ token: string; user: User }> => {
            const user = await User.create(input);
            const token = signToken(user.username, user.email, user._id);
            return { token, user };
        },
        removeUser: async (_parent: any, _args: any, context: Context): Promise<User | null> => {
            if (context.user) {
              return await User.findOneAndDelete({ _id: context.user._id });
            }
            throw AuthenticationError;
          },
        addWorkout: async (_parent: any, { userId, workout }: AddWorkoutArgs, context: Context): Promise<User | null> => {
            if (context.user) {
              return await User.findOneAndUpdate(
                { _id: userId },
                {
                  $addToSet: { workouts: workout },
                },
                {
                  new: true,
                  runValidators: true,
                }
              );
            }
            throw AuthenticationError;
          },
          removeWorkout: async (_parent: any, { workout }: RemoveWorkoutArgs, context: Context): Promise<User | null> => {
            if (context.user) {
              return await User.findOneAndUpdate(
                { _id: context.user._id },
                { $pull: { workouts: workout } },
                { new: true }
              );
            }
            throw AuthenticationError;
          },
        },
        addExercise: async (_parent: any, { workoutId, exercise }: AddExerciseArgs, context: Context): Promise<Exercise | null> => {
            if (context.user?.workouts.filter(workout => workout._id === workoutId)) {
              return await Workout.findOneAndUpdate(
                { _id: workoutId },
                {
                  $addToSet: { exercises: exercise },
                },
                {
                  new: true,
                  runValidators: true,
                }
              );
            }
            throw AuthenticationError;
          },
          removeExercise: async (_parent: any, { workoutId, exercise }: RemoveExerciseArgs, context: Context): Promise<Exercise | null> => {
            if (context.user?.workouts.filter(workout => workout._id === workoutId)) {
              return await User.findOneAndUpdate(
                { _id: context.user._id },
                { $pull: { exercises: exercise } },
                { new: true }
              );
            }
            throw AuthenticationError;
          },
    
        login: async (_parent: any, { email, password }: { email: string; password: string }): Promise<{ token: string; user: User }> => {
            const user = await User.findOne({ email });
            if (!user) {
              throw AuthenticationError;
            }
            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
              throw AuthenticationError;
            }
            const token = signToken(user.username, user.email, user._id);
            return { token, user };
          },
    }


export default resolvers;