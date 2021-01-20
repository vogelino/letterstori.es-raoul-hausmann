import { mergeAll, map, prop } from 'ramda';
import selectedDocumentId from './selectedDocumentId';
import selectedStoryId from './selectedStoryId';
import documentInformationsSidebar from './documentInformationsSidebar';
import previewUi from './previewUi';
import hoveredDocument from './hoveredDocument';
import appUi from './appUi';

const combineResolver = (...resolverObjects) => {
	const allDefaults = map(prop('defaults'), resolverObjects);
	const allResolvers = map(prop('resolvers'), resolverObjects);
	const defaults = mergeAll(allDefaults);
	const resolvers = { Mutation: mergeAll(allResolvers) };
	return { defaults, resolvers };
};

export const { defaults, resolvers } = combineResolver(
	selectedDocumentId,
	selectedStoryId,
	documentInformationsSidebar,
	previewUi,
	appUi,
	hoveredDocument,
);
