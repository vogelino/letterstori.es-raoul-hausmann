import React from 'react';
import PropTypes from 'prop-types';
import Sticky from 'react-stickynode';
import {
	always,
	filter,
	pipe,
	propEq,
	prop,
	and,
	find,
	path,
	defaultTo,
	has,
	ifElse,
	identity,
} from 'ramda';
import { compose, onlyUpdateForKeys } from 'recompose';
import ImageLoader from '../../utilitary/ImageLoader';
import DocumentScans from '../DocumentScans';
import DocumentContentsHeader from '../DocumentContentsHeader';
import { Wrapper, Content } from './styles';
import Transcription from '../DocumentTranscription';

const LazyDocumentScans = (props) => (
	<ImageLoader {...props} src={props.largeUrl} component={DocumentScans} />
);

LazyDocumentScans.propTypes = {
	largeUrl: DocumentScans.propTypes.largeUrl,
};

const shapeHasIndex = (index) =>
	pipe(prop('shapes'), find(propEq('pageIndex', index)));

const hasShapeWithIndex = (index) => and(has('shapes'), shapeHasIndex(index));

const DocumentContents = ({
	files,
	transcription,
	showTranscript,
	story,
	showAnnotations,
	hoverAnnotation,
	hoveredAnnotationId,
	documentInformationsSidebarIsOpen,
}) => {
	const storyElements = defaultTo([], path(['elements'], story));
	const onlyAnnotations = filter(propEq('type', 'annotation'), storyElements);
	return (
		<Wrapper
			documentInformationsSidebarIsOpen={documentInformationsSidebarIsOpen}
		>
			<Sticky top={48} innerZ={2}>
				<DocumentContentsHeader />
			</Sticky>
			<Content>
				{ifElse(
					identity,
					always(
						<Transcription
							storyColor={story && story.color}
							transcription={transcription}
							annotations={onlyAnnotations}
							hoverAnnotation={hoverAnnotation}
							hoveredAnnotationId={hoveredAnnotationId}
							showAnnotations={showAnnotations}
						/>,
					),
					always(
						files.map((file, index) => (
							<LazyDocumentScans
								pageIndex={index}
								annotations={filter(hasShapeWithIndex(index), onlyAnnotations)}
								key={file}
								smallUrl={`${process.env.NEXT_PUBLIC_IMAGES_SERVER_URL}/s/${file}`}
								largeUrl={`${process.env.NEXT_PUBLIC_IMAGES_SERVER_URL}/l/${file}`}
								hoverAnnotation={hoverAnnotation}
								hoveredAnnotationId={hoveredAnnotationId}
								storyColor={story && story.color}
								showAnnotations={showAnnotations}
							/>
						)),
					),
				)(showTranscript && transcription)}
			</Content>
		</Wrapper>
	);
};

DocumentContents.defaultProps = {
	showAnnotations: false,
	filesSmall: [],
	filesLarge: [],
	transcription: '',
};

DocumentContents.propTypes = {
	files: PropTypes.arrayOf(PropTypes.string),
	transcription: PropTypes.string,
	showTranscript: PropTypes.bool.isRequired,
	showAnnotations: PropTypes.bool.isRequired,
	story: PropTypes.shape({
		color: PropTypes.string.isRequired,
		elements: PropTypes.arrayOf(
			PropTypes.shape({
				shapes: PropTypes.arrayOf(
					PropTypes.shape({
						pageIndex: PropTypes.number,
						points: PropTypes.string,
					}),
				),
			}),
		),
	}),
	hoveredAnnotationId: PropTypes.string,
	hoverAnnotation: PropTypes.func.isRequired,
	documentInformationsSidebarIsOpen: PropTypes.bool.isRequired,
};

export default compose(
	onlyUpdateForKeys([
		'hoveredAnnotationId',
		'showAnnotations',
		'showTranscript',
		'documentInformationsSidebarIsOpen',
	]),
)(DocumentContents);
