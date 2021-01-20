import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

export const AppLoadingStatus = styled.section`
	width: 100vw;
	height: calc(100vh + 4rem);
	position: absolute;
	top: 0;
	left: 0;
	background: #333333;
	color: white;
	text-align: center;
	z-index: 10;
	transform: translateY(${({ loading }) => (loading ? 0 : '-4rem')});
	opacity: ${({ loading }) => (loading ? 1 : 0)};
	transition: transform 600ms ease-out, opacity 600ms ease-out;
	pointer-events: ${({ loading }) => (loading ? 'all' : 'none')};
	display: flex;
	align-items: center;
	justify-content: center;

	&:before {
		content: 'Dokumente werden geladen';
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -300%);
		font-size: 2rem;
		font-weight: 300;
	}
`;

const rotateInfinite = keyframes`
	0%{
		transform: rotate(-45deg);
	}
	100%{
		transform: rotate(405deg);
	}
`;

export const AppLoadingDimond = styled.span`
	width: 3rem;
	height: 3rem;
	border-radius: 0.5rem;
	border: 1px solid ${({ color }) => color || 'white'};
	transform: rotate(-45deg);
	animation: ${rotateInfinite};
	animation-duration: 4000ms;
	animation-iteration-count: infinite;
	animation-timing-function: linear;
	margin-right: 3rem;

	&:nth-child(2) {
		animation-duration: 2000ms;
	}

	&:last-child {
		margin-right: 0;
		animation-duration: 1500ms;
	}
`;
