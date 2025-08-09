import React from 'react';
import { useAppState } from '../../lib/AppStateContext';
import DocumentDrawerHeaderComponent from '../presentational/DocumentDrawerHeader';

const DocumentDrawerHeader = () => {
	const { documentInformationsSidebar } = useAppState();
	return (
		<DocumentDrawerHeaderComponent
			isOpen={documentInformationsSidebar.isOpen}
		/>
	);
};

export default DocumentDrawerHeader;
