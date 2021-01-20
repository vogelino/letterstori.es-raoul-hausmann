import { compose } from 'recompose';
import {
	withDocumentInformationsSidebarState,
	withStoryInformationsVisibility,
	withStoryInformationsVisibilityToggler,
} from '../../lib/queryUtil';
import StoryNotes from '../presentational/DocumentInformationsSidebar';

export default compose(
	withStoryInformationsVisibility(),
	withStoryInformationsVisibilityToggler(),
	withDocumentInformationsSidebarState((props) => ({
		...props,
		isOpen: props.documentInformationsSidebarIsOpen,
	})),
)(StoryNotes);
