import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React, { memo } from 'react';
import DocumentCorrespondents from '../DocumentCorrespondents';
import DocumentInformations from '../DocumentInformations';
import DocumentQuote from '../DocumentQuote';
import DocumentScans from '../DocumentScans';
import DocumentTranscription from '../DocumentTranscription';

const DocumentContentsWrapper = styled.div`
	padding: 2rem;
	width: 100%;
	height: 100%;
	overflow-y: auto;
	overflow-x: hidden;
`;

const DocumentContents = ({
	document,
	selectedStoryId,
	selectedDocumentId,
	hoveredAnnotationId,
	onAnnotationHover,
	onAnnotationClick,
	onScanClick,
}) => (
	<DocumentContentsWrapper>
		<DocumentCorrespondents document={document} />
		<DocumentQuote document={document} />
		<DocumentInformations document={document} />
		<DocumentTranscription
			document={document}
			selectedStoryId={selectedStoryId}
			selectedDocumentId={selectedDocumentId}
			hoveredAnnotationId={hoveredAnnotationId}
			onAnnotationHover={onAnnotationHover}
			onAnnotationClick={onAnnotationClick}
		/>
		<DocumentScans document={document} onScanClick={onScanClick} />
	</DocumentContentsWrapper>
);

DocumentContents.propTypes = {
	document: PropTypes.shape({
		id: PropTypes.string,
		title: PropTypes.string,
		date: PropTypes.string,
		type: PropTypes.string,
		language: PropTypes.string,
		scans: PropTypes.arrayOf(PropTypes.string),
		transcription: PropTypes.string,
		quote: PropTypes.string,
		sender: PropTypes.shape({
			id: PropTypes.string,
			name: PropTypes.string,
			image: PropTypes.string,
		}),
		recipient: PropTypes.shape({
			id: PropTypes.string,
			name: PropTypes.string,
			image: PropTypes.string,
		}),
	}).isRequired,
	selectedStoryId: PropTypes.string,
	selectedDocumentId: PropTypes.string,
	hoveredAnnotationId: PropTypes.string,
	onAnnotationHover: PropTypes.func,
	onAnnotationClick: PropTypes.func,
	onScanClick: PropTypes.func,
};

DocumentContents.defaultProps = {
	selectedStoryId: null,
	selectedDocumentId: null,
	hoveredAnnotationId: null,
	onAnnotationHover: () => {},
	onAnnotationClick: () => {},
	onScanClick: () => {},
};

export default memo(DocumentContents);
