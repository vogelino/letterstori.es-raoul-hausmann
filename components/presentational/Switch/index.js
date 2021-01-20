import React from 'react';
import PropTypes from 'prop-types';
import { WrapperComponent, OptionLeft, OptionRight, BubbleWrapper, Bubble } from './styles';

const Switch = ({ isLeft, options, onClick, className }) => (
	<WrapperComponent className={className}>
		<OptionLeft isLeft={isLeft}>{options[0]}</OptionLeft>

		<BubbleWrapper onClick={onClick}>
			<Bubble isLeft={isLeft} />
		</BubbleWrapper>

		<OptionRight isLeft={isLeft}>{options[1]}</OptionRight>
	</WrapperComponent>
);

Switch.defaultProps = {
	isLeft: true,
	options: ['Original', 'Transcript'],
	onClick: () => {},
	className: '',
};

Switch.propTypes = {
	isLeft: PropTypes.bool,
	options: PropTypes.array,
	onClick: PropTypes.func,
	className: PropTypes.string,
};

export default Switch;
