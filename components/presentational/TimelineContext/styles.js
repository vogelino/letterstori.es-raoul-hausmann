import styled from '@emotion/styled';
import OriginalAxis from '../../presentational/TimelineAxis';
import { createVariableGetter } from '../../../lib/styleUtil';

const getVar = createVariableGetter('timelineContext');

export const ContextContainer = styled.div`
	--yearLabelsColor: ${getVar('yearLabelsColor')};
	--monthLabelsColor: ${getVar('monthLabelsColor')};
	--ticksColor: ${getVar('ticksColor')};

	position: relative;
	width: 100%;
	height: 100%;
	overflow: hidden;
`;

export const ContextInnerWrapper = styled.div`
	position: absolute;
	height: 100%;
`;

export const AxisYears = styled(OriginalAxis)`
	text {
		fill: var(--yearLabelsColor);
		font-weight: bold;
	}
`;

export const AxisMonthsLabels = styled(OriginalAxis)`
	text {
		fill: var(--monthLabelsColor);
	}
`;

export const AxisMonthsTicks = styled(OriginalAxis)`
	line {
		stroke: var(--ticksColor);
		stroke-width: 1;
	}
`;
