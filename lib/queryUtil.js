import { prop, pipe, path, defaultTo, identity } from 'ramda';
import { graphql } from 'react-apollo';
import getDocument from './queries/getDocument';
import getAllDocuments from './queries/getAllDocuments';
import getStory from './queries/getStory';
import getStories from './queries/getStories';
import getEntities from './queries/getEntities';
import getSelectedStoryId from './queries/getSelectedStoryId';
import getSelectedDocumentId from './queries/getSelectedDocumentId';
import deselectDocument from './queries/deselectDocument';
import selectDocument from './queries/selectDocument';
import deselectStory from './queries/deselectStory';
import selectStory from './queries/selectStory';
import toggleDocumentInformationsSidebar from './queries/toggleDocumentInformationsSidebar';
import getDocumentInformationsSidebar from './queries/getDocumentInformationsSidebar';
import toggleAnnotationsVisibility from './queries/toggleAnnotationsVisibility';
import toggleStoryInformationsVisibility from './queries/toggleStoryInformationsVisibility';
import togglePreviewMode from './queries/togglePreviewMode';
import getPreviewUi from './queries/getPreviewUi';
import getAppUi from './queries/getAppUi';
import setHoveredAnnotationId from './queries/setHoveredAnnotationId';
import startAppLoading from './queries/startAppLoading';
import stopAppLoading from './queries/stopAppLoading';
import setWindowDimensions from './queries/setWindowDimensions';
import setHoveredDocument from './queries/setHoveredDocument';
import getHoveredDocument from './queries/getHoveredDocument';

const defaultPropsMatcher = identity;

export const withSelectedStoryId = (propsMapper = defaultPropsMatcher) =>
	graphql(getSelectedStoryId, {
		props: ({ ownProps, data, error }) =>
			propsMapper({
				...ownProps,
				error,
				selectedStoryId: path(['selectedStory', 'id'], data),
			}),
	});

export const withDocument = (propsMapper = defaultPropsMatcher) =>
	graphql(getDocument, {
		options: ({ selectedDocumentId }) => ({
			variables: { id: selectedDocumentId },
			skip: !selectedDocumentId,
		}),
		props: ({ ownProps, data, error }) => {
			const documentLoading = prop('loading', data);
			const document = pipe(prop('document'), defaultTo({}))(data);
			return propsMapper({ ...ownProps, error, documentLoading, ...document });
		},
	});

export const withAllDocuments = (propsMapper = defaultPropsMatcher) =>
	graphql(getAllDocuments, {
		props: ({ ownProps, data, error }) => {
			const documentsLoading = prop('loading', data);
			const documents = pipe(prop('allDocuments'), defaultTo([]))(data);
			return propsMapper({ ...ownProps, error, documentsLoading, documents });
		},
	});

export const withStory = (propsMapper = defaultPropsMatcher) =>
	graphql(getStory, {
		options: ({ selectedStoryId }) => ({
			variables: { id: selectedStoryId },
			skip: !selectedStoryId,
		}),
		props: ({ ownProps, data, error }) => {
			const storyLoading = prop('loading', data);
			const story = pipe(prop('story'), defaultTo({}))(data);
			return propsMapper({ ...ownProps, error, storyLoading, ...story });
		},
	});

export const withStories = (propsMapper = defaultPropsMatcher) =>
	graphql(getStories, {
		props: ({ ownProps, error, data }) => {
			const storiesLoading = prop('loading', data);
			const stories = pipe(prop('allStories'), defaultTo([]))(data);
			return propsMapper({ ...ownProps, error, storiesLoading, stories });
		},
	});

export const withEntities = (propsMapper = defaultPropsMatcher) =>
	graphql(getEntities, {
		props: ({ ownProps, error, data }) => {
			const entitiesLoading = prop('loading', data);
			const entities = pipe(prop('allEntities'), defaultTo([]))(data);
			return propsMapper({ ...ownProps, error, entitiesLoading, entities });
		},
	});

export const withDocumentUnselecter = (propsMapper = defaultPropsMatcher) =>
	graphql(deselectDocument, {
		props: ({ ownProps, mutate }) =>
			propsMapper({
				...ownProps,
				deselectDocument: () => mutate(),
			}),
	});

export const withDocumentSelecter = (propsMapper = defaultPropsMatcher) =>
	graphql(selectDocument, {
		props: ({ ownProps, mutate }) =>
			propsMapper({
				...ownProps,
				selectDocument: (id) => mutate({ variables: { id } }),
			}),
	});

export const withStoryUnselecter = (propsMapper = defaultPropsMatcher) =>
	graphql(deselectStory, {
		props: ({ ownProps, mutate }) =>
			propsMapper({
				...ownProps,
				deselectStory: () => mutate(),
			}),
	});

export const withStorySelecter = (propsMapper = defaultPropsMatcher) =>
	graphql(selectStory, {
		props: ({ ownProps, mutate }) =>
			propsMapper({
				...ownProps,
				selectStory: (id) => mutate({ variables: { id } }),
			}),
	});

export const withSelectedDocumentId = (propsMapper = defaultPropsMatcher) =>
	graphql(getSelectedDocumentId, {
		props: ({ ownProps, data }) =>
			propsMapper({
				...ownProps,
				selectedDocumentId: path(['selectedDocument', 'id'], data),
			}),
	});

