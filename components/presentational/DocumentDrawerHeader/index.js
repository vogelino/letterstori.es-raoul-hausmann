import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../Icon';

const HeaderWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1rem;
	border-bottom: 1px solid #eee;
`;

const IconButton = styled.button`
	background: none;
	border: none;
	cursor: pointer;
	padding: 0.5rem;

	&:hover {
		opacity: 0.8;
	}
`;

const DocumentDrawerHeader = ({ isOpen, onToggle }) => (
	<HeaderWrapper>
		<IconButton onClick={onToggle}>
			<Icon name={isOpen ? 'sidebar-opened' : 'sidebar-closed'} />
		</IconButton>
	</HeaderWrapper>
);

DocumentDrawerHeader.propTypes = {
	isOpen: PropTypes.bool,
	onToggle: PropTypes.func,
};

DocumentDrawerHeader.defaultProps = {
	isOpen: false,
	onToggle: () => {},
};

export default DocumentDrawerHeader;
