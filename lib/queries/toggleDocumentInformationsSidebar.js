import gql from 'graphql-tag';

export default gql`
mutation toggleDocumentInformationsSidebar {
	toggleDocumentInformationsSidebar @client
}
`;
