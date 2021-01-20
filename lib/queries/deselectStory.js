import gql from 'graphql-tag';

export default gql`
mutation deselectStory {
	deselectStory @client
}
`;
