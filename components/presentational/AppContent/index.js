import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, DocumentDrawerContainer, TimelineContainer } from './styles';
import DocumentDrawer from '../DocumentDrawer';
import AppLoadingIndicator from '../AppLoadingIndicator';
import Timeline from '../../stateful/Timeline';

const AppContent = ({
	appIsLoading,
	selectDocument,
	selectedDocumentId,
	selectStory,
	selectedStoryId,
	...props
}) => (
	<Wrapper hasStory={Boolean(props.story)} documentIsOpen={selectedDocumentId}>
		<AppLoadingIndicator loading={appIsLoading} />
		<TimelineContainer
			documentIsOpen={Boolean(selectedDocumentId)}
			hasStory={Boolean(props.story)}
		>
			<Timeline
				{...props}
				documentIsOpen={Boolean(selectedDocumentId)}
				hasStory={Boolean(props.story)}
				selectDocument={selectDocument}
				selectedStoryId={selectedStoryId}
				selectStory={selectStory}
			/>
		</TimelineContainer>
		<DocumentDrawerContainer documentIsOpen={Boolean(selectedDocumentId)}>
			<DocumentDrawer {...props} />
		</DocumentDrawerContainer>
	</Wrapper>
);

AppContent.propTypes = {
	selectedDocumentId: PropTypes.string,
	selectDocument: PropTypes.func.isRequired,
	selectedStoryId: PropTypes.string,
	selectStory: PropTypes.func.isRequired,
	appIsLoading: PropTypes.bool.isRequired,
	story: PropTypes.shape({}),
};

export default AppContent;
