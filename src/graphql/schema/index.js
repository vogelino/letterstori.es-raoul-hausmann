import { makeExecutableSchema } from 'graphql-tools';
import { mergeTypes } from 'merge-graphql-schemas';

import resolvers from './resolvers';

import query from './types/query.graphql';
import entity from './types/entity.graphql';
import document from './types/document.graphql';

const typeDefs = mergeTypes([entity, document, query]);

const schema = makeExecutableSchema({
	typeDefs,
	resolvers,
});

export default schema;
