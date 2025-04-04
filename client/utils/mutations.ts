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