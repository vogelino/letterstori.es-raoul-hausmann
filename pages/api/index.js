import { ApolloServer } from '@saeris/apollo-server-vercel';
import typeDefs from '../../graphql/types';
import resolvers from '../../graphql/resolvers';

const server = new ApolloServer({
	typeDefs,
	resolvers,
	introspection: true,
	playground: true,
});

export default server.createHandler({
	cors: {
		origin: '*',
		credentials: true
	},
});

