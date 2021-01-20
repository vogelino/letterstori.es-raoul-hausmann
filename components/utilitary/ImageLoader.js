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

const ImageLoader = ({ component: Component, ...props }) => <Component {...props} />;

ImageLoader.propTypes = {
	src: PropTypes.string.isRequired,
	component: PropTypes.func.isRequired,
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
				setWidth,
				setHeight,
				setLoadedState,
				setErrorState,
			} = this.props;
			this.image = new Image();
			loadImage(src, this.image)
				.then(({ currentTarget }) => {
					if (!this.image || isLoaded || error) return;
					setLoadedState(true);
					setWidth(currentTarget.naturalWidth);
					setHeight(currentTarget.naturalHeight);
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
