import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ThemeDecorator, FigmaPreview } from '../.storybook/utils';
import { Header } from '../components/DocumentDetail/Header/Header';

const addDocumentDetailStory = () => {
	storiesOf('Document detail view', module)
		.addDecorator(ThemeDecorator)
		.add('Header', () => (
			<FigmaPreview nodeId="326%3A0">
				<Header
					date={new Date()}
					title="Brief von Raoul Hausmann an Elfriede Hausmann."
					location="Jernshof"
					deselectDocument={action('Document was closed')}
					selectDocument={action('Next/Prev document was called')}
				/>
			</FigmaPreview>
		));
};

export default addDocumentDetailStory;
