import React, { useState } from 'react';
import { useAppState } from '../../lib/AppStateContext';
import TimelineThumbnailSetComponent from '../presentational/TimelineThumbnailSet';

const TimelineThumbnailSet = () => {
	const [hoveredDocumentId, setHoveredDocumentId] = useState(null);
	const { documents, selectedStoryId } = useAppState();

	return (
		<TimelineThumbnailSetComponent
			documents={documents}
			selectedStoryId={selectedStoryId}
			hoveredDocumentId={hoveredDocumentId}
			onDocumentHover={setHoveredDocumentId}
		/>
	);
};

export default TimelineThumbnailSet;
