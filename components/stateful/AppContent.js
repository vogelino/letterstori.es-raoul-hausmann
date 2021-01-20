import { compose } from 'react-apollo';
import AppContent from '../presentational/AppContent';
import {
	withDocumentSelecter,
	withStorySelecter,
	withSelectedDocumentId,
	withDocument,
	withSelectedStoryId,
	withAppLoading,
} from '../../lib/queryUtil';

export default compose(
	withAppLoading(),
	withSelectedStoryId(),
	withSelectedDocumentId(),
	withDocument(({ documentLoading, ...props }) => ({
		...props,
		isLoading: documentLoading,
	})),
	withDocumentSelecter(),
	withStorySelecter(),
)(AppContent);
