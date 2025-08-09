import React from 'react';
import { useAppState } from '../../lib/AppStateContext';
import { useDocument } from '../../lib/hooks/useDocuments';
import DocumentContentsComponent from '../presentational/DocumentContents';

const DocumentContents = () => {
	const { selectedStoryId, selectedDocumentId } = useAppState();
	const { document } = useDocument(selectedDocumentId);

	return (
		<DocumentContentsComponent
			document={document}
			selectedStoryId={selectedStoryId}
			selectedDocumentId={selectedDocumentId}
		/>
	);
};

export default DocumentContents;
