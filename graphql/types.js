import { gql } from 'apollo-server';

export default gql`
	type Document {
		id: String!
		creators: [Entity]
		senders: [Entity]
		recipients: [Entity]
		title: String
		date: String
		type: String
		height: Float
		width: Float
		materialOrTechnique: String
		description: String
		transcription: String
		annotations: String
		convolute: String
		partsAmount: Int
		entityMentions: [Entity]
		location: String
		thumbnail: String
		files: [String]
		story: DocumentStory
	}

	type DocumentStory {
		id: String!
		title: String!
		summary: String!
		description: String!
		color: String!
		nextDocumentInStory: String
		prevDocumentInStory: String
		elements: [StoryElement]
		correspondents: [Entity]
	}

	type StoryElement {
		id: String!
		type: String!
		content: String!
		originalUnformattedTexts: [String]
		shapes: [Shape]
	}

	type Shape {
		pageIndex: Int
		points: String
	}

	type Entity {
		id: String!
		firstName: String
		name: String
		lastName: String
		birthYear: String
		deathYear: String
		lifespanString: String
		gender: String
		url: String
	}

	type Query {
		allEntities: [Entity]
		allDocuments: [Document]
		entity(id: String!): Entity
		document(id: String!): Document
		allStories: [Story]
		story(id: String!): Story
	}

	schema {
		query: Query
	}

	type Story {
		id: String!
		title: String!
		summary: String!
		description: String!
		color: String!
	}
`;
