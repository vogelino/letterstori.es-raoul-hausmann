import getAppUi from '../queries/getAppUi';
import { getCacheWriter } from '../cacheUtil';

const defaults = {
	appUi: {
		loading: true,
		windowWidth: 1440,
		windowHeight: 800,
		__typename: 'AppUi',
	},
};

const writeInCache = getCacheWriter('appUi', getAppUi);
// const readInCache = getCacheReader('appUi', getAppUi);

const resolvers = {
	startAppLoading(_, __, { cache }) {
		writeInCache(cache, { loading: true });
		return null;
	},

	stopAppLoading(_, __, { cache }) {
		writeInCache(cache, { loading: false });
		return null;
	},

	setWindowDimensions(_, __, { cache }) {
		writeInCache(cache, {
			windowWidth: window.innerWidth,
			windowHeight: window.innerHeight,
		});
		return null;
	},
};

export default { defaults, resolvers };
