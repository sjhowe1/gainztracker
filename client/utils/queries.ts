import { gql } from '@apollo/client';
// Get User Query
export const GET_USERS = gql`
    query GetUser {
        user {
            _id
            username
            email
            firstName
            lastName
            workouts
        }
    }
`;

export const QUERY_SINGLE_USER = gql`
  query singleUser($userId: ID!) {
    user(userId: $userId) {
      _id
      username
      email
      firstName
      lastName
      workouts
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      firstName
      lastName
      workouts
    }
  }
`;

export const GET_WORKOUTS = gql`
    query GetWorkouts {
        workout {
            _id
            name
            description
            primaryMuscle
            secondaryMuscles
            exercises
        }
    }
`;

export const QUERY_SINGLE_WORKOUT = gql`
  query singleWorkout($workoutId: ID!) {
    workout(workoutId: $workoutId) {
      _id
      name
      description
      primaryMuscle
      secondaryMuscles
      exercises
    }
  }
`;

export const GET_EXERCISES = gql`
    query GetExercises {
        exercise {
            _id
            name
            description
            primaryMuscle
            secondaryMuscles
            sets
            video
        }
    }
`;

export const QUERY_SINGLE_EXERCISE = gql`
  query singleExercise($exerciseId: ID!) {
    exercise(exerciseId: $exerciseId) {
        _id
        name
        description
        primaryMuscle
        secondaryMuscles
        sets
        video
    }
  }
`;

export const GET_SETS = gql`
    query GetExercises {
        exercise {
            _id
            setNumber
            reps
            weight
        }
    }
`;

export const QUERY_SINGLE_SET = gql`
  query singleSet($setId: ID!) {
    set(setId: $setId) {
        _id
        setNumber
        reps
        weight
    }
  }
`;

export const GET_VIDEOS = gql`
    query GetVideos {
        video {
            _id
            name
            description
            url
        }
    }
`;

export const QUERY_SINGLE_VIDEO = gql`
  query singleVideo($videoId: ID!) {
    video(videoId: $videoId) {
        _id
        name
        description
        url
    }
  }
`;
