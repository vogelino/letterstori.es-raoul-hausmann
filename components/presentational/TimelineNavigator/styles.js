import styled from '@emotion/styled';
import OriginalAxis from '../../presentational/TimelineAxis';
import OriginalRangeSelect from '../../presentational/TimelineAxisRangeSelect';
import { createVariableGetter } from '../../../lib/styleUtil';

const getVar = createVariableGetter('timelineNavigator');

export const Wrapper = styled.div`
	--sideRampGradientStart: ${getVar(
		'sideRampGradientStart',
		'rgba(79, 79, 79, 0.1)',
	)};
	--sideRampGradientEnd: ${getVar(
		'sideRampGradientEnd',
		'rgba(79, 79, 79, 0.04)',
	)};
	--linesColor: ${getVar('linesColor', '#bdbdbd')};
	--labelsColor: ${getVar('labelsColor', '#828282')};

	position: relative;
	height: 5rem;
	user-select: none;

	&::before,
	&::after {
		content: '';
		position: absolute;
		z-index: 2;
		top: 0;
		height: 100%;
	}

	&::before {
		left: 0;
		width: ${({ rangeA }) => rangeA}%;
		clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%, 0 0);
		background: linear-gradient(
			270deg,
			var(--sideRampGradientStart) 0%,
			var(--sideRampGradientEnd) 100%
		);
	}

	&::after {
		right: 0;
		width: calc(100% - ${({ rangeB }) => rangeB}%);
		clip-path: polygon(0 0, 100% 0, 100% 100%, 0 80%, 0 0);
		background: linear-gradient(
			-270deg,
			var(--sideRampGradientStart) 0%,
			var(--sideRampGradientEnd) 100%
		);
	}
`;

const AxisWithBasicStyles = styled(OriginalAxis)`
	position: absolute;
	top: 0;

	line {
		stroke: var(--linesColor);
		stroke-width: 1;
	}

	text {
		fill: var(--labelsColor);
	}
`;

export const AxisYears = styled(AxisWithBasicStyles)``;

export const AxisDecades = styled(AxisWithBasicStyles)``;

export const RangeSelect = styled(OriginalRangeSelect)`
	position: absolute;
	top: 0;
`;
