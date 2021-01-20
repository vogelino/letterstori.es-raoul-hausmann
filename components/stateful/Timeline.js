import { compose, withState, lifecycle, withPropsOnChange } from 'recompose';
import { differenceInDays, getYear } from 'date-fns';
import {
	pipe,
	subtract,
	flip,
	map,
	concat,
	propEq,
	findIndex,
	multiply,
	divide,
	converge,
	isEmpty,
	last,
	head,
	slice,
	update,
} from 'ramda';
import Timeline from '../presentational/Timeline';
import {
	withAllDocuments,
	withEntities,
	withApploadingStopper,
	withAppLoading,
	withWindowDimensions,
	withWindowDimensionsSetter,
	withhoveredDocument,
	withhoveredDocumentSetter,
} from '../../lib/queryUtil';

const defaultPropsValues = {
	documents: [],
	visibleRange: {
		a: 37,
		b: 42,
	},
	windowWidth: 1440,
	windowHeight: 800,
};

const getDiffInDays = (a, b) => differenceInDays(a, b);

const getDocumentsTimespanInDays = converge(
	(earliest, latest) => Math.abs(getDiffInDays(earliest.date, latest.date)),
	[head, last],
);

const addXPositionToDocuments = (documents) => {
	const documentsTimespanInDays = getDocumentsTimespanInDays(documents);
	const earliestDocument = head(documents);

	return map(
		(doc) => ({
			...doc,
			xPosition: multiply(
				divide(getDiffInDays(doc.date, earliestDocument.date), documentsTimespanInDays),
				100,
			),
		}),
		documents,
	);
};

const getConnectionsFromDocuments = (documents, actors) =>
	map(
		({ id, xPosition, story, senders, recipients }) => ({
			id,
			color: story ? story.color : null,
			startPointXPosition: xPosition,
			endPointsIndexes: map(
				(actor) => findIndex(propEq('id', actor.id))(actors),
				concat(senders, recipients),
			),
		}),
		documents,
	);

export default compose(
	withApploadingStopper(),
	withAppLoading(),
	withWindowDimensionsSetter(),
	withWindowDimensions(),
	withhoveredDocument(),
	withhoveredDocumentSetter(),
	withEntities(({ entitiesLoading, entities }) => ({
		actorsLoading: entitiesLoading,
		actors: entities,
	})),
	withAllDocuments(),
	withState(
		'visibleRange',
		'setVisibleRange',
		({ visibleRange = defaultPropsValues.visibleRange }) => visibleRange,
	),
	withState('timelineContentRef', 'setTimelineContentRef', null),
	withState('routesWrapperRef', 'setRoutesWrapperRef', null),
	lifecycle({
		componentDidMount() {
			const { setWindowDimensions } = this.props;

			setWindowDimensions();
			window.addEventListener('resize', setWindowDimensions, { passive: true });
		},

		componentDidUpdate() {
			const { appIsLoading, stopAppLoading, actorsLoading, documentsLoading } = this.props;
			if (!documentsLoading && !actorsLoading && appIsLoading) {
				stopAppLoading();
			}
		},
	}),
	withPropsOnChange(
		['documents', 'actors', 'windowWidth'],
		({
			documents = defaultPropsValues.documents,
			actors = defaultPropsValues.actors,
			windowWidth = defaultPropsValues.windowWidth,
		}) => {
			const documentsWithXPosition = isEmpty(documents)
				? documents
				: addXPositionToDocuments(documents);

			const actorsForViewWidth = slice(0, pipe(
				flip(subtract)(64),
				flip(divide)(20),
				Math.round,
			)(windowWidth))(actors);
			const actorsForDisplay = update(
				actorsForViewWidth.length - 1,
				{ name: 'others', id: 'others' },
				actorsForViewWidth
			);

			return {
				documents: documentsWithXPosition,
				connections: getConnectionsFromDocuments(documentsWithXPosition, actors),
				earliestDocumentYear: isEmpty(documents) ? 0 : getYear(head(documents).date),
				latestDocumentYear: isEmpty(documents) ? 0 : getYear(last(documents).date),
				actorsForDisplay,
			};
		},
	),
)(Timeline);
