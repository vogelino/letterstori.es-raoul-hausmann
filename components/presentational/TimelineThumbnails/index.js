import React from 'react';
import PropTypes from 'prop-types';
import { head, split, pipe, map, filter, identity } from 'ramda';
import TimelineThumbnailSet from '../../stateful/TimelineThumbnailSet';
import { ThumbnailsContainer, ThumbnailsInnerWrapper } from './styles';

const removeFalsyEntries = filter(identity);

const getThumbnailSetId = pipe(head, split('_'), head);

const getDocumentWithFiles = filter((doc) => doc.files.length > 0);

const cleanFiles = map((item) => ({
	...item,
	files: removeFalsyEntries(item.files),
}));

const cleanUpDocuments = pipe(getDocumentWithFiles, cleanFiles);

const TimelineThumbnails = ({ documents, visibleRange: { a, b } }) => (
	<ThumbnailsContainer>
		<ThumbnailsInnerWrapper
			style={{
				width: `${(100 / (b - a)) * 100}%`,
				left: `-${(100 / (b - a)) * a}%`,
			}}
		>
			{cleanUpDocuments(documents).map(({ xPosition, files }) => (
				<TimelineThumbnailSet
					key={getThumbnailSetId(files)}
					files={files}
					x={xPosition}
				/>
			))}
		</ThumbnailsInnerWrapper>
	</ThumbnailsContainer>
);

TimelineThumbnails.propTypes = {
	documents: PropTypes.arrayOf(
		PropTypes.shape({
			files: PropTypes.arrayOf(PropTypes.string).isRequired,
		}),
	).isRequired,
	visibleRange: PropTypes.shape({
		a: PropTypes.number.isRequired,
		b: PropTypes.number.isRequired,
	}).isRequired,
};

export default TimelineThumbnails;
