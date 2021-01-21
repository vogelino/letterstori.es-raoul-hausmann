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
			this.image = new Image();
			loadImage(src, this.image)
				.then(({ currentTarget }) => {
					if (!this.image || isLoaded || error) return;
					setLoadedState(true);
					const width = 1024;
					const ratio =
						currentTarget.naturalHeight / currentTarget.naturalWidth;
					const newHeight = ratio * width;
					setWidth(width);
					setHeight(newHeight);
					imagesMemo.set(src, { width, height: newHeight });
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
