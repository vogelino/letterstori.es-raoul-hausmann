import { transparentize, setLightness } from 'polished';

const colorMap = {};

// BASE COLORS
colorMap.black = '#424242';
colorMap.white = '#FFFFFF';

// GREAY SCALE
colorMap.grey90 = setLightness(0.1, colorMap.black);
colorMap.grey80 = setLightness(0.2, colorMap.black);
colorMap.grey70 = setLightness(0.3, colorMap.black);
colorMap.grey60 = setLightness(0.4, colorMap.black);
colorMap.grey50 = setLightness(0.5, colorMap.black);
colorMap.grey40 = setLightness(0.6, colorMap.black);
colorMap.grey30 = setLightness(0.7, colorMap.black);
colorMap.grey20 = setLightness(0.8, colorMap.black);
colorMap.grey10 = setLightness(0.9, colorMap.black);
colorMap.grey05 = setLightness(0.95, colorMap.black);

const lightLines = colorMap.grey05;
const darkLines = colorMap.grey20;

const defaultBorderRadius = '4px';

export default {
	header: {
		backgroundColor: colorMap.white,
		textColor: colorMap.black,
		borderColor: lightLines,
	},
	documentDetail: {
		backgroundColor: colorMap.grey80,
		textColor: colorMap.grey80,
	},
	actor: {
		backgroundColor: colorMap.grey80,
		textColor: colorMap.white,
		borderRadius: defaultBorderRadius,
	},
	timelineNavigator: {
		sideRampGradientStart: transparentize(0.97, colorMap.black),
		sideRampGradientEnd: transparentize(1, colorMap.black),
		linesColor: darkLines,
		labelsColor: colorMap.grey40,
	},
	timelineRangeSelect: {
		handleColor: colorMap.grey50,
		borderColor: colorMap.grey30,
	},
	timelineContext: {
		yearLabelsColor: colorMap.grey70,
		monthLabelsColor: colorMap.grey40,
		ticksColor: darkLines,
	},
};
