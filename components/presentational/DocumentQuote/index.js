import React from 'react';
import PropTypes from 'prop-types';
import { DocumentQuoteContainer } from './styles';

const DocumentQuote = ({ content, color, id, hoverAnnotation, hoveredAnnotationId }) => (
	<DocumentQuoteContainer
		className="annotation"
		storyColor={color}
		isHovered={id === hoveredAnnotationId}
		onMouseEnter={() => hoverAnnotation(id)}
		onMouseLeave={() => hoverAnnotation(null)}
	>
		{content}
	</DocumentQuoteContainer>
);

DocumentQuote.propTypes = {
	content: PropTypes.string.isRequired,
	color: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	hoveredAnnotationId: PropTypes.string,
	hoverAnnotation: PropTypes.func.isRequired,
};

export default DocumentQuote;
