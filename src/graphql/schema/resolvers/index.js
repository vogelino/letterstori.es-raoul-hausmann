import entitiesData from '../../../data/entities.json';
import documentsData from '../../../data/documents.json';

const resolveEntityReferenceList = (doc) => doc.creators.map((id) =>
	entitiesData.find((entity) => id === entity.id)
);

const resolvers = {
	Query: {
		document(_, { id }) {
			return documentsData.find((doc) => id === doc.id);
		},
		allDocuments() {
			return documentsData;
		},
		entity(_, { id }) {
			return entitiesData.find((entity) => id === entity.id);
		},
		allEntities() {
			return entitiesData;
		},
	},
	Document: {
		creators: resolveEntityReferenceList,
		senders: resolveEntityReferenceList,
		recipients: resolveEntityReferenceList,
		entityMentions: resolveEntityReferenceList,
		date: ({ date }) => new Date(date),
		thumbnail: ({ files }) => `${process.env.IMAGE_SMALL_BASE_URL}${files[0]}`,
		filesLarge: ({ files }) => files.map((file) =>
			`${process.env.IMAGE_LARGE_BASE_URL}${file}`),
		filesMedium: ({ files }) => files.map((file) =>
			`${process.env.IMAGE_MEDIUM_BASE_URL}${file}`),
		filesSmall: ({ files }) => files.map((file) =>
			`${process.env.IMAGE_SMALL_BASE_URL}${file}`),
	},
};

export default resolvers;
