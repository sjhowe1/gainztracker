import { gql } from '@apollo/client';
// Register Mutation
export const REGISTER_USER = gql`
    mutation Register($username: String!, $email: String!, $password: String!) {
        register(username: $username, email: $email, password: $password) {
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