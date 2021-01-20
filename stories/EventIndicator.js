import React from 'react';
import { storiesOf } from '@storybook/react';
import { FigmaDecorator, ThemeDecorator } from '../.storybook/utils';
import EventIndicator from '../components/presentational/EventIndicator';

const addEventIndicatorStory = () => {
	storiesOf('Event Indicator', module)
		.addDecorator(FigmaDecorator(''))
		.addDecorator(ThemeDecorator)
		.add('Historical Event Indicator', () => (
			<div>
				<EventIndicator>Die ist ein Event</EventIndicator>
			</div>
		))
		.add('Historical Event Indicator Span ', () => (
			<div>
				<EventIndicator width="32">Die ist ein Event</EventIndicator>
			</div>
		))
		.add('Personal Event Indicator', () => (
			<div>
				<EventIndicator isPersonal>Die ist ein Event</EventIndicator>
			</div>
		))
		.add('Personal Event Indicator Span ', () => (
			<div>
				<EventIndicator isPersonal width="32">
					Die ist ein Event
				</EventIndicator>
			</div>
		));
};

export default addEventIndicatorStory;
