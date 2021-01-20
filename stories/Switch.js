import React from 'react';
import { storiesOf } from '@storybook/react';
import { FigmaDecorator, ThemeDecorator } from '../.storybook/utils';
import SwitchWithState from '../components/Switch';

const addSwitchStory = () => {
	storiesOf('Switch', module)
		.addDecorator(FigmaDecorator('101%3A3178'))
		.addDecorator(ThemeDecorator)
		.add('Switch', () => (
			<div style={{ background: '#333', color: '#fff' }}>
				<SwitchWithState />
			</div>
		));
};

export default addSwitchStory;
