import React from 'react';
import PropTypes from 'prop-types';
import { ThumbnailSetContainer, Thumbnail } from './styles';

const TimelineThumbnailSet = ({ files, x }) => (
	<ThumbnailSetContainer style={{ left: `${x}%` }}>
		{files.map((file) => <Thumbnail key={file} />)}
	</ThumbnailSetContainer>
);

TimelineThumbnailSet.propTypes = {
	files: PropTypes.arrayOf(PropTypes.string),
	x: PropTypes.number.isRequired,
};

export default TimelineThumbnailSet;
