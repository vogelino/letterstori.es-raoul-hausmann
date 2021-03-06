import { addDecorator } from '@storybook/react';
import { GlobalStoryWrapperDecorator } from '../.storybook/utils';
import addActorStory from './Actor';
import addDocumentDetailStory from './DocumentDetail';
import addMainHeaderStory from './MainHeader';
import addToolTipStory from './Tooltip';
import addIconStory from './Icon';
import addTimelineStory from './Timeline';
import addSwitchStory from './Switch';
import addToggleButtonStory from './ToggleButton';
import addStorySelectorStory from './StorySelector';
import addDocumentRouteStory from './DocumentRoute';
import addEventIndicatorStory from './EventIndicator';

addDecorator(GlobalStoryWrapperDecorator);
addActorStory();
addDocumentDetailStory();
addMainHeaderStory();
addToolTipStory();
addIconStory();
addTimelineStory();
addSwitchStory();
addToggleButtonStory();
addStorySelectorStory();
addDocumentRouteStory();
addEventIndicatorStory();
