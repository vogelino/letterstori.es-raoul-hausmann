import React from 'react';
import PropTypes from 'prop-types';
import { ActorRow, ActorRows, ActorRowText } from './styles';

const TimelineActorsList = ({ actors }) => (
	<ActorRows>
		{actors.map(({ firstName, lastName, name, id }) => (
			<ActorRow key={id}>
				<ActorRowText>
					{`${firstName || name || ''} ${lastName || ''}`.trim()}
				</ActorRowText>
			</ActorRow>
		))}
	</ActorRows>
);

TimelineActorsList.defaultProps = {
	rowHeightRem: 8,
	onIntersectionChange: () => {},
};

TimelineActorsList.propTypes = {
	actors: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			firstName: PropTypes.string,
			lastName: PropTypes.string,
			name: PropTypes.string,
		}),
	),
};

export default TimelineActorsList;
