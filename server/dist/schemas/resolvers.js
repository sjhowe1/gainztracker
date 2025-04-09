import { User, Exercise, Workout } from "../models/index";
import { signToken, AuthenticationError } from "../utils/auth";
const resolvers = {
    Query: {
        users: async () => {
            return await User.find();
        },
        user: async (_parent, { userId }) => {
            return await User.findOne({ _id: userId });
        },
        workouts: async () => {
            return await Workout.find();
        },
        workout: async (_parent, { workoutId }) => {
            return await Workout.findOne({ _id: workoutId });
        },
        exercises: async () => {
            return await Exercise.find();
        },
        exercise: async (_parent, { exerciseId }) => {
            return await Exercise.findOne({ _id: exerciseId });
        },
        me: async (_parent, _args, context) => {
            if (context.user) {
                return await User.findOne({ _id: context.user._id });
            }
            throw AuthenticationError;
        },
    },
    Mutation: {
        addUser: async (_parent, { input }) => {
            const user = await User.create(input);
            const token = signToken(user.username, user.email, user._id);
            return { token, user };
        },
        removeUser: async (_parent, _args, context) => {
            if (context.user) {
                return await User.findOneAndDelete({ _id: context.user._id });
            }
            throw AuthenticationError;
        },
        addWorkout: async (_parent, { userId, workout }, context) => {
            if (context.user) {
                return await User.findOneAndUpdate({ _id: userId }, {
                    $addToSet: { workouts: workout },
                }, {
                    new: true,
                    runValidators: true,
                });
            }
            throw AuthenticationError;
        },
        removeWorkout: async (_parent, { workout }, context) => {
            if (context.user) {
                return await User.findOneAndUpdate({ _id: context.user._id }, { $pull: { workouts: workout } }, { new: true });
            }
            throw AuthenticationError;
        },
    },
    addExercise: async (_parent, { workoutId, exercise }, context) => {
        if (context.user?.workouts.filter(workout => workout._id === workoutId)) {
            return await Workout.findOneAndUpdate({ _id: workoutId }, {
                $addToSet: { exercises: exercise },
            }, {
                new: true,
                runValidators: true,
            });
        }
        throw AuthenticationError;
    },
    removeExercise: async (_parent, { workoutId, exercise }, context) => {
        if (context.user?.workouts.filter(workout => workout._id === workoutId)) {
            return await User.findOneAndUpdate({ _id: context.user._id }, { $pull: { exercises: exercise } }, { new: true });
        }
        throw AuthenticationError;
    },
    login: async (_parent, { email, password }) => {
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
};
export default resolvers;
