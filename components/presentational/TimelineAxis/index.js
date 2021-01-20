import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { map, unfold, add, multiply } from 'ramda';
import { scaleLinear } from 'd3-scale';
import TickGroup from '../TimelineAxisTickGroup';
import LabelGroup from '../TimelineAxisLabelGroup';

const getFontHeight = multiply(1.1);

const getIntervalValues = (from, to, interval) =>
	unfold((n) => (n > to ? false : [n, n + interval]), from);

const createScaleFn = (domainFrom, domainTo, rangeFrom, rangeTo) =>
	scaleLinear()
		.domain([domainFrom, domainTo])
		.range([rangeFrom, rangeTo]);

const getAxisHeight = ({
	renderTicks,
	tickSize,
	longTickSize,
	longTickInterval,
	renderLabels,
	labelSize,
	labelMarginTop,
}) => {
	const heightForTicks = longTickInterval ? longTickSize : tickSize;
	const heightForLabels = getFontHeight(labelSize) + labelMarginTop;

	return add(
		renderTicks ? heightForTicks : 0,
		renderLabels ? heightForLabels : 0
	);
};

const getLabelMarginTop = ({ labelMarginTop, renderTicks, tickSize }) =>
	renderTicks ? add(labelMarginTop, tickSize) : labelMarginTop;

class Axis extends PureComponent {
	render() {
		const divisions = getIntervalValues(
			this.props.from,
			this.props.to,
			this.props.tickInterval,
		);
		const scale = createScaleFn(this.props.from, this.props.to, 0, 100);
		const scaledDivisions = map(scale, divisions);
		const labelValues = this.props.labels || divisions;

		return (
			<svg className={this.props.className} width="100%" height={getAxisHeight(this.props)}>
				{this.props.renderTicks && (
					<TickGroup positions={scaledDivisions} {...this.props} />
				)}
				{this.props.renderLabels && (
					<LabelGroup
						positions={scaledDivisions}
						values={labelValues}
						labelSize={this.props.labelSize}
						labelMarginTop={getLabelMarginTop(this.props)}
					/>
				)}
			</svg>
		);
	}
}

Axis.propTypes = {
	className: PropTypes.string.isRequired,
	/* eslint-disable react/no-unused-prop-types */
	from: PropTypes.number.isRequired,
	to: PropTypes.number.isRequired,
	tickInterval: PropTypes.number.isRequired,
	longTickInterval: PropTypes.number,
	tickSize: PropTypes.number.isRequired,
	longTickSize: PropTypes.number.isRequired,
	labelSize: PropTypes.number.isRequired,
	labelMarginTop: PropTypes.number.isRequired,
	/* eslint-enable react/no-unused-prop-types */
	renderTicks: PropTypes.bool.isRequired,
	renderLabels: PropTypes.bool.isRequired,
	labels: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
};

Axis.defaultProps = {
	className: '',
	tickInterval: 10,
	renderTicks: true,
	renderLabels: true,
	tickSize: 5,
	longTickSize: 10,
	labelSize: 12,
	labelMarginTop: 4,
};

export default Axis;
