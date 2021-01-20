import React from 'react';
import { storiesOf } from '@storybook/react';
import { FigmaPreview, ThemeDecorator } from '../.storybook/utils';
import Actor from '../components/Actor';
import ActorWithInitials from '../components/Actor/ActorWithInitials';

const addActorStory = () => {
	storiesOf('Actor', module)
		.addDecorator(ThemeDecorator)
		.add('with initials', () => (
			<FigmaPreview nodeId="101%3A3304">
				<ActorWithInitials firstName="Raoul" lastName="Hausmann" />
			</FigmaPreview>
		))
		.add('with picture', () => (
			<FigmaPreview nodeId="101%3A3295">
				<Actor
					firstName="Raoul"
					lastName="Hausmann"
					imageUrl={`${process.env.IMAGES_SERVER_URL}/entities/raoul-hausmann.jpg`}
				/>
			</FigmaPreview>
		));
};

export default addActorStory;
