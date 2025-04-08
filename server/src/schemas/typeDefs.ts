const typeDefs = `
    type User {
        _id: ID
        firstName: String!
        lastName: String!
        username: String!
        email: String!
        password: String!
        workouts: [Workout]
        currentWeight: Float
        goalWeight: Float
        bodyFatPercentage: Float
    }

    type Auth {
        token: ID!
        user: User
    }

    type Muscle {
        _id: ID
        name: String!
    }

    type Workout {
        _id: ID
        name: String!
        description: String!
        primaryMuscle: Muscle!
        secondaryMuscles: [Muscle];
        exercises: [Exercise]
    }

    type Set {
        _id: ID
        number: Int!
        reps: Int!
    }

    type Exercise {
        _id: ID
        name: String!
        description: String!
        primaryMuscle: Muscle!
        secondaryMuscles: [Muscle]
        video: Video
        sets: [Set]!
    }

    type Video {
        _id: ID
        name: String!
        description: String!
        url: String!
    }

    input UserInput {
        firstName: String!
        lastName: String!
        username: String!
        email: String!
        password!
        currentWeight: Float
        goalWeight: Float
        bodyFatPercentage: Float
        workouts: [Workout]
    }

    input ExerciseInput {
        name: String!
        description: String!
        primaryMuscle: Muscle!
        secondaryMuscles: [Muscle]
        video: Video
        sets: [Set]
    }

    input WorkoutInput {
        name: String!
        description: String!
        primaryMuscle: Muscle!
        secondaryMuscles: [Muscle];
        exercises: [Exercise]
    }

    input VideoInput {
        name: String!
        description: String!
        url: String!
    }

    input SetInput {
        number: Int!
        reps: Int!
    }
`;

export default typeDefs;