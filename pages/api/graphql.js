import Cors from 'cors';
import { ApolloServer } from '@saeris/apollo-server-vercel';
import typeDefs from '../../graphql/types';
import resolvers from '../../graphql/resolvers';
import initMiddleware from '../../lib/init-middleware.js';

const server = new ApolloServer({
	typeDefs,
	resolvers,
	introspection: true,
	playground: true,
});

const cors = initMiddleware(
	Cors({
		origin: '*',
		credentials: true
	})
)

export default async function handler(req, res) {
	await cors(req, res)
	await server.createHandler()(req, res);
}

