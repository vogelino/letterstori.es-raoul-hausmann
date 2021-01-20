import styled from '@emotion/styled';

const pointSize = 1.75;
const pointMargin = 0.35;
const startWidth = 1.5;

export const Wrapper = styled.div`
	position: relative;
	height: ${pointSize}rem;
	width: ${({ width }) => width}rem;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	font-size: 1.5rem;

	.point {
		transform: rotate(${({ isPersonal }) => (isPersonal ? '45deg' : '0')});
	}

	.content {
		margin-left: ${({ width }) => (width === 'auto' ? pointSize : 0)}rem;
	}

	.start {
		margin-left: ${({ isPersonal }) =>
			isPersonal ? pointSize : pointSize + pointMargin}rem;
		width: ${({ isPersonal }) =>
			isPersonal ? startWidth : startWidth - pointMargin}rem;
	}

	.start,
	.end {
		display: ${({ width }) => (width === 'auto' ? 'none' : 'inline-block')};
	}
`;

export const Point = styled.div`
	position: absolute;
	left: 0;
	top: 0;
	height: 100%;
	width: ${pointSize}rem;
	display: flex;
	align-items: center;

	span {
		position: absolute;

		&:first-child {
			transform: rotate(90deg);
		}
	}
`;

export const Content = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	height: 100%;
`;

export const Line = styled.span`
	height: 2px;
	width: 100%;
	background: #000;
	display: inline-block;
`;

export const Text = styled.span`
	display: inline-block;
	padding: 0 0.5rem;
	/* width: inherit; */
	flex-shrink: 0;
`;
