import gql from 'graphql-tag';

export default gql`
mutation startAppLoading {
	startAppLoading @client
}
`;
