import { compose } from 'recompose';
import {
	withDocumentInformationsSidebarState,
	withAnnotationsVisibility,
	withPreviewMode,
} from '../../lib/queryUtil';
import DocumentContents from '../presentational/DocumentContents';

export default compose(
	withDocumentInformationsSidebarState(),
	withAnnotationsVisibility(),
	withPreviewMode(({ previewMode }) => ({
		showTranscript: previewMode === 'TRANSCRIPTION',
	})),
)(DocumentContents);
