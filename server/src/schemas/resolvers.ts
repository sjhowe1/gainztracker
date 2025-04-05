import { User, Exercise, Workout } from "../models/index";
import { signToken, AuthenticationError } from "../utils/auth";

interface User {
    _id: string;
    username: string;
    email: string;
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

const resolvers = {

};

export default resolvers;