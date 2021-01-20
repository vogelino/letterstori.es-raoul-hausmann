import React from 'react';
import PropTypes from 'prop-types';
import { ActorWrapper } from '../Actor/styles';

const ActorWithImage = ({ imageUrl, className, style }) => (
	<ActorWrapper className={className} imageUrl={imageUrl} style={style} />
);

ActorWithImage.defaultProps = {
	className: '',
	style: {},
};

ActorWithImage.propTypes = {
	imageUrl: PropTypes.string.isRequired,
	style: PropTypes.object,
	className: PropTypes.string,
};

export default ActorWithImage;
