import React from 'react';
import { useAppState } from '../../lib/AppStateContext';
import DocumentInformationsSidebarComponent from '../presentational/DocumentInformationsSidebar';

const DocumentInformationsSidebar = () => {
	const { documentInformationsSidebar } = useAppState();

	return (
		<DocumentInformationsSidebarComponent
			isOpen={documentInformationsSidebar.isOpen}
		/>
	);
};

export default DocumentInformationsSidebar;
