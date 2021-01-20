import React from 'react';
import { storiesOf } from '@storybook/react';
import { withState, compose, withHandlers } from 'recompose';
import { FigmaDecorator, ThemeDecorator } from '../.storybook/utils';
import ToggleButton from '../components/presentational/ToggleButton';

const ToggleButtonWithState = compose(
	withState('isActive', 'setIsActive', true),
	withHandlers({
		onClick: ({ isActive, setIsActive }) => {
			setIsActive(!isActive);
		},
	}),
)(ToggleButton);

const addToggleButtonStory = () => {
	storiesOf('ToggleButton', module)
		.addDecorator(FigmaDecorator('788%3A10759'))
		.addDecorator(ThemeDecorator)
		.add('ToggleButton', () => (
			<ToggleButtonWithState
				iconActive="eye-opened"
				iconInactive="eye-closed"
				text="Test Button"
			/>
		))
		.add('ToggleButton with Color', () => (
			<div style={{ color: '#ED008C' }}>
				<ToggleButtonWithState
					iconActive="eye-opened"
					iconInactive="eye-closed"
					text="Test Button"
				/>
			</div>
		));
};

export default addToggleButtonStory;
