import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { createVariableGetter } from '../../../lib/styleUtil';

const getVar = createVariableGetter('loadingSkeleton');
const loadingLineBackgroundDefault = `linear-gradient(
	to right,
	rgba(200, 200, 200, 0.15) 8%,
	rgba(200, 200, 200, 0.2) 18%,
	rgba(200, 200, 200, 0.15) 33%
)`;

const loadingSkeletonAnimation = keyframes`
	0%{
		background-position: -468px 0
	}
	100%{
		background-position: 468px 0
	}
`;

const skeletonWidth = ({ width }) => width;
const skeletonHeight = ({ height }) => height;

export const WrapperComponent = styled.span`
	width: ${skeletonWidth};
	height: ${skeletonHeight};
	border-radius: 0.5rem;
	background: ${getVar('loadingBarGradient', loadingLineBackgroundDefault)};
	background-size: calc(${skeletonWidth} * 3) 1rem;
	display: inline-block;
	animation-duration: 1.5s;
	animation-fill-mode: forwards;
	animation-iteration-count: infinite;
	animation-name: ${loadingSkeletonAnimation};
	animation-timing-function: linear;
`;
