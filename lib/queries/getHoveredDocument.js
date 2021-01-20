import gql from 'graphql-tag';

export default gql`
	query getHoveredDocument {
		hoveredDocument @client {
			id
			xPosition
		}
	}
`;
