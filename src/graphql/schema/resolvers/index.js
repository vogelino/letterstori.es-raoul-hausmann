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
		files: ({ files }) => files,
	},
};

export default resolvers;
