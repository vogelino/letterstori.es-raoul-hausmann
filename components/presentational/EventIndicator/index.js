import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Point, Content, Text, Line } from './styles';

const EventIndicator = ({ isPersonal, children, width }) => (
	<Wrapper width={width} isPersonal={isPersonal}>
		<Point className="point">
			<Line />
			<Line />
		</Point>

		<Line className="start" />
		<Content className="content">
			<Text>{children}</Text>
			<Line className="end" />
		</Content>
	</Wrapper>
);

EventIndicator.defaultProps = {
	isPersonal: false,
	width: 'auto',
};

EventIndicator.propTypes = {
	isPersonal: PropTypes.bool,
	children: PropTypes.string.isRequired,
	width: PropTypes.string,
};

export default EventIndicator;
