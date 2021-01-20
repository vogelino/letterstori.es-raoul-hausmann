import React from 'react';
import styled from '@emotion/styled';
import { storiesOf } from '@storybook/react';
import { FigmaPreview, ThemeDecorator } from '../.storybook/utils';
import Axis from '../components/Timeline/Axis';
import Navigator from '../components/Timeline/Navigator/Navigator';

const AxisWrapper = styled.div`
	> svg {
		line {
			stroke: #000000;
			stroke-width: 1;
		}

		text {
			fill: #000000;
		}
	}
`;

const addTimelineStory = () => {
	storiesOf('Timeline', module)
		.addDecorator(ThemeDecorator)
		.add('Axis with ticks and labels', () => (
			<AxisWrapper>
				<Axis
					width={600}
					from={0}
					to={100}
					tickInterval={10}
					tickSize={5}
					labelSize={12}
					labelMarginTop={5}
					renderTicks
					renderLabels
				/>
			</AxisWrapper>
		))
		.add('Axis with ticks only', () => (
			<AxisWrapper>
				<Axis from={0} to={100} renderLabels={false} />
			</AxisWrapper>
		))
		.add('Axis with labels only', () => (
			<AxisWrapper>
				<Axis from={0} to={100} renderTicks={false} />
			</AxisWrapper>
		))
		.add('Navigator', () => (
			<FigmaPreview nodeId="684%3A7367">
				<Navigator from={1880} to={1970} />
			</FigmaPreview>
		));
};

export default addTimelineStory;
