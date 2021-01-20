import styled from '@emotion/styled';
import OriginalIcon from '../Icon';
import { createVariableGetter } from '../../../lib/styleUtil';

const getVar = createVariableGetter('storySelector');
const cssDefaults = {
	transition: getVar('transitionDefault', '.15s ease-out'),
	textColor: getVar('textColor', 'white'),
	pillColorHover: getVar('pillColorHover', '#ffffff'),
};

export const WrapperComponent = styled.ul`
	color: ${cssDefaults.textColor};
	margin: 0;
	padding: 0;
	display: block;
	border-bottom: 2px solid #4f4f4f;

	&:focus,
	&:hover {
		background: ${({ pillColor }) => pillColor};
	}
`;

export const StorySelectorItem = styled.li`
	display: flex;
	flex-wrap: nowrap;
	flex-direction: column;
	cursor: ${({ interactive }) => (interactive ? 'pointer' : 'default')};
	padding: 2rem;
	font-size: 2rem;
	font-weight: 600;
	background: ${({ storyItemColor }) => storyItemColor};
	transition: ${cssDefaults.transition};

	.item-other {
		transition: ${cssDefaults.transition};
		position: relative;
		padding-right: 1rem;

		&::before {
			content: '';
			position: absolute;
			border-radius: 100%;
			width: 0.75rem;
			height: 0.75rem;
			left: -1.75rem;
			top: 1rem;
			opacity: 0;
			transition: ${cssDefaults.transition};
			background: ${cssDefaults.textColor};
			display: ${({ hasHoverPill }) => (hasHoverPill ? 'block' : 'none')};
		}
	}

	&:hover {
		background: ${({ hoverColor }) => hoverColor};

		.item-title {
			&::before {
				background: ${cssDefaults.pillColorHover};
			}
		}

		.item-other {
			transform: translateX(2rem);

			&::before {
				opacity: 1;
			}
		}
	}
`;

export const StorySelectorItemTitle = styled.span`
	position: relative;
	display: inline-flex;
	flex-wrap: nowrap;
	width: 100%;
	align-items: center;
	height: 6rem;
	margin-top: -2rem;
	margin-bottom: -1rem;
	overflow: hidden;
	padding-left: 1.75rem;
	text-transform: uppercase;
	letter-spacing: 0.1em;
	font-size: 1.25rem;
	font-weight: normal;

	&::before {
		content: '';
		position: absolute;
		border-radius: 100%;
		width: 0.75rem;
		height: 0.75rem;
		left: 0;
		transition: background ${cssDefaults.transition};
		background: ${({ pillColor }) => pillColor};
	}
`;

export const Icon = styled(OriginalIcon)`
	opacity: 0.5;
	transition: ${cssDefaults.transition};
	transform: translateX(-1rem) rotateZ(90deg)
		rotateY(${({ isOpen }) => (isOpen ? 180 : 0)}deg);
`;

export const StorySelectorOtherItemsContainer = styled.div`
	position: relative;
`;

export const StorySelectorOtherItems = styled.div`
	margin: 0;
	padding: 0;
	display: block;
	position: absolute;
	width: 100%;
	transition: all ${cssDefaults.transition};
	opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
	pointer-events: ${({ isOpen }) => (isOpen ? 'auto' : 'none')};
	transform: translateY(${({ isOpen }) => (isOpen ? 0 : '-.5')}rem);
`;
