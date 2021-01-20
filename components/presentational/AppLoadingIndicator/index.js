import React from 'react';
import PropTypes from 'prop-types';
import { AppLoadingStatus, AppLoadingDimond } from './styles';

const AppLoadingIndicator = ({ loading }) => (
	<AppLoadingStatus loading={loading}>
		<AppLoadingDimond color="#6ABD37" />
		<AppLoadingDimond color="#ED008C" />
		<AppLoadingDimond color="#1DAEEC" />
	</AppLoadingStatus>
);

AppLoadingIndicator.defaultProps = {
	loading: true,
};

AppLoadingIndicator.propTypes = {
	loading: PropTypes.bool,
};

export default AppLoadingIndicator;
