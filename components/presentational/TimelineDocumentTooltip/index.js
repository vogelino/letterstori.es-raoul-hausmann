import React from 'react';
import PropTypes from 'prop-types';
import { compose, withState, lifecycle } from 'recompose';
import { TimelineDocumentTooltipWrapper } from './styles';
import DocumentInformations from '../DocumentInformations';

const TimelineDocumentTooltip = (props) => (
	<TimelineDocumentTooltipWrapper
		style={{
			opacity: props.isVisible && props.isMounted ? '1' : '0',
			transform: props.isVisible && props.isMounted ? 'rotate(0)' : 'rotate(4deg)',
			left: `${props.x + 10}px`,
		}}
	>
		<DocumentInformations {...props} />
	</TimelineDocumentTooltipWrapper>
);

TimelineDocumentTooltip.defaultProps = {
	isVisible: false,
	x: 0,
	y: 0,
};

TimelineDocumentTooltip.propTypes = {
	isVisible: PropTypes.bool,
	isMounted: PropTypes.bool,
	x: PropTypes.number,
	date: PropTypes.string,
	title: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	senders: DocumentInformations.propTypes.senders,
	recipients: DocumentInformations.propTypes.recipients,
	story: PropTypes.shape({
		title: PropTypes.string.isRequired,
		color: PropTypes.string.isRequired,
	}),
};

export default compose(
	withState('isMounted', 'setMountedState', false),
	lifecycle({
		componentDidMount() {
			this.animationTimeout = setTimeout(() => this.props.setMountedState(true), 200);
		},

		componentWillUnmount() {
			clearTimeout(this.animationTimeout);
		},
	}),
)(TimelineDocumentTooltip);
