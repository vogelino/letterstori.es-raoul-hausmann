import React from 'react';
import PropTypes from 'prop-types';
import { map, addIndex, equals, modulo } from 'ramda';
import TimelineAxisTick from '../TimelineAxisTick';

const indexedMap = addIndex(map);

const getTickSize = (idx, tickSize, longTickSize, longTickInterval) => {
	if (!longTickInterval) return tickSize;

	const isLongTick = equals(modulo(idx, longTickInterval), 0);
	return isLongTick ? longTickSize : tickSize;
};

const TimelineAxisTickGroup = ({ positions, tickSize, longTickSize, longTickInterval }) =>
	indexedMap((x, idx) => (
		<TimelineAxisTick
			key={x}
			x={x}
			tickSize={getTickSize(idx, tickSize, longTickSize, longTickInterval)}
		/>
	), positions);

TimelineAxisTickGroup.propTypes = {
	positions: PropTypes.array.isRequired,
	tickSize: PropTypes.number.isRequired,
	longTickSize: PropTypes.number.isRequired,
	longTickInterval: PropTypes.number,
};

export default TimelineAxisTickGroup;
