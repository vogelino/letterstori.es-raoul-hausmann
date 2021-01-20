import gql from 'graphql-tag';

export default gql`
mutation setWindowDimensions {
	setWindowDimensions @client
}
`;
