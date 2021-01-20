/* global window */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
	add,
	flip,
	pipe,
	min,
	max,
	subtract,
	mergeAll,
	multiply,
	divide,
	prop,
} from 'ramda';
import debounce from 'lodash.debounce';
import TimelineConnections from '../presentational/TimelineConnections';
import {
	createCanvas,
	createColorHitMap,
	drawCanvas,
	percentToValue,
	valueToPercent,
	getStartPoint,
} from '../../lib/canvasDataUtil';
import { RUBY_SIZE } from '../../lib/constants/canvasTimeline.constants';

const constants = {
	rubySize: RUBY_SIZE,
	endPointHeight: 150,
	timelineTopMargin: RUBY_SIZE,
	timelineBottomMargin: 32,
	timelineSideMargin: 32,
};

const getCanvasSize = (windowWidth, windowHeight, start, end) => ({
	viewWidth: windowWidth,
	viewHeight: subtract(windowHeight, 272),
	canvasWidth: multiply(windowWidth, divide(100, subtract(end, start))),
});

class StatefulTimelineConnection extends Component {
	constructor(props) {
		super(props);

		this.colorHitMap = createColorHitMap(props.connections);
		this.drawHitGraph = debounce(this.drawHitGraph.bind(this), 100, {
			leading: false,
			trailing: true,
		});
	}

	componentDidMount() {
		console.log(process.env);
		this.canvasApp = createCanvas(this.canvasNode);
		this.hitGraph = createCanvas(this.hitGraphNode);
		this.canvasApp.scale(window.devicePixelRatio, window.devicePixelRatio);
		this.hitGraph.scale(window.devicePixelRatio, window.devicePixelRatio);
		this.initTimelineInteraction();
		this.shouldRerenderCanvas = true;
		this.updateView();
	}

	shouldComponentUpdate(nextProps) {
		this.shouldRerenderCanvas = this.props !== nextProps;
		return false;
	}

	componentWillUnmount() {
		cancelAnimationFrame(this.rAF);
	}

	onMouseWheel({ deltaX }) {
		const { onChartMove } = this.props;
		const visibleRange = this.getVisibleRange({ deltaX });
		onChartMove({ visibleRange });
	}

	onMouseMove({ clientX, clientY }) {
		const elementID = this.getElementByMousePosition({ clientX, clientY });

		if (!elementID) {
			if (this.props.hoveredDocument.id) {
				this.props.onConnectionMouseLeave({
					id: null,
					xPosition: 0,
				});
			}
			this.canvasNode.style.setProperty('cursor', 'default');
		} else if (this.props.hoveredDocument.id !== elementID) {
			this.canvasNode.style.setProperty('cursor', 'pointer');
			const { x: xPosition } = getStartPoint(
				mergeAll([this.props, this.getCanvasSize(), constants]),
				this.props.connections.find(({ id }) => id === elementID),
			);
			this.props.onConnectionMouseEnter({
				id: elementID,
				xPosition,
			});
		}
	}

	onClick({ clientX, clientY }) {
		const elementID = this.getElementByMousePosition({ clientX, clientY });

		if (!elementID) return;
		this.props.onConnectionClick(elementID);
	}

	getElementByMousePosition({ clientX, clientY }) {
		const { top } = this.canvasNode.getBoundingClientRect();
		const toDeviceRatio = multiply(window.devicePixelRatio);
		const x = toDeviceRatio(clientX);
		const y = pipe(flip(subtract)(top), toDeviceRatio)(clientY);
		const [r, g, b] = this.hitGraph.getImageData(x, y, 1, 1).data;
		const color = `rgb(${r},${g},${b})`;
		return prop(color, this.colorHitMap);
	}

	getVisibleRange({ deltaX }) {
		const { viewWidth, canvasWidth } = this.getCanvasSize();
		const {
			visibleRange: { a: part },
		} = this.props;
		const scrollLeft = add(
			percentToValue({
				part,
				total: canvasWidth,
			}),
			deltaX,
		);

		const scrollLeftWithContraints = min(
			max(0, scrollLeft),
			subtract(canvasWidth, viewWidth),
		);

		return {
			a: valueToPercent({
				value: scrollLeftWithContraints,
				total: canvasWidth,
			}),
			b: valueToPercent({
				value: add(scrollLeftWithContraints, viewWidth),
				total: canvasWidth,
			}),
		};
	}

