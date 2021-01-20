require('dotenv').config();
const chalk = require('chalk');
const { ApolloServer } = require('apollo-server');
const typeDefs = require('../graphql/types');
const resolvers = require('../graphql/resolvers');

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

server.listen({ port: 3001 }).then(({ url }) => {
	const log = console.log; // eslint-disable-line
	log('\n');
	log(chalk.bgGreen.black(`Server listening on ${url} ..`));
	log('\n');

	log(`${chalk.blue('/graphql')}  - endpoint for queries`);
	log(`${chalk.blue('/graphiql')} - endpoint for testing`);
	log('\n');
});
