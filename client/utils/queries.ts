import { gql } from '@apollo/client';
// Get Profile Query
export const GET_PROFILE = gql`
    query GetProfile {
        profile {
            username
            email
        }
    }
`;