import gql from 'graphql-tag';

export default gql`
query getEntities {
	allEntities {
		id
		firstName
		lastName
		name
	}
}
`;
