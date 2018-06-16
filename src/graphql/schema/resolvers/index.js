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

const findStoryDetails = (storyId) =>
	storiesData.find(({ id: idInStories }) => idInStories === storyId);

const findStoryCorrespondents = (storyId) => Object.values(
	documentsData
		.filter(({ story: docStory }) => docStory && docStory.id === storyId)
		.reduce((acc, doc) => {
			const docRecipients = resolveEntityReferenceList('recipients')(doc);
			const docSenders = resolveEntityReferenceList('senders')(doc);
			docRecipients.concat(docSenders).forEach((entity) => {
				acc[entity.id] = entity;
			});
			return acc;
		}, {})
);

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
			return Object.assign(
				{},
				story,
				findSiblingDocumentsInStory(docId, story.id),
				{
					storyDetails: findStoryDetails(story.id) || {},
					correspondents: findStoryCorrespondents(story.id),
				},
			);
		},
	},
};

export default resolvers;
