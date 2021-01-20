import gql from 'graphql-tag';

export default gql`
	query getStory($id: String!) {
		story(id: $id) {
			title
			id
			summary
			description
			color
		}
	}
`;
