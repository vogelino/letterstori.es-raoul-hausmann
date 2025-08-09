import React, { useRef } from 'react';
import { useAppState } from '../../lib/AppStateContext';
import TimelineComponent from '../presentational/Timeline';

const Timeline = () => {
	const timelineContentRef = useRef(null);
	const routesWrapperRef = useRef(null);

	const {
		documents,
		documentsLoading,
		actors,
		actorsLoading,
		actorsForDisplay,
		visibleRange,
		setVisibleRange,
		appUi: { windowWidth, windowHeight },
		selectedDocumentId,
		setSelectedDocumentId,
		hoveredDocument,
		setHoveredDocument,
		selectedStoryId,
	} = useAppState();

	const connections =
		documents?.map((doc) => ({
			id: doc.id,
			startPointXPosition: doc.xPosition,
			endPointsIndexes:
				doc.actorIds
					?.map((id) => actors?.findIndex((actor) => actor.id === id))
					.filter((idx) => idx !== -1) || [],
		})) || [];

	const earliestDocumentYear = Math.min(
		...(documents?.map((d) => new Date(d.date).getFullYear()) || [2000]),
	);
	const latestDocumentYear = Math.max(
		...(documents?.map((d) => new Date(d.date).getFullYear()) || [2023]),
	);

	return (
		<TimelineComponent
			documents={documents || []}
			connections={connections}
			actors={actors}
			actorsForDisplay={actorsForDisplay}
			selectDocument={setSelectedDocumentId}
			documentIsOpen={Boolean(selectedDocumentId)}
			hoveredDocument={hoveredDocument}
			setHoveredDocument={setHoveredDocument}
			hasStory={Boolean(selectedStoryId)}
			visibleRange={visibleRange}
			setVisibleRange={setVisibleRange}
			setTimelineContentRef={(ref) => {
				timelineContentRef.current = ref;
			}}
			setRoutesWrapperRef={(ref) => {
				routesWrapperRef.current = ref;
			}}
			earliestDocumentYear={earliestDocumentYear}
			latestDocumentYear={latestDocumentYear}
			windowWidth={windowWidth}
			windowHeight={windowHeight}
			documentsLoading={documentsLoading}
			actorsLoading={actorsLoading}
		/>
	);
};

export default Timeline;
