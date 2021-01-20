import React from 'react';
import PropTypes from 'prop-types';
import { WrapperComponent, Icon, TextContainer } from './styles';

const ToggleButton = ({ onClick, text, isActive, iconActive, iconInactive, className }) => (
	<WrapperComponent onClick={onClick} className={className}>
		<Icon type={isActive ? iconActive : iconInactive} />
		{text && <TextContainer>{text}</TextContainer>}
	</WrapperComponent>
);

ToggleButton.defaultProps = {
	onClick: () => {},
	isActive: true,
	className: '',
};

ToggleButton.propTypes = {
	onClick: PropTypes.func,
	text: PropTypes.string,
	isActive: PropTypes.bool,
	iconActive: PropTypes.string.isRequired,
	iconInactive: PropTypes.string.isRequired,
	className: PropTypes.string,
};

export default ToggleButton;
