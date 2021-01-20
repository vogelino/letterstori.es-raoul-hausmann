import gql from 'graphql-tag';

export default gql`
mutation selectDocument($id: String!) {
	selectDocument(id: $id) @client
}
`;
