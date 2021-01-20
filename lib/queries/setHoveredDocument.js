import gql from 'graphql-tag';

export default gql`
mutation setHoveredDocument($id: String! $xPosition: Int!) {
	setHoveredDocument(id: $id xPosition: $xPosition) @client
}
`;
