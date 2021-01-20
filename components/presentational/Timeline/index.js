import React from 'react';
import PropTypes from 'prop-types';
import {
	Wrapper,
	NavigatorWrapper,
	TimelineContextWrapper,
	ThumbnailsWrapper,
	ActorsWrapper,
	ConnectionsWrapper,
	TimelineContent,
	NavigatorGradient,
} from './styles';
import Navigator from '../TimelineNavigator';
import TimelineContext from '../TimelineContext';
import TimelineThumbnails from '../TimelineThumbnails';
import TimelineConnections from '../../stateful/TimelineConnections';
import TimelineActorsList from '../TimelineActorsList';
import TimelineDocumentTooltip from '../TimelineDocumentTooltip';

const CONNECTIONS_END_POINT_WIDTH = 20;

const Timeline = (props) => !props.documentsLoading && !props.actorsLoading ? (
	<Wrapper>
		<NavigatorWrapper>
			{(!props.documentIsOpen || (props.documentIsOpen && !props.hasStory)) && (
				<div>
					<NavigatorGradient />
					<Navigator
						width="100%"
						from={props.earliestDocumentYear}
						to={props.latestDocumentYear}
						range={props.visibleRange}
						onRangeChange={props.setVisibleRange}
					/>
				</div>
			)}
		</NavigatorWrapper>

		<TimelineContent id="timeline-scroll-container" innerRef={props.setTimelineContentRef}>
			<TimelineContextWrapper>
				<TimelineContext
					from={props.earliestDocumentYear}
					to={props.latestDocumentYear}
					visibleRange={props.visibleRange}
				/>
			</TimelineContextWrapper>

			<ThumbnailsWrapper>
				<TimelineThumbnails documents={props.documents} visibleRange={props.visibleRange} />
			</ThumbnailsWrapper>

			<ConnectionsWrapper innerRef={props.setRoutesWrapperRef}>
				<TimelineConnections
					isOpen={props.documentIsOpen}
					connections={props.connections}
					visibleRange={props.visibleRange}
					endPointWidth={CONNECTIONS_END_POINT_WIDTH}
					endPointsTotalAmount={props.actors.length}
					defaultColor="#BDBDBD"
					onConnectionClick={props.selectDocument}
					onConnectionMouseEnter={props.setHoveredDocument}
					onConnectionMouseLeave={props.setHoveredDocument}
					hoveredDocument={props.hoveredDocument}
					windowWidth={props.windowWidth}
					windowHeight={props.windowHeight}
					onChartMove={({ visibleRange }) => props.setVisibleRange(visibleRange)}
				/>
			</ConnectionsWrapper>

			{!props.documentIsOpen && (
				<ActorsWrapper>
					<TimelineActorsList actors={props.actorsForDisplay} />
				</ActorsWrapper>
			)}

			{props.hoveredDocument.id && (
				<TimelineDocumentTooltip
					{...props.documents.find(({ id }) => id === props.hoveredDocument.id)}
					x={props.hoveredDocument.xPosition}
					isVisible
					showStoryInformations={false}
				/>
			)}
		</TimelineContent>
	</Wrapper>
) : null;

Timeline.propTypes = {
	documents: PropTypes.array.isRequired,
	connections: TimelineConnections.propTypes.connections,
	actors: TimelineActorsList.propTypes.actors,
	actorsForDisplay: TimelineActorsList.propTypes.actors,
	selectDocument: PropTypes.func.isRequired,
	documentIsOpen: PropTypes.bool.isRequired,
	hoveredDocument: TimelineConnections.propTypes.hoveredDocument,
	setHoveredDocument: PropTypes.func.isRequired,
	hasStory: PropTypes.bool.isRequired,
	visibleRange: PropTypes.shape({
		a: PropTypes.number.isRequired,
		b: PropTypes.number.isRequired,
	}).isRequired,
	setVisibleRange: PropTypes.func.isRequired,
	setTimelineContentRef: PropTypes.func.isRequired,
	setRoutesWrapperRef: PropTypes.func.isRequired,
	earliestDocumentYear: PropTypes.number.isRequired,
	latestDocumentYear: PropTypes.number.isRequired,
	windowWidth: PropTypes.number.isRequired,
	windowHeight: PropTypes.number.isRequired,
	documentsLoading: PropTypes.bool.isRequired,
	actorsLoading: PropTypes.bool.isRequired,
};

export default Timeline;
