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

const findSiblingDocumentsInStory = (docId, storyId) => {
	const storyDocuments = documentsData.filter(({ story }) => story && story.id === storyId);
	const indexOfDoc = storyDocuments.findIndex(({ id }) => id === docId);
	const prevDocument = storyDocuments[indexOfDoc - 1] || storyDocuments[storyDocuments.length - 1];
	const nextDocument = storyDocuments[indexOfDoc + 1] || storyDocuments[0];
	return {
		prevDocumentInStory: prevDocument.id,
		nextDocumentInStory: nextDocument.id,
	};
};

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
		date: ({ date }) => new Date(date).toISOString(),
		thumbnail: ({ files }) => `${process.env.IMAGE_SMALL_BASE_URL}${files[0]}`,
		files: ({ files }) => files,
		story: ({ story, id: docId }) => {
			if (!story) return null;
			const storyDetails = storiesData.find(({ id: idInStories }) => idInStories === story.id);
			const extendedStory = Object.assign(
				{},
				story,
				(storyDetails || {}),
				findSiblingDocumentsInStory(docId, story.id),
			);
			return extendedStory;
		},
	},
};

export default resolvers;
