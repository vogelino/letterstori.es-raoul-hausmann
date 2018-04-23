import express from 'express';
import chalk from 'chalk';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import cors from 'cors';

import schema from './graphql/schema';
import config from './config';

const app = express();

const whitelist = ['http://localhost:3000'];
const corsOptions = {
	origin(origin, callback) {
		const originIsWhitelisted = whitelist.indexOf(origin) !== -1;
		callback(null, originIsWhitelisted);
	},
	credentials: true,
};
app.use(cors(corsOptions));
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema, context: {} }));
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.listen(config.PORT, () => {
	const log = console.log; // eslint-disable-line
	log('\n');
	log(chalk.bgGreen.black(`Server listening on http://localhost:${config.PORT}/ ..`));
	log('\n');

	log(`${chalk.blue('/graphql')}  - endpoint for queries`);
	log(`${chalk.blue('/graphiql')} - endpoint for testing`);
	log('\n');
});

export default app;
