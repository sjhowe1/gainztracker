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
        setNumber: Int!
        reps: Int!
        weight: Int!
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

    type Query {
        users: [User]!
        user(userId: ID!): User
        me: User
        workouts: [Workout]!
        workout(workoutId: ID!): Workout
        exercises: [Exercise]!
        exercise(exerciseId: ID!): Exercise
        videos: [Video]!
        video(videoID: ID!): Video
        muscles: [Muscle]!
        muscle(muscleID: ID!): Muscle
        set(setID: ID!): Set
    }

    type Mutation {
        addUser(input: UserInput!): Auth
        login(email: String!, password: String!): Auth

        addWorkout(userId: ID!, workout: WorkoutInput!): User
        addExercise(workoutId: ID!, exercise: ExerciseInput!): Workout
        addSet(exerciseId: ID!, set: SetInput!): Exercise
        addVideo(exerciseId: ID!, video: VideoInput!)

        removeUser: User
        removeWorkout(workoutId: ID!): User
        removeExercise(exerciseId: ID!): Workout
        removeSet(setId: ID!): Exercise
        removeVideo(videoId: ID!): Exercise
    }
`;
export default typeDefs;
