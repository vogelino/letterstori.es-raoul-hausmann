import React from 'react';
import { storiesOf } from '@storybook/react';
import { FigmaPreview, ThemeDecorator } from '../.storybook/utils';
import Icon from '../components/Icon';

const addIconStory = () => {
	storiesOf('Icon', module)
		.addDecorator(ThemeDecorator)
		.add('default', () => (
			<FigmaPreview nodeId="101%3A3223">
				<Icon type="arrow-left" />
				<Icon type="arrow-right" />
				<Icon type="chevron-left" />
				<Icon type="chevron-right" />
				<Icon type="close" />
				<Icon type="text-align-left" />
				<Icon type="rotate" />
				<Icon type="eye-opened" />
				<Icon type="eye-closed" />
			</FigmaPreview>
		))
		.add('with color', () => (
			<FigmaPreview nodeId="101%3A3223">
				<div style={{ color: '#ED008C' }}>
					<Icon type="arrow-left" />
					<Icon type="arrow-right" />
					<Icon type="chevron-left" />
					<Icon type="chevron-right" />
					<Icon type="close" />
					<Icon type="text-align-left" />
					<Icon type="rotate" />
					<Icon type="eye-opened" />
					<Icon type="eye-closed" />
				</div>
			</FigmaPreview>
		));
};

export default addIconStory;
