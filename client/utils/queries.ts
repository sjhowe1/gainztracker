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
    profile(userId: $userId) {
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
