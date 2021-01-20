import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { FigmaDecorator, ThemeDecorator } from '../.storybook/utils';
import MainHeader from '../components/MainHeader/MainHeader';

const links = [
	{
		id: 'info',
		onClick: action('Über link was clicked!'),
		text: 'Über das Projekt',
		title: 'Mehr informationen über Documentstori.es',
	},
	{
		id: 'legal',
		onClick: action('Impressum link was clicked'),
		text: 'Impressum',
		title: 'Rechtliches',
	},
];

const addMainHeaderStory = () => {
	storiesOf('MainHeader', module)
		.addDecorator(FigmaDecorator('101%3A3057'))
		.addDecorator(ThemeDecorator)
		.add('Default', () => <MainHeader imageUrl="/images/headerImage.png" links={links} />)
		.add('With active link', () => (
			<MainHeader
				imageUrl="/images/headerImage.png"
				links={[links[0], { ...links[1], isActive: true }]}
			/>
		));
};

export default addMainHeaderStory;
