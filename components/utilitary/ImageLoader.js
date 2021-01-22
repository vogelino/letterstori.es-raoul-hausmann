import React from 'react';
import PropTypes from 'prop-types';
import { lifecycle, compose, withState } from 'recompose';

const loadImage = (src, img) =>
	new Promise((resolve, reject) => {
		/* eslint-disable no-param-reassign  */
		img.src = src;
		img.onload = resolve;
		img.onerror = reject;
		/* eslint-enable no-param-reassign  */
	});

const ImageLoader = ({ component: Component, ...props }) => (
	<Component {...props} />
);

ImageLoader.propTypes = {
	src: PropTypes.string.isRequired,
	component: PropTypes.func.isRequired,
};

const imagesMemo = new Map();

const DISPLAY_WIDTH = 1024;

const calculateRatio = (initialWidth, initialHeight) => {
	const ratio = initialHeight / initialWidth;
	const newHeight = ratio * DISPLAY_WIDTH;
	return {
		width: DISPLAY_WIDTH,
		height: newHeight,
	};
};

export default compose(
	withState('isLoaded', 'setLoadedState', false),
	withState('error', 'setErrorState', undefined),
	withState('width', 'setWidth', undefined),
	withState('height', 'setHeight', undefined),
	lifecycle({
		componentDidMount() {
			const {
				src,
				isLoaded,
				error,
				documentHeight,
				documentWidth,
				setWidth,
				setHeight,
				setLoadedState,
				setErrorState,
			} = this.props;

			const imageInMemo = imagesMemo.get(src);
			if (imageInMemo) {
				setLoadedState(true);
				setWidth(imageInMemo.width);
				setHeight(imageInMemo.height);
				return;
			}

			if (documentWidth && documentHeight) {
				const { width, height } = calculateRatio(documentWidth, documentHeight);
				setHeight(height);
				setWidth(width);
				setLoadedState(true);
				imagesMemo.set(src, { width, height });
				return;
			}
			this.image = new Image();
			loadImage(src, this.image)
				.then(({ currentTarget }) => {
					if (!this.image || isLoaded || error) return;
					setLoadedState(true);
					const { width, height } = calculateRatio(
						currentTarget.naturalWidth,
						currentTarget.naturalHeight,
					);
					setWidth(width);
					setHeight(height);
					imagesMemo.set(src, { width, height });
				})
				.catch((err) => {
					if (!this.image || isLoaded || error) return;
					setErrorState(err);
					setLoadedState(false);
				});
		},
		componentWillUnmount() {
			this.image = undefined;
		},
	}),
)(ImageLoader);
