import React from 'react';
import { useAppState } from '../../lib/AppStateContext';
import DocumentDrawerSplitViewComponent from '../presentational/DocumentDrawerSplitView';

const DocumentDrawerSplitView = () => {
	const { documentInformationsSidebar } = useAppState();

	return (
		<DocumentDrawerSplitViewComponent
			isOpen={documentInformationsSidebar.isOpen}
		/>
	);
};

export default DocumentDrawerSplitView;
