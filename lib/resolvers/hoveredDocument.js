import getHoveredDocument from '../queries/getHoveredDocument';
import { getCacheWriter } from '../cacheUtil';

const writeInCache = getCacheWriter('hoveredDocument', getHoveredDocument);

const defaults = {
	hoveredDocument: {
		id: null,
		xPosition: 0,
		__typename: 'hoveredDocument',
	},
};

const resolvers = {
	setHoveredDocument(_, { id, xPosition }, { cache }) {
		writeInCache(cache, { id, xPosition });
		return { id, xPosition };
	},
};

export default { resolvers, defaults };
