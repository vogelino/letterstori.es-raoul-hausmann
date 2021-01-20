import { compose } from 'react-apollo';
import DocumentDrawerHeader from '../presentational/DocumentDrawerHeader';
import {
	withDocumentUnselecter,
	withDocumentSelecter,
	withStoryUnselecter,
	withAnnotationsVisibility,
	withAnnotationsVisibilityToggler,
	withPreviewModeToggler,
	withPreviewMode,
	withDocumentInformationsSidebarToggler,
	withDocumentInformationsSidebarState,
} from '../../lib/queryUtil';

export default compose(
	withDocumentInformationsSidebarToggler(),
	withDocumentInformationsSidebarState(),
	withAnnotationsVisibility(),
	withAnnotationsVisibilityToggler(({ toggleAnnotationsVisibility }) => ({
		toggleAnnotationMode: () => toggleAnnotationsVisibility(),
	})),
	withPreviewMode(({ previewMode }) => ({
		showTranscript: previewMode === 'TRANSCRIPTION',
	})),
	withPreviewModeToggler(),
	withDocumentUnselecter(),
	withDocumentSelecter(),
	withStoryUnselecter(),
)(DocumentDrawerHeader);
