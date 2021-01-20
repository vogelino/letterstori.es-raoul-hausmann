import React from 'react';
import PropTypes from 'prop-types';

const TimelineAxisTick = ({ x, tickSize }) => (
	<line x1={`${x}%`} y1={0} x2={`${x}%`} y2={tickSize} vectorEffect="non-scaling-stroke" />
);

TimelineAxisTick.propTypes = {
	x: PropTypes.number.isRequired,
	tickSize: PropTypes.number.isRequired,
};

export default TimelineAxisTick;
