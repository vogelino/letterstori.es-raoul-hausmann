import React from 'react';
import PropTypes from 'prop-types';
import {
	multiply,
	subtract,
	divide,
	times,
	identity,
	map,
	add,
	repeat,
	flatten,
	pipe,
	max,
	filter,
	addIndex,
	modulo,
	equals,
} from 'ramda';
import {
	ContextContainer,
	ContextInnerWrapper,
	AxisYears,
	AxisMonthsLabels,
	AxisMonthsTicks,
} from './styles';

const MONTH_LABELS = ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'];
const MONTH_LABEL_WIDTH = 40;

const indexedFilter = addIndex(filter);

const roundToNextEven = (x) => Math.round(x / 2) * 2;

const getZoom = ({ a, b }) => (a - b) / 100;

const getMonthBasedScale = ({ from, to }) => ({
	from: 0,
	to: (12 * (to - from)),
});

const getYearLabels = ({ from, to }) => {
	const labelsWithoutPadding = times(identity, (to - from));
	return map(add(from), labelsWithoutPadding);
};

const getMonthLabels = ({ from, to, interval }) => pipe(
	subtract(to),
	repeat(MONTH_LABELS),
	flatten,
	indexedFilter((label, idx) => equals(modulo(idx, interval), 0)),
)(from);

const getMonthInterval = (fittingLabelsPerWindow, zoom, numberOfLabels) => {
	const fittingPerWhole = multiply(fittingLabelsPerWindow, zoom);
	return pipe(
		divide(numberOfLabels),
		roundToNextEven,
		max(1),
	)(fittingPerWhole);
};

const TimelineContext = ({
	from,
	to,
	visibleRange,
}) => {
	const monthBasedScale = getMonthBasedScale({ from, to });

	const fittingMonthLabelsPerWindow = divide(window.innerWidth, MONTH_LABEL_WIDTH);
	const monthInterval = getMonthInterval(
		fittingMonthLabelsPerWindow,
		getZoom(visibleRange),
		subtract(monthBasedScale.to, monthBasedScale.from),
	);

	const yearLabels = getYearLabels({ from, to });
	const monthLabels = getMonthLabels({ from, to, interval: monthInterval });

	return (
		<ContextContainer>
			<ContextInnerWrapper
				style={{
					width: `${(100 / (visibleRange.b - visibleRange.a)) * 100}%`,
					left: `-${(100 / (visibleRange.b - visibleRange.a)) * visibleRange.a}%`,
				}}
			>
				<AxisYears
					from={monthBasedScale.from}
					to={monthBasedScale.to}
					labels={yearLabels}
					labelSize={16}
					tickInterval={12}
					renderTicks={false}
				/>
				{(monthInterval <= 6) && (
					<AxisMonthsLabels
						from={monthBasedScale.from}
						to={monthBasedScale.to}
						labels={monthLabels}
						tickInterval={monthInterval}
						renderTicks={false}
					/>
				)}
				<AxisMonthsTicks
					from={monthBasedScale.from}
					to={monthBasedScale.to}
					tickInterval={Math.min(6, monthInterval)}
					longTickInterval={12}
					renderLabels={false}
				/>
			</ContextInnerWrapper>
		</ContextContainer>
	);
};

TimelineContext.propTypes = {
	from: PropTypes.number.isRequired,
	to: PropTypes.number.isRequired,
	visibleRange: PropTypes.shape({
		a: PropTypes.number.isRequired,
		b: PropTypes.number.isRequired,
	}).isRequired,
};

export default TimelineContext;
