import { ApolloServer } from '@saeris/apollo-server-vercel';
import typeDefs from '../../graphql/types';
import resolvers from '../../graphql/resolvers';

const server = new ApolloServer({
	typeDefs,
	resolvers,
	introspection: true,
	playground: true,
	headers: {
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Credentials': true,
	},
});

export default server.createHandler();

