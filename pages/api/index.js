import { ApolloServer } from '@saeris/apollo-server-vercel';
import typeDefs from '../../graphql/types';
import resolvers from '../../graphql/resolvers';

const server = new ApolloServer({
	cors: {
		origin: '*',
		credentials: true
	},
	typeDefs,
	resolvers,
	introspection: true,
	playground: true,
});

export default server.createHandler();

