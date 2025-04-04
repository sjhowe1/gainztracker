import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
mongoose.connect(process.env.MONGO_URI as string);

const app = express();

const typeDefs = gql`
    type User {
        username: String
        email: String
    }
    type Query {
        profile: User
    }
    type Mutation {
        register(username: String!, email: String!, password: String!): Message
        login(email: String!, password: String!): Token
    }
    type Message {
        message: String
    }
    type Token {
        token: String
    }
`;

const resolvers = {
    Query: {
        profile: (_, __, { user }) => {
            if (!user) throw new Error('Not authenticated');
            return user;
        },
    },
    Mutation: {
        register: async (_, { username, email, password }) => {
            const hashedPassword = await bcrypt.hash(password, 10);
            return { message: 'User registered successfully' };
        },
        login: async (_, { email, password }) => {
            return { token: jwt.sign({ email }, process.env.JWT_SECRET as string, { expiresIn: '1h' }) };
        },
    },
};

const server = new ApolloServer({ typeDefs, resolvers });
server.start().then(() => {
    server.applyMiddleware({ app });
    app.listen(3001, () => console.log('Server running on port 3001'));
});