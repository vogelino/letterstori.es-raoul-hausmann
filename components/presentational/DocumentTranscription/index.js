import React from 'react';
import PropTypes from 'prop-types';
import { withProps, compose, onlyUpdateForKeys } from 'recompose';
import { pipe, map, split, length, replace, reduce, filter, identity, gt } from 'ramda';
import { TranscriptionContainer, TranscriptionAnnotation, TranscriptionParagraph } from './styles';

const mapAnnotation = ({ annotationWrapper, nonAnnotationWrapper, showAnnotations }) => ({
	isAnnotation,
	id,
	content,
}) =>
	isAnnotation && showAnnotations
		? annotationWrapper({ isAnnotation, id, content })
		: nonAnnotationWrapper(content);

const mapParagraph = (config) => (paragraph) => (
	<TranscriptionParagraph key={JSON.stringify(paragraph)}>
		{map(mapAnnotation(config), paragraph)}
	</TranscriptionParagraph>
);

const mapParagraphs = (config) => map(mapParagraph(config));

const DocumentTranscription = ({
	hoveredAnnotationId,
	hoverAnnotation,
	showAnnotations,
	storyColor,
	paragraphs,
}) => (
	<TranscriptionContainer>
		{mapParagraphs({
			showAnnotations,
			/* eslint-disable react/prop-types */
			annotationWrapper: ({ id, content }) => (
				/* eslint-enable react/prop-types */
				<TranscriptionAnnotation
					key={content}
					storyColor={storyColor}
					isHovered={id === hoveredAnnotationId}
					onMouseEnter={() => hoverAnnotation(id)}
					onMouseLeave={() => hoverAnnotation(null)}
				>
					{content}
				</TranscriptionAnnotation>
			),
			nonAnnotationWrapper: (nonAnnotation) => (
				<span key={nonAnnotation}>{nonAnnotation}</span>
			),
		})(paragraphs)}
	</TranscriptionContainer>
);

DocumentTranscription.defaultProps = {
	transcription: '',
	annotations: [],
	hoverAnnotation: () => {},
	hoveredAnnotationId: '',
	showAnnotations: true,
	storyColor: '',
};

DocumentTranscription.propTypes = {
	/* eslint-disable react/no-unused-prop-types */
	transcription: PropTypes.string,
	annotations: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			content: PropTypes.string.isRequired,
		}),
	),
	/* eslint-enable react/no-unused-prop-types */
	paragraphs: PropTypes.arrayOf(
		PropTypes.arrayOf(
			PropTypes.shape({
				id: PropTypes.string,
				content: PropTypes.string.isRequired,
				isAnnotation: PropTypes.bool.isRequired,
			}),
		),
	).isRequired,
	hoveredAnnotationId: PropTypes.string,
	hoverAnnotation: PropTypes.func,
	showAnnotations: PropTypes.bool,
	storyColor: PropTypes.string,
};

export default compose(
	withProps(({ transcription, annotations }) => {
		const markupedText = reduce(
			(transcriptionAcc1, annotation) =>
				reduce(
					(transcriptionAcc2, text) =>
						replace(text, `****%%%%${annotation.id}————${text}****`, transcriptionAcc2),
					transcriptionAcc1,
					annotation.originalUnformattedTexts,
				),
			transcription,
			filter(({ type }) => type === 'annotation', annotations),
		);
		const paragraphs = pipe(
			split('\n\n'),
			map(
				pipe(
					split('****'),
					filter(identity),
					map((paragraphElement) => {
						const annotationRegex = /^%%%%(\w+)—{4}(.*)$/g;
						const isAnnotationTest = annotationRegex.exec(paragraphElement);
						const isAnnotation = gt(length(isAnnotationTest), 1);

						if (!isAnnotation) return { isAnnotation, content: paragraphElement };

						const [fullString, id, content] = isAnnotationTest;
						return { isAnnotation, id, content, fullString };
					}),
				),
			),
			filter(length),
		)(markupedText);
		return { paragraphs };
	}),
	onlyUpdateForKeys(['hoveredAnnotationId', 'showAnnotations']),
)(DocumentTranscription);