	getCanvasSize() {
		return getCanvasSize(
			this.props.windowWidth,
			this.props.windowHeight,
			this.props.visibleRange.a,
			this.props.visibleRange.b,
		);
	}

	updateView() {
		if (this.shouldRerenderCanvas) this.drawGraphics();

		this.rAF = requestAnimationFrame(this.updateView.bind(this));
		this.shouldRerenderCanvas = false;
	}

	drawHitGraph() {
		const viewProps = mergeAll([this.props, this.getCanvasSize(), constants]);
		drawCanvas(this.hitGraph, this.props.connections, viewProps, {
			hitGraph: true,
			colorHitMap: this.colorHitMap,
		});
	}

	drawGraphics() {
		const viewProps = mergeAll([
			this.props,
			this.getCanvasSize(),
			constants,
			{
				hoveredElement: this.props.hoveredDocument.id,
			},
		]);
		drawCanvas(this.canvasApp, this.props.connections, viewProps);
		this.drawHitGraph();
	}

	initTimelineInteraction() {
		this.canvasNode.addEventListener('wheel', (e) => this.onMouseWheel(e), {
			passive: true,
		});
	}

	render() {
		const { viewWidth, viewHeight } = this.getCanvasSize();
		return (
			<TimelineConnections
				width={viewWidth}
				height={viewHeight}
				assignCanvasNode={(node) => {
					this.canvasNode = node;
				}}
				assignHitGraphNode={(node) => {
					this.hitGraphNode = node;
				}}
				onMouseMove={(evt) => this.onMouseMove(evt)}
				onClick={(evt) => this.onClick(evt)}
				onMouseLeave={() => {
					if (this.props.hoveredDocument.id) {
						this.props.onConnectionMouseLeave({
							id: null,
							xPosition: 0,
						});
					}
				}}
			/>
		);
	}
}

StatefulTimelineConnection.defaultProps = {
	onChartMove: () => {},
	onConnectionClick: () => {},
	onConnectionMouseEnter: () => {},
	onConnectionMouseLeave: () => {},
	defaultColor: '#CCCCCC',
	defaultHoverColor: '#333333',
	hoverDisabledColor: '#ededed',
	connections: [],
	maxNameWidth: 150,
	endPointWidth: 20,
	endPointTotalAmount: 0,
};

StatefulTimelineConnection.propTypes = {
	connections: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			color: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]),
			startPointXPosition: PropTypes.number.isRequired,
			endPointsIndexes: PropTypes.arrayOf(PropTypes.number).isRequired,
		}),
	),
	visibleRange: PropTypes.shape({
		a: PropTypes.number.isRequired,
		b: PropTypes.number.isRequired,
	}).isRequired,
	defaultColor: PropTypes.string, // eslint-disable-line react/no-unused-prop-types
	defaultHoverColor: PropTypes.string, // eslint-disable-line react/no-unused-prop-types
	hoverDisabledColor: PropTypes.string, // eslint-disable-line react/no-unused-prop-types
	hoveredDocument: PropTypes.shape({
		id: PropTypes.string,
		xPosition: PropTypes.number,
	}).isRequired,
	onChartMove: PropTypes.func,
	onConnectionClick: PropTypes.func,
	onConnectionMouseEnter: PropTypes.func,
	onConnectionMouseLeave: PropTypes.func,
	windowWidth: PropTypes.number.isRequired,
	isOpen: PropTypes.bool.isRequired, // eslint-disable-line react/no-unused-prop-types
	windowHeight: PropTypes.number.isRequired,
	maxNameWidth: PropTypes.number, // eslint-disable-line react/no-unused-prop-types
	endPointWidth: PropTypes.number, // eslint-disable-line react/no-unused-prop-types
	endPointTotalAmount: PropTypes.number, // eslint-disable-line react/no-unused-prop-types
};

export default StatefulTimelineConnection;
