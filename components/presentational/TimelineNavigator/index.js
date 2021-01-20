import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { divide, multiply, subtract, add, equals } from 'ramda';
import { Wrapper, AxisYears, AxisDecades, RangeSelect } from './styles';

const MIMIMUM_SPACE_BETWEEN_AB = 40;

const getAWithConstraints = (a, b, rangeWidth, isMain) => {
	if (a < 0) return 0;
	const windowWidthMinusRange = subtract(window.innerWidth, rangeWidth);
	if (isMain && a > windowWidthMinusRange) return windowWidthMinusRange;
	const bMinusMinimum = subtract(b, MIMIMUM_SPACE_BETWEEN_AB);
	if (a > bMinusMinimum) return bMinusMinimum;
	return a;
};

const getBWithConstraints = (a, b, rangeWidth, isMain) => {
	if (b > window.innerWidth) return window.innerWidth;
	if (isMain && b < rangeWidth) return rangeWidth;
	const aPlusMinimum = add(a, MIMIMUM_SPACE_BETWEEN_AB);
	if (b < aPlusMinimum) return aPlusMinimum;
	return b;
};

class Navigator extends Component {
	constructor(props) {
		super(props);

		this.state = {
			mouseX: 0,
			updatedRange: false,
		};

		this.onMouseMove = this.onMouseMove.bind(this);
		this.stopDragging = this.stopDragging.bind(this);
	}

	componentDidMount() {
		document.addEventListener('mousemove', this.onMouseMove);
		document.addEventListener('mouseup', this.stopDragging);
		document.addEventListener('mouseleave', this.stopDragging);
	}

	componentWillUnmount() {
		document.removeEventListener('mousemove', this.onMouseMove);
		document.removeEventListener('mouseup', this.stopDragging);
		document.removeEventListener('mouseleave', this.stopDragging);
	}

	onMouseMove(event) {
		const { updatedRange, mouseX } = this.state;

		if (!updatedRange) return;

		const range =
			this.props.range < MIMIMUM_SPACE_BETWEEN_AB
				? MIMIMUM_SPACE_BETWEEN_AB
				: this.props.range;
		const rangeWidthInPercent = subtract(range.b, range.a);
		const rangeWidth = divide(multiply(window.innerWidth, rangeWidthInPercent), 100);
		const isMain = equals(updatedRange, 'main');
		const isLeft = equals(updatedRange, 'left');

		if (isMain) {
			const newA = subtract(event.clientX, mouseX);
			const newB = add(newA, rangeWidth);
			const newAWithContraints = getAWithConstraints(newA, newB, rangeWidth, true);
			const newBWithContraints = getBWithConstraints(
				newAWithContraints,
				newB,
				rangeWidth,
				true,
			);

			this.props.onRangeChange({
				a: multiply(divide(newAWithContraints, window.innerWidth), 100),
				b: multiply(divide(newBWithContraints, window.innerWidth), 100),
			});
		}
		else if (isLeft) {
			const newA = subtract(event.clientX, mouseX);
			const bInPixels = multiply(divide(window.innerWidth, 100), range.b);
			const newAWithContraints = getAWithConstraints(newA, bInPixels, rangeWidth);

			this.props.onRangeChange({
				a: multiply(divide(newAWithContraints, window.innerWidth), 100),
				b: range.b,
			});
		}
		else {
			const newB = subtract(event.clientX, mouseX);
			const aInPixels = multiply(divide(window.innerWidth, 100), range.a);
			const newBWithContraints = getBWithConstraints(aInPixels, newB, rangeWidth);

			this.props.onRangeChange({
				a: range.a,
				b: multiply(divide(newBWithContraints, window.innerWidth), 100),
			});
		}
	}

	onRangeSelectFrameDragStart(event, updatedRange) {
		this.setState({
			updatedRange,
			mouseX: subtract(event.clientX, event.target.getBoundingClientRect().left || 0),
		});
	}

	onRangeSelectFrameDragStop() {
		this.stopDragging();
	}

	stopDragging() {
		this.setState({
			updatedRange: false,
			rangeSelectMouseXDelta: 0,
		});
	}

	render() {
		const parsedProps = {
			from: parseInt(this.props.from, 10),
			to: parseInt(this.props.to, 10),
		};

		return (
			<Wrapper rangeA={this.props.range.a} rangeB={this.props.range.b}>
				<AxisYears {...parsedProps} tickSize={3} tickInterval={1} renderLabels={false} />
				<AxisDecades {...parsedProps} tickSize={6} tickInterval={10} />
				<RangeSelect
					a={this.props.range.a}
					b={this.props.range.b}
					onFrameDragStart={(e, handle) => this.onRangeSelectFrameDragStart(e, handle)}
					onFrameDragStop={(e) => this.onRangeSelectFrameDragStop(e)}
				/>
			</Wrapper>
		);
	}
}

Navigator.propTypes = {
	from: PropTypes.number.isRequired,
	to: PropTypes.number.isRequired,
	range: PropTypes.shape({
		a: PropTypes.number.isRequired,
		b: PropTypes.number.isRequired,
	}).isRequired,
	onRangeChange: PropTypes.func.isRequired,
};

export default Navigator;
