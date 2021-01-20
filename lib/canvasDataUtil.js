import {
	flip,
	multiply,
	divide,
	add,
	pipe,
	subtract,
	map,
	clamp,
	defaultTo,
	equals,
	merge,
	assoc,
	forEach,
	gt,
	lt,
	head,
	both,
	sum,
	reduce,
	keys,
	find,
	complement,
} from 'ramda';

const half = flip(divide)(2);
const double = multiply(2);
const minus1 = flip(subtract)(1);
const round = (num) => (0.5 + num) << 0; // eslint-disable-line no-bitwise

export const percentToValue = ({ part, total }) =>
	multiply(divide(total, 100), part);
export const valueToPercent = ({ value, total }) =>
	divide(multiply(value, 100), total);

export const getStartPoint = (
	{ canvasWidth, visibleRange, timelineTopMargin },
	{ startPointXPosition },
) => {
	const total = canvasWidth;
	const scrollLeft = percentToValue({ part: visibleRange.a, total });
	const x = percentToValue({ part: startPointXPosition, total });

	return {
		x: pipe(flip(subtract)(scrollLeft), round)(x),
		y: timelineTopMargin,
	};
};

const getEndPoints = (
	{
		viewHeight,
		viewWidth,
		timelineTopMargin,
		timelineSideMargin,
		timelineBottomMargin,
		endPointWidth,
	},
	{ endPointsIndexes },
) => {
	const endXPoisiton = subtract(viewHeight, timelineBottomMargin);

	const widthWithoutPadding = subtract(viewWidth, double(timelineSideMargin));

	const visibleEndPointsAmount = pipe(
		flip(divide)(endPointWidth),
		round,
	)(widthWithoutPadding);

	return map(
		(pointIndex) => ({
			x: pipe(
				multiply(clamp(0, minus1(visibleEndPointsAmount), pointIndex)),
				add(half(endPointWidth)),
			)(endPointWidth),
			y: endXPoisiton,
		}),
		endPointsIndexes,
	);
};

const getHitgraphColors = ({ id }, { colorHitMap }) => {
	const uniqueColor = pipe(
		Object.entries,
		find(([color, elementId]) => elementId === id), // eslint-disable-line no-unused-vars
		head,
	)(colorHitMap);

	return { color: uniqueColor, hoverColor: uniqueColor };
};

const getRealColors = ({ defaultColor, defaultHoverColor }, inputItem) => {
	const getColorOrDefault = defaultTo(defaultColor);
	const color = getColorOrDefault(inputItem.color);
	const hoverColor = color === defaultColor ? defaultHoverColor : color;

	return { color, hoverColor };
};

const getColors = (globalData, inputItem, options) => {
	if (options.hitGraph) return getHitgraphColors(inputItem, options);
	return getRealColors(globalData, inputItem);
};

const isElementVisible = (a, b, x) => both(lt(a), gt(b))(x);

const isCurrentlyVisible = ({ a, b }, { startPointXPosition: x }) =>
	isElementVisible(a, b, x);

const clearCanvas = (canvas, viewWidth, viewHeight) => {
	canvas.clearRect(0, 0, viewWidth, viewHeight);
};

const getColor = ({ id, hoverColor, color }, hoveredElement) =>
	id === hoveredElement ? hoverColor : color;

const drawRuby = (
	canvas,
	inputItem,
	{ hoveredElement, rubySize },
	{ hitGraph },
) => {
	const startX = inputItem.startPoint.x;
	const startY = inputItem.startPoint.y;
	const color = getColor(inputItem, hoveredElement);
	const finalRubySize = hitGraph ? rubySize + 2 : rubySize;

	/* eslint-disable no-param-reassign */
	canvas.fillStyle = color;
	canvas.strokeStyle = 'white';
	canvas.lineWidth = 2;
	/* eslint-enable no-param-reassign */

	canvas.beginPath();
	canvas.arc(startX, startY, finalRubySize, 0, Math.PI * 2, true);
	canvas.stroke();
	canvas.fill();
};

const drawConnection = (
	canvas,
	{ startPoint },
	{ rubySize, timelineSideMargin, endPointHeight },
) => (endPoint) => {
	const startX = startPoint.x;
	const startY = Math.ceil(add(startPoint.y, half(rubySize)));
	const endBY = endPoint.y;
	const endX = sum([endPoint.x, timelineSideMargin]);
	const endAY = subtract(endBY, endPointHeight);
	const handlesY = round(half(subtract(endAY, startY)));
	const handleAX = startX;
	const handleBX = endX;

	canvas.moveTo(startX, startY);
	canvas.bezierCurveTo(handleAX, handlesY, handleBX, handlesY, endX, endAY);
	canvas.lineTo(endX, endBY);
};

const drawConnections = (canvas, inputItem, globalData) =>
	map(drawConnection(canvas, inputItem, globalData), inputItem.endPoints);

const drawElement = (canvas, inputItem, globalData, options) => {
	const { hoveredElement, isOpen } = globalData;
	const color = getColor(inputItem, hoveredElement);
	const lineWidth = hoveredElement === inputItem.id ? 1.5 : 1;

	/* eslint-disable no-param-reassign */
	if (hoveredElement && hoveredElement !== inputItem.id) {
		canvas.globalAlpha = 0.3;
	} else {
		canvas.globalAlpha = 1;
	}

	drawRuby(canvas, inputItem, globalData, options);

	if (isOpen) return;

	canvas.strokeStyle = color;
	canvas.lineWidth = options.hitGraph ? 3 : lineWidth;
	/* eslint-enable no-param-reassign */

	canvas.beginPath();
	drawConnections(canvas, inputItem, globalData);
	canvas.stroke();
};

const drawElements = (canvas, globalData, options) => (inputItem) => {
	if (!isCurrentlyVisible(globalData.visibleRange, inputItem)) return;

	const elementData = pipe(
		merge(getColors(globalData, inputItem, options)),
		assoc('startPoint', getStartPoint(globalData, inputItem)),
		assoc('endPoints', getEndPoints(globalData, inputItem)),
		assoc('isHovered', false),
		assoc('id', inputItem.id),
	)({});
	drawElement(canvas, elementData, globalData, options);
};

const getRGBValue = () => Math.round(Math.random() * 255);

const createColor = () =>
	`rgb(${getRGBValue()},${getRGBValue()},${getRGBValue()})`;

const getColorFinder = complement(equals);

function createUniqueColor(previousColors) {
	const color = createColor();
	return find(getColorFinder(color), keys(color))
		? createUniqueColor(previousColors)
		: color;
}

export const createCanvas = (canvasNode) =>
	canvasNode && canvasNode.getContext('2d');

export const drawCanvas = (canvas, inputData, globalData, options = {}) => {
	clearCanvas(canvas, globalData.viewWidth, globalData.viewHeight);
	forEach(drawElements(canvas, globalData, options), inputData);
};

export const createColorHitMap = reduce(
	(colorHitMap, { id }) => ({
		...colorHitMap,
		[createUniqueColor(colorHitMap)]: id,
	}),
	{},
);
