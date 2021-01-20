import gql from 'graphql-tag';

export default gql`
	query getStories {
		allStories {
			title
			id
			summary
			description
			color
		}
	}
`;
