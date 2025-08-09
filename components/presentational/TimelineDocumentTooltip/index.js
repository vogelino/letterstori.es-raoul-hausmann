import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

const TooltipWrapper = styled.div`
	position: absolute;
	background: white;
	padding: 1rem;
	border-radius: 4px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	z-index: 1000;
	transform: translate(-50%, -100%);
	top: ${({ y }) => y}px;
	left: ${({ x }) => x}px;
`;

const TimelineDocumentTooltip = ({ document = {}, x, y }) => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setIsVisible(true);
		return () => setIsVisible(false);
	}, []);

	if (!isVisible || !document) return null;

	return (
		<TooltipWrapper x={x} y={y}>
			<h3>{document.title || 'Untitled'}</h3>
			<p>{document.date || 'No date'}</p>
		</TooltipWrapper>
	);
};

TimelineDocumentTooltip.propTypes = {
	document: PropTypes.shape({
		title: PropTypes.string,
		date: PropTypes.string,
	}).isRequired,
	x: PropTypes.number.isRequired,
	y: PropTypes.number.isRequired,
};

export default TimelineDocumentTooltip;
