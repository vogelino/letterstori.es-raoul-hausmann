import React from 'react';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { HttpLink } from 'apollo-link-http';
import { withClientState } from 'apollo-link-state';
import { onError } from 'apollo-link-error';
import { defaults, resolvers } from './resolvers';

const cache = new InMemoryCache();

const stateLink = withClientState({ resolvers, cache, defaults });

const errorLink = onError(({ graphQLErrors, networkError }) => {
	if (graphQLErrors) {
		/* eslint-disable no-console */
		graphQLErrors.map(({ message, locations, path }) =>
			console.log(
				`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
			),
		);
		/* eslint-enable no-console */
	}

	/* eslint-disable no-console */
	if (networkError) console.log(`[Network error]: ${networkError}`);
	/* eslint-enable no-console */
});

const remoteLink = new HttpLink({
	uri: process.env.GRAPHQL_URL || '/api/graphql',
	connectToDevTools: process.env.NODE_ENV !== 'production',
});

const config = {
	cache,
	link: ApolloLink.from([errorLink, stateLink, remoteLink]),
};

const client = new ApolloClient(config);

const Provider = ({ children }) => (
	<ApolloProvider client={client}>{children}</ApolloProvider>
);

export default Provider;
