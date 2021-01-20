import React from 'react';
import PropTypes from 'prop-types';
import { WrapperComponent } from './styles';

const LoadingSkeleton = ({ width, height, className }) => (
	<WrapperComponent className={className} width={width} height={height} />
);

LoadingSkeleton.defaultProps = {
	width: '43rem',
	height: '1rem',
	className: '',
};

LoadingSkeleton.propTypes = {
	width: PropTypes.string,
	height: PropTypes.string,
	className: PropTypes.string,
};

export default LoadingSkeleton;
