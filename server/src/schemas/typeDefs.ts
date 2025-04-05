const typeDefs = `
    type User {
        _id: ID
        firstName: String
        lastName: String
        username: String
        email: String
        password: String
        workouts: [Workout]!
    }

    type Auth {
        token: ID!
        user: User
    }

    input UserInput {
        firstName: String!
        lastName: String!
        username: String!
        email: String!
        password!
    }
`;

export default typeDefs;