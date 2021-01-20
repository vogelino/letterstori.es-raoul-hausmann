import React from 'react';
import { storiesOf } from '@storybook/react';
import { FigmaDecorator, ThemeDecorator } from '../.storybook/utils';
import TooltipWithHover, { TooltipNaked } from '../components/presentational/Tooltip';

const addToolTipStory = () => {
	storiesOf('Tooltip', module)
		.addDecorator(FigmaDecorator('101%3A3523'))
		.addDecorator(ThemeDecorator)
		.add('On text', () => (
			<TooltipNaked text="I'm a tooltip" isOpen>
				Tooltip trigger text
			</TooltipNaked>
		))
		.add('On Actor with hover', () => (
			<TooltipWithHover text="I'm a tooltip">Hover me!</TooltipWithHover>
		));
};

export default addToolTipStory;
