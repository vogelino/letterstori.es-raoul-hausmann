import React from 'react';
import PropTypes from 'prop-types';
import { map, zip } from 'ramda';
import TimelineAxisLabel from '../TimelineAxisLabel';

const TimelineAxisLabelGroup = (props) =>
	map(
		([x, value]) => (
			<TimelineAxisLabel
				key={`label-${Math.round(x)}-${value}`}
				x={x}
				value={value}
				{...props}
			/>
		),
		zip(props.positions, props.values),
	);

TimelineAxisLabelGroup.propTypes = {
	positions: PropTypes.arrayOf(PropTypes.number).isRequired,
	values: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])).isRequired,
	labelSize: PropTypes.number.isRequired,
	labelMarginTop: PropTypes.number.isRequired,
};

export default TimelineAxisLabelGroup;
