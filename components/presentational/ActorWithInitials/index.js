import React from 'react';
import PropTypes from 'prop-types';
import nameInitials from 'name-initials';
import { ActorWrapper } from '../Actor/styles';

const ActorWithInitials = ({ firstName, lastName, name, className, style }) => (
	<ActorWrapper className={className} style={style}>
		{nameInitials(`${firstName} ${lastName} ${name}`.trim())}
	</ActorWrapper>
);

ActorWithInitials.defaultProps = {
	firstName: '',
	lastName: '',
	name: '',
	className: '',
	style: {},
};

ActorWithInitials.propTypes = {
	firstName: PropTypes.string,
	lastName: PropTypes.string,
	name: PropTypes.string,
	className: PropTypes.string,
	style: PropTypes.object,
};

export default ActorWithInitials;
