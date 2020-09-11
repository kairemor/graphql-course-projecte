import {
	GraphQLServer
} from 'graphql-yoga';

// Test data before database integration 

const users = [{
		id: '1',
		name: 'Kaire',
		email: 'kaire@example.fr',
		age: 12
	},
	{
		id: '2',
		name: 'Cheikh',
		email: 'cheikh@example.fr',
		age: 12
	},
	{
		id: '3',
		name: 'Moustapha',
		email: 'nous@example.fr',
	},
];

const posts = [{
		id: '1',
		title: 'Graph ql the futur',
		body: 'The body of the graph ql post',
		published: true,
		'author': '1'
	},
	{
		id: '2',
		title: 'Deep learning',
		body: 'THe 5 revolution of the IT',
		published: false,
		author: '2'
	},
	{
		id: '3',
		title: 'NLP the way to take sens fro text in deep',
		body: 'NLP is a way of getting the sens of a text or generating text from it',
		published: true,
		'author': '2'
	},
];

const comments = [{
		'id': '1',
		text: 'first comment ',
		author: '1',
		post: '1'
	},
	{
		'id': '2',
		text: 'second comment',
		author: '1',
		post: '2'
	},
	{
		'id': '3',
		text: 'third comment ',
		author: '2',
		post: '2'
	},
	{
		'id': '4',
		text: 'fourth comment',
		author: '2',
		post: '3'
	},
];

const typeDefs = `
    type Query {
			comments: [Comment!]!
			users(query: String): [User!]!
			posts(query: String): [Post!]!
			me: User
			post: Post
		}

	type User {
		id: ID!
		name: String!
		email : String
		age: Int!
		employed: Boolean!
		gpa: Float	
		posts: [Post!]!
		comments: [Comment!]! 	
	}

	type Post {
		id: ID!
		title: String!
		body: String!
		published: Boolean!
		author : User!
		comments: [Comment!]!
	}

	type Comment {
		id: ID!
		text: String!
		author : User!
		post: Post!
	}
`;
const resolvers = {
	Query: {
		users(parent, args, ctx, info) {
			if (!args.query) {
				return users;
			}
			return users.filter(user => user.name.toLowerCase().includes(args.query.toLowerCase()));
		},
		posts(parent, args, ctx, info) {
			if (!args.query) {
				return posts;
			}
			return posts.filter(post => post.title.toLowerCase().includes(args.query.toLowerCase()) || post.body.toLowerCase().includes(args.query.toLowerCase()));
		},
		me() {
			return {
				id: 'avbc123',
				name: 'kaire',
				email: 'kairemor@gmail.fr',
				age: 22,
				employed: true
			};
		},
		post() {
			return {
				id: 'avbc123',
				title: 'GraphQl the futur of the webservices',
				body: 'this is the content of the post',
				published: true
			};
		},
		comments(parent, args, ctx, info) {
			return comments;
		}
	},
	Post: {
		author(parent, args, ctx, info) {
			return users.find(user => user.id === parent.author);
		},
		comments(parent, args, ctx, info) {
			return comments.filter(comment => comment.post === parent.id);
		}
	},
	User: {
		posts(parent, args, ctx, info) {
			return posts.filter(post => post.author === parent.id);
		},
		comments(parent, args, ctx, info) {
			return comments.filter(comment => comment.author === parent.id);
		}
	},
	Comment: {
		author(parent, args, ctx, info) {
			return users.find(user => user.id === parent.author);
		},
		post(parent, args, ctx, info) {
			return posts.find(post => post.id === parent.post);
		},
	}
};
const server = new GraphQLServer({
	typeDefs,
	resolvers
});

server.start(() => {
	console.log("The server is running in port 8000");
});