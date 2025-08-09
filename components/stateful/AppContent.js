import React from 'react';
import { useAppState } from '../../lib/AppStateContext';
import AppContentComponent from '../presentational/AppContent';

const AppContent = () => {
	const { appUi, selectedStoryId, selectedDocumentId } = useAppState();

	return (
		<AppContentComponent
			isLoading={appUi.isLoading}
			selectedStoryId={selectedStoryId}
			selectedDocumentId={selectedDocumentId}
		/>
	);
};

export default AppContent;
