import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React, { memo } from 'react';

const DocumentTranscriptionWrapper = styled.div`
	padding: 2rem;
	width: 100%;
	height: 100%;
	overflow-y: auto;
	overflow-x: hidden;
`;

const DocumentTranscription = ({
	document,
	selectedStoryId,
	selectedDocumentId,
	hoveredAnnotationId,
	onAnnotationHover,
	onAnnotationClick,
}) => (
	<DocumentTranscriptionWrapper>
		<div dangerouslySetInnerHTML={{ __html: document.transcription }} />
	</DocumentTranscriptionWrapper>
);

DocumentTranscription.propTypes = {
	document: PropTypes.shape({
		transcription: PropTypes.string,
	}).isRequired,
	selectedStoryId: PropTypes.string,
	selectedDocumentId: PropTypes.string,
	hoveredAnnotationId: PropTypes.string,
	onAnnotationHover: PropTypes.func,
	onAnnotationClick: PropTypes.func,
};

DocumentTranscription.defaultProps = {
	selectedStoryId: null,
	selectedDocumentId: null,
	hoveredAnnotationId: null,
	onAnnotationHover: () => {},
	onAnnotationClick: () => {},
};

export default memo(DocumentTranscription);
