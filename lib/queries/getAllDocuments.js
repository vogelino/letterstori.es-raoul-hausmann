import gql from 'graphql-tag';

export default gql`
query getAllDocuments {
	allDocuments {
		id
		date
		title
		type
		files
		senders {
			id
			name
			firstName
			lastName
		}
		recipients {
			id
			name
			firstName
			lastName
		}
		story {
			id
			title
			color
		}
	}
}
`;
