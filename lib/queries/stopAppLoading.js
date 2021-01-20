import gql from 'graphql-tag';

export default gql`
mutation stopAppLoading {
	stopAppLoading @client
}
`;
