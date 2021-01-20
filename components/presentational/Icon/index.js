import React from 'react';
import PropTypes from 'prop-types';
import { SvgContainer } from './styles';
import '../../../icons/icons-sprite.svg';

const Icon = ({ type, className }) => (
	<SvgContainer className={className}>
		<use xlinkHref={`#icons-sprite_${type}`} />
	</SvgContainer>
);

Icon.defaultProps = {
	className: '',
};

Icon.propTypes = {
	type: PropTypes.string.isRequired,
	className: PropTypes.string,
};

export default Icon;
