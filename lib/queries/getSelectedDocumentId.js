import gql from 'graphql-tag';

export default gql`
query getSelectedDocumentId {
	selectedDocument @client {
		id
	}
}
`;
