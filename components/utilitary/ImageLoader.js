import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const ImageLoader = ({ src, children }) => {
	const [isLoaded, setIsLoaded] = useState(false);
	const [hasError, setHasError] = useState(false);

	useEffect(() => {
		const image = new Image();
		image.src = src;

		image.onload = () => setIsLoaded(true);
		image.onerror = () => setHasError(true);

		return () => {
			image.onload = null;
			image.onerror = null;
		};
	}, [src]);

	return children({
		isLoaded,
		hasError,
	});
};

ImageLoader.propTypes = {
	src: PropTypes.string.isRequired,
	children: PropTypes.func.isRequired,
};

export default ImageLoader;
