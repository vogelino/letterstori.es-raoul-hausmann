import gql from 'graphql-tag';

export default gql`
mutation toggleStoryInformationsVisibility {
	toggleStoryInformationsVisibility @client
}
`;
