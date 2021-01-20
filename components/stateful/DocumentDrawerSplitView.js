import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import DocumentDrawerSplitView from '../presentational/DocumentDrawerSplitView';
import LoadingSwitcher from '../utilitary/LoadingSwitcher';
import DocumentStoryInformationsSkeleton from '../presentational/DocumentStoryInformationsSkeleton';
import { withHoveredAnnotationIdSetter, withHoveredAnnotationId } from '../../lib/queryUtil';

const DocumentDrawerSplitViewWithLoading = ({ isLoading, ...otherProps }) => (
	<LoadingSwitcher
		isLoading={isLoading || !otherProps.title}
		nonLoadingComponent={DocumentDrawerSplitView}
		loadingComponent={DocumentStoryInformationsSkeleton}
		{...otherProps}
	/>
);

DocumentDrawerSplitViewWithLoading.defaultProps = {
	isLoading: true,
};

DocumentDrawerSplitViewWithLoading.propTypes = {
	isLoading: PropTypes.bool,
};

export default compose(
	withHoveredAnnotationIdSetter(),
	withHoveredAnnotationId(),
)(DocumentDrawerSplitViewWithLoading);
