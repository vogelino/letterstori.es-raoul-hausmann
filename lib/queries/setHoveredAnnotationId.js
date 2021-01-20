import gql from 'graphql-tag';

export default gql`
mutation setHoveredAnnotationId($id: String!) {
	setHoveredAnnotationId(id: $id) @client
}
`;
