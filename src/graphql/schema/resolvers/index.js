import camelCase from 'camelcase';
import { plural } from 'pluralize';
import entitiesData from '../../../data/entities.json';
import documentsData from '../../../data/documents.json';
import storiesData from '../../../data/stories.json';

const resolveEntityReferenceList = (docKey) => (doc) => (doc[docKey] || []).map((id) =>
	entitiesData.find((entity) => id === entity.id)
);

const createGettersByType = (type, dataSet) => ({
	[type]: (_, { id }) => dataSet.find((item) => id === item.id),
	[camelCase(`all-${plural(type)}`)]: () => dataSet,
});

const resolvers = {
	Query: Object.assign({},
		createGettersByType('document', documentsData),
		createGettersByType('entity', entitiesData),
		createGettersByType('story', storiesData),
	),
	Document: {
		creators: resolveEntityReferenceList('creators'),
		senders: resolveEntityReferenceList('senders'),
		recipients: resolveEntityReferenceList('recipients'),
		entityMentions: resolveEntityReferenceList('entityMentions'),
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
