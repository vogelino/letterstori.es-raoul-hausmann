import React from 'react';
import { storiesOf } from '@storybook/react';
import { FigmaDecorator, ThemeDecorator } from '../.storybook/utils';
import StorySelectorWithItems from '../components/StorySelector';
import exampleData from '../components/StorySelector/exampleData';

const addStorySelectorStory = () => {
	storiesOf('StorySelector', module)
		.addDecorator(FigmaDecorator('788%3A10779'))
		.addDecorator(ThemeDecorator)
		.add('StorySelector', () => (
			<div style={{ background: '#333', color: '#fff', width: '50%', height: '500px' }}>
				<StorySelectorWithItems storyItemsArr={exampleData} />
			</div>
		));
};

export default addStorySelectorStory;
