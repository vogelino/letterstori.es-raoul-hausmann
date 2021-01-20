import gql from 'graphql-tag';

export default gql`
query getDocument($id: String!) {
	document(id: $id) {
		id
		title
		date
		type
		senders {
			id
			firstName
			lastName
			name
		}
		recipients {
			id
			firstName
			lastName
			name
		}
		files
		thumbnail
		transcription
		story {
			id
			title
			summary
			color
			description
			prevDocumentInStory
			nextDocumentInStory
			correspondents {
				id
				firstName
				lastName
				name
				birthYear
				deathYear
			}
			elements {
				id
				content
				originalUnformattedTexts
				type
				shapes {
					points
					pageIndex
				}
			}
		}
	}
}
`;
