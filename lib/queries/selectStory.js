import gql from 'graphql-tag';

export default gql`
mutation selectStory($id: String!) {
	selectStory(id: $id) @client
}
`;
