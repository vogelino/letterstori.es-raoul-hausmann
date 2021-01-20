import React from 'react';
import PropTypes from 'prop-types';
import {
	CanvasTimelineWrapper,
	CanvasTimeline,
	HitGraphCanvas,
} from './styles';

const setOverflow = (overflow) => () =>
	document.documentElement.style.setProperty('overflow', overflow);

const TimelineConnections = ({
	assignHitGraphNode,
	assignCanvasNode,
	onMouseMove,
	width,
	height,
	onClick,
	onMouseLeave,
}) => {
	const commonProps = {
		width: width * window.devicePixelRatio,
		height: height * window.devicePixelRatio,
		style: { transform: `scale(${1 / window.devicePixelRatio})` },
	};
	const canvasProps = { onMouseMove, onClick };
	return (
		<CanvasTimelineWrapper
			onMouseEnter={setOverflow('hidden')}
			onMouseLeave={() => {
				onMouseLeave();
				setOverflow('auto')();
			}}
		>
			<CanvasTimeline
				{...commonProps}
				{...canvasProps}
				ref={assignCanvasNode}
			/>
			<HitGraphCanvas {...commonProps} ref={assignHitGraphNode} />
		</CanvasTimelineWrapper>
	);
};

TimelineConnections.defaultProps = {
	onMouseLeave: () => {},
};

TimelineConnections.propTypes = {
	width: PropTypes.number.isRequired,
	height: PropTypes.number.isRequired,
	assignHitGraphNode: PropTypes.func.isRequired,
	assignCanvasNode: PropTypes.func.isRequired,
	onMouseMove: PropTypes.func.isRequired,
	onMouseLeave: PropTypes.func,
	onClick: PropTypes.func.isRequired,
};

export default TimelineConnections;
