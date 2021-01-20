import gql from 'graphql-tag';

export default gql`
mutation togglePreviewMode {
	togglePreviewMode @client
}
`;
