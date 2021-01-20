import getPreviewUi from '../queries/getPreviewUi';
import { getCacheWriter, getCacheReader } from '../cacheUtil';

const defaults = {
	previewUi: {
		showAnnotations: true,
		showStoryInformations: false,
		previewMode: 'FILES',
		hoveredAnnotationId: null,
		__typename: 'PreviewUi',
	},
};

const writeInCache = getCacheWriter('previewUi', getPreviewUi);
const readInCache = getCacheReader('previewUi', getPreviewUi);

const resolvers = {
	toggleAnnotationsVisibility(_, __, { cache }) {
		const prevShowAnnotations = readInCache(cache, 'showAnnotations');
		const showAnnotations = !prevShowAnnotations;
		writeInCache(cache, { showAnnotations });

		return showAnnotations;
	},

	toggleStoryInformationsVisibility(_, __, { cache }) {
		const prevShowStoryInformations = readInCache(
			cache,
			'showStoryInformations',
		);
		const showStoryInformations = !prevShowStoryInformations;
		writeInCache(cache, { showStoryInformations });

		return showStoryInformations;
	},

	togglePreviewMode(_, __, { cache }) {
		const prevPreviewMode = readInCache(cache, 'previewMode');
		const previewMode = prevPreviewMode === 'FILES' ? 'TRANSCRIPTION' : 'FILES';
		writeInCache(cache, { previewMode });

		return previewMode;
	},

	setHoveredAnnotationId(_, { id: hoveredAnnotationId }, { cache }) {
		writeInCache(cache, { hoveredAnnotationId });
		return null;
	},
};

export default { defaults, resolvers };
