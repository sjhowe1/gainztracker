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