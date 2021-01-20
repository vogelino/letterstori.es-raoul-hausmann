import React from 'react';
import PropTypes from 'prop-types';
import { prop, pipe, not } from 'ramda';
import { branch, renderNothing } from 'recompose';
import Icon from '../Icon';
import { WrapperComponent, CloseButton, Switch, AnnotationToggler, SidebarToggler } from './styles';

const shouldNotShowSwitch = pipe(prop('transcription'), not);
const hideIfNoTranscription = branch(shouldNotShowSwitch, renderNothing);
const SwitchIfTranscription = hideIfNoTranscription(Switch);

const DocumentDrawerHeader = ({
	story,
	deselectDocument,
	deselectStory,
	transcription,
	showTranscript,
	togglePreviewMode,
	showAnnotations,
	toggleAnnotationMode,
	documentInformationsSidebarIsOpen,
	toggleDocumentInformationsSidebar,
}) => (
	<WrapperComponent>
		<CloseButton onClick={() => deselectDocument() && deselectStory()}>
			<Icon type="close" />
		</CloseButton>
		<SwitchIfTranscription
			transcription={transcription}
			showTranscript={transcription && showTranscript}
			options={['Original', 'Transkript']}
			isLeft={!showTranscript}
			onClick={togglePreviewMode}
		/>
		{Boolean(story) && (
			<AnnotationToggler
				iconActive="eye-opened"
				iconInactive="eye-closed"
				text="Markierungen"
				isActive={showAnnotations}
				onClick={toggleAnnotationMode}
			/>
		)}
		<SidebarToggler
			iconActive="sidebar-opened"
			iconInactive="sidebar-closed"
			text="Details"
			isActive={documentInformationsSidebarIsOpen}
			onClick={toggleDocumentInformationsSidebar}
		/>
	</WrapperComponent>
);

DocumentDrawerHeader.propTypes = {
	deselectDocument: PropTypes.func.isRequired,
	deselectStory: PropTypes.func.isRequired,
	story: PropTypes.shape({
		nextDocumentInStory: PropTypes.string.isRequired,
		prevDocumentInStory: PropTypes.string.isRequired,
	}),
	transcription: PropTypes.string,
	showTranscript: PropTypes.bool.isRequired,
	togglePreviewMode: PropTypes.func.isRequired,
	showAnnotations: PropTypes.bool.isRequired,
	documentInformationsSidebarIsOpen: PropTypes.bool.isRequired,
	toggleAnnotationMode: PropTypes.func.isRequired,
	toggleDocumentInformationsSidebar: PropTypes.func.isRequired,
};

export default DocumentDrawerHeader;
