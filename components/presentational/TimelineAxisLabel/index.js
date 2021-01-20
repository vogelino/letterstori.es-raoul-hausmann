import React from 'react';
import PropTypes from 'prop-types';

const TimelineAxisLabel = ({ x, value, labelSize, labelMarginTop }) => (
	<text
		x={`${x}%`}
		y={labelMarginTop}
		fontSize={labelSize}
		dominantBaseline="hanging"
		textAnchor="middle"
	>
		{value}
	</text>
);

TimelineAxisLabel.propTypes = {
	x: PropTypes.number.isRequired,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
	labelSize: PropTypes.number.isRequired,
	labelMarginTop: PropTypes.number.isRequired,
};

export default TimelineAxisLabel;