export const withDocumentInformationsSidebarToggler = (
	propsMapper = defaultPropsMatcher,
) =>
	graphql(toggleDocumentInformationsSidebar, {
		props: ({ ownProps, mutate }) =>
			propsMapper({
				...ownProps,
				toggleDocumentInformationsSidebar: () => mutate(),
			}),
	});

export const withDocumentInformationsSidebarState = (
	propsMapper = defaultPropsMatcher,
) =>
	graphql(getDocumentInformationsSidebar, {
		props: ({ ownProps, data }) =>
			propsMapper({
				...ownProps,
				documentInformationsSidebarIsOpen: path(
					['documentInformationsSidebar', 'isOpen'],
					data,
				),
			}),
	});

export const withPreviewModeToggler = (propsMapper = defaultPropsMatcher) =>
	graphql(togglePreviewMode, {
		props: ({ ownProps, mutate }) =>
			propsMapper({
				...ownProps,
				togglePreviewMode: () => mutate(),
			}),
	});

export const withPreviewMode = (propsMapper = defaultPropsMatcher) =>
	graphql(getPreviewUi, {
		props: ({ ownProps, data }) =>
			propsMapper({
				...ownProps,
				previewMode: path(['previewUi', 'previewMode'], data),
			}),
	});

export const withAnnotationsVisibility = (propsMapper = defaultPropsMatcher) =>
	graphql(getPreviewUi, {
		props: ({ ownProps, data }) =>
			propsMapper({
				...ownProps,
				showAnnotations: path(['previewUi', 'showAnnotations'], data),
			}),
	});

export const withAnnotationsVisibilityToggler = (
	propsMapper = defaultPropsMatcher,
) =>
	graphql(toggleAnnotationsVisibility, {
		props: ({ ownProps, mutate }) =>
			propsMapper({
				...ownProps,
				toggleAnnotationsVisibility: () => mutate(),
			}),
	});

export const withStoryInformationsVisibility = (
	propsMapper = defaultPropsMatcher,
) =>
	graphql(getPreviewUi, {
		props: ({ ownProps, data }) =>
			propsMapper({
				...ownProps,
				showStoryInformations: path(
					['previewUi', 'showStoryInformations'],
					data,
				),
			}),
	});

export const withStoryInformationsVisibilityToggler = (
	propsMapper = defaultPropsMatcher,
) =>
	graphql(toggleStoryInformationsVisibility, {
		props: ({ ownProps, mutate }) =>
			propsMapper({
				...ownProps,
				toggleStoryInformationsVisibility: () => mutate(),
			}),
	});

export const withHoveredAnnotationIdSetter = (
	propsMapper = defaultPropsMatcher,
) =>
	graphql(setHoveredAnnotationId, {
		props: ({ ownProps, mutate }) =>
			propsMapper({
				...ownProps,
				hoverAnnotation: (id) => mutate({ variables: { id } }),
			}),
	});

export const withHoveredAnnotationId = (propsMapper = defaultPropsMatcher) =>
	graphql(getPreviewUi, {
		props: ({ ownProps, data }) =>
			propsMapper({
				...ownProps,
				hoveredAnnotationId: path(['previewUi', 'hoveredAnnotationId'], data),
			}),
	});

export const withAppLoading = (propsMapper = defaultPropsMatcher) =>
	graphql(getAppUi, {
		props: ({ ownProps, data }) =>
			propsMapper({
				...ownProps,
				appIsLoading: path(['appUi', 'loading'], data),
			}),
	});

export const withAppLoadingStarter = (propsMapper = defaultPropsMatcher) =>
	graphql(startAppLoading, {
		props: ({ ownProps, mutate }) =>
			propsMapper({
				...ownProps,
				startAppLoading: () => mutate(),
			}),
	});

export const withApploadingStopper = (propsMapper = defaultPropsMatcher) =>
	graphql(stopAppLoading, {
		props: ({ ownProps, mutate }) =>
			propsMapper({
				...ownProps,
				stopAppLoading: () => mutate(),
			}),
	});

export const withWindowDimensions = (propsMapper = defaultPropsMatcher) =>
	graphql(getAppUi, {
		props: ({ ownProps, data }) =>
			propsMapper({
				...ownProps,
				windowWidth: path(['appUi', 'windowWidth'], data),
				windowHeight: path(['appUi', 'windowHeight'], data),
			}),
	});

export const withWindowDimensionsSetter = (propsMapper = defaultPropsMatcher) =>
	graphql(setWindowDimensions, {
		props: ({ ownProps, mutate }) =>
			propsMapper({
				...ownProps,
				setWindowDimensions: () => mutate(),
			}),
	});

export const withhoveredDocumentSetter = (propsMapper = defaultPropsMatcher) =>
	graphql(setHoveredDocument, {
		props: ({ ownProps, mutate }) =>
			propsMapper({
				...ownProps,
				setHoveredDocument: ({ id, xPosition }) =>
					mutate({ variables: { id, xPosition } }),
			}),
	});

export const withhoveredDocument = (propsMapper = defaultPropsMatcher) =>
	graphql(getHoveredDocument, {
		props: ({ ownProps, data: hoveredDocument }) =>
			propsMapper({ ...ownProps, ...hoveredDocument }),
	});
