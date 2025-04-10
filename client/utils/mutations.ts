import { gql } from '@apollo/client';
// Register Mutation
export const REGISTER_USER = gql`
    mutation Register($username: String!, $email: String!, $password: String!, $firstname: String!, $lastname: String!) {
        register(username: $username, email: $email, password: $password, firstname: $firstname, lastname: $lastname) {
            message
        }
    }
`;

// Login Mutation
export const LOGIN_USER = gql`
    mutation Login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
        }
    }
`;

//Add Workout Mutation
export const ADD_WORKOUT = gql`
  mutation addWorkout($userId: ID!, $name: String!, $description: String!, $primaryMuscle: String!, $secondaryMuscles: [String]) {
    addWorkout(userId: $userId, name: $name, description: $description, primaryMuscle: $primaryMuscle, secondaryMuscles: $secondaryMuscles) {
      _id
      username
      workouts
    }
  }
`;

//Add Exercise Mutation
export const ADD_EXERCISE = gql`
  mutation addExercise($workoutId: ID!, $name: String!, $description: String!, $primaryMuscle: String!, $secondaryMuscles: [String]) {
    addExercise(workoutId: $workoutId, name: $name, description: $description, primaryMuscle: $primaryMuscle, secondaryMuscles: $secondaryMuscles) {
      _id
      name
      exercises
    }
  }
`;

//Add Set Mutation
export const ADD_SET = gql`
  mutation addSet($exerciseId: ID!, $setNumber: Int!, $reps: Int!, $weight: Int!) {
    addSet(exerciseId: $exerciseId, setNumber: $setNumber, reps: $reps, weight: $weight) {
      _id
      setNumber
      reps
      weight
    }
  }
`;

//Remove Workout Mutation
export const REMOVE_WORKOUT = gql`
  mutation removeWorkout($workoutId: ID!) {
    removeWorkout(workoutId: $workoutId) {
      _id
      username
      workouts
    }
  }
`;

//Remove Exercise Mutation
export const REMOVE_EXERCISE = gql`
  mutation removeExercise($workoutId: ID!, $exerciseName: String!) {
    removeExercise(workoutId: $workoutId, exerciseName: $exerciseName) {
      _id
      name
      exercises
    }
  }
`;

//Remove Set Mutation
export const REMOVE_SET = gql`
  mutation removeSet($exerciseId: ID!, $setNumber: Int!) {
    removeSet(exerciseId: $exerciseId, setNumber: $setNumber) {
      _id
      name
      sets
    }
  }
`;
