import {
	GraphQLServer
} from 'graphql-yoga';

import db from './db';
import Query from './resolver/Query';
import Mutation from './resolver/Mutation';
import User from './resolver/User';
import Post from './resolver/Post';
import Comment from './resolver/Comment';

// Test data before database integration 

const server = new GraphQLServer({
	typeDefs: './src/schema.graphql',
	resolvers: {
		Query,
		Mutation,
		User,
		Post,
		Comment
	},
	context: {
		db
	}
});

server.start(() => {
	console.log("The server is running");
});