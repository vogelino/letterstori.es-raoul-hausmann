import gql from 'graphql-tag';

export default gql`
query getSelectedStoryId {
	selectedStory @client {
		id
	}
}
`;
