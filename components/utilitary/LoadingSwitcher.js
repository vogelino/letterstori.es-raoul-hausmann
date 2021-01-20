import React from 'react';
import PropTypes from 'prop-types';

const LoadingSwitcher = ({
	isLoading,
	loadingComponent: Loading,
	nonLoadingComponent: Loaded,
	...otherProps
}) => (isLoading ? <Loading {...otherProps} /> : <Loaded {...otherProps} />);

LoadingSwitcher.propTypes = {
	isLoading: PropTypes.bool.isRequired,
	loadingComponent: PropTypes.func.isRequired,
	nonLoadingComponent: PropTypes.func.isRequired,
};

export default LoadingSwitcher;
