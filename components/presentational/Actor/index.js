import React from 'react';
import PropTypes from 'prop-types';
import ImageLoader from '../../utilitary/ImageLoader';
import ActorWithImage from '../ActorWithImage';
import ActorWithInitials from '../ActorWithInitials';

const Actor = (props) => (
	<ImageLoader
		src={props.imageUrl}
		component={({ isLoaded, error, ...otherProps }) =>
			!isLoaded || error ? (
				<ActorWithInitials {...props} {...otherProps} />
			) : (
				<ActorWithImage
					{...props}
					{...otherProps}
					style={{ backgroundImage: `url(${props.imageUrl})` }}
				/>
			)
		}
	/>
);

Actor.propTypes = {
	firstName: PropTypes.string.isRequired,
	lastName: PropTypes.string.isRequired,
	imageUrl: PropTypes.string,
};

export default Actor;
