import React from 'react';
import PropTypes from 'prop-types';
import { Frame, LeftHandle, RightHandle } from './styles';

const stopPropagationAnd = (func) => (e) => {
	e.preventDefault();
	e.stopPropagation();
	func(e);
};

const TimelineAxisRangeSelect = ({ a, b, onFrameDragStart, onFrameDragStop }) => (
	<Frame
		a={a}
		b={b}
		onMouseDown={(e) => onFrameDragStart(e, 'main')}
		onMouseUp={(e) => onFrameDragStop(e)}
		style={{ width: `${b - a}%`, left: `${a}%` }}
	>
		<LeftHandle
			onMouseDown={stopPropagationAnd((e) => onFrameDragStart(e, 'left'))}
			onMouseUp={stopPropagationAnd((e) => onFrameDragStop(e))}
		/>
		<RightHandle
			onMouseDown={stopPropagationAnd((e) => onFrameDragStart(e, 'right'))}
			onMouseUp={stopPropagationAnd((e) => onFrameDragStop(e))}
		/>
	</Frame>
);

/* eslint-disable react/no-unused-prop-types */
TimelineAxisRangeSelect.propTypes = {
	a: PropTypes.number.isRequired,
	b: PropTypes.number.isRequired,
	onFrameDragStart: PropTypes.func.isRequired,
	onFrameDragStop: PropTypes.func.isRequired,
};
/* eslint-enable react/no-unused-prop-types */

TimelineAxisRangeSelect.defaultProps = {
	a: 0,
	b: 50,
};

export default TimelineAxisRangeSelect;
