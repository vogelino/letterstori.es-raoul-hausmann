import React from 'react';
import PropTypes from 'prop-types';
import { withState } from 'recompose';
import { Wrapper, Tip } from './styles';

export const TooltipNaked = ({ setOpenState, text, isOpen, children }) => (
	<Wrapper>
		<Tip isOpen={isOpen}>{text}</Tip>
		<span onMouseEnter={() => setOpenState(true)} onMouseOut={() => setOpenState(false)}>
			{children}
		</span>
	</Wrapper>
);

TooltipNaked.defaultProps = {
	isOpen: false,
};

TooltipNaked.propTypes = {
	text: PropTypes.string.isRequired,
	isOpen: PropTypes.bool,
	children: PropTypes.any.isRequired,
	setOpenState: PropTypes.func.isRequired,
};

export default withState('isOpen', 'setOpenState', false)(TooltipNaked);
