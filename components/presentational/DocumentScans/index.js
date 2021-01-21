import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { pipe, propEq, map, filter } from 'ramda';
import { ScansContainer, StoryPolygonContainer, StoryPolygon } from './styles';

const DocumentScans = ({
	isLoaded,
	height,
	width,
	smallUrl,
	largeUrl,
	annotations,
	storyColor,
	hoverAnnotation,
	hoveredAnnotationId,
	showAnnotations,
	pageIndex,
}) => (
	<ScansContainer>
		{annotations && width && height && (
			<>
				<StoryPolygonContainer viewBox={`0 0 ${width} ${height}`}>
					{showAnnotations &&
						map(
							({ id, shapes }) =>
								pipe(
									filter(propEq('pageIndex', pageIndex)),
									map(({ points }) => (
										<StoryPolygon
											storyColor={storyColor}
											strokeLinejoin="round"
											points={points}
											key={points}
											isHovered={id === hoveredAnnotationId}
											vectorEffect="non-scaling-stroke"
											onMouseEnter={() => hoverAnnotation(id)}
											onMouseLeave={() => hoverAnnotation(null)}
										/>
									)),
								)(shapes),
							annotations,
						)}
				</StoryPolygonContainer>
				<Image
					src={largeUrl}
					width={width}
					height={height}
					layout="responsive"
				/>
			</>
		)}
	</ScansContainer>
);

DocumentScans.propTypes = {
	pageIndex: PropTypes.number.isRequired,
	smallUrl: PropTypes.string.isRequired,
	largeUrl: PropTypes.string.isRequired,
	annotations: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			shapes: PropTypes.arrayOf(
				PropTypes.shape({
					points: PropTypes.string.isRequired,
				}),
			),
		}),
	).isRequired,
	storyColor: PropTypes.string,
	hoverAnnotation: PropTypes.func.isRequired,
	showAnnotations: PropTypes.bool.isRequired,
	hoveredAnnotationId: PropTypes.string,
	isLoaded: PropTypes.bool.isRequired,
	width: PropTypes.number,
	height: PropTypes.number,
};

export default DocumentScans;
