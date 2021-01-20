import React from 'react';
import PropTypes from 'prop-types';
import { WrapperComponent, ActorWrapper, ActorName, Actor } from './styles';
import Tooltip from '../Tooltip';

const ActorWithoutTooltip = ({ id, name, lastName, firstName }) => (
	<Actor
		firstName={name || firstName || '?'}
		lastName={lastName || '?'}
		imageUrl={`${process.env.IMAGES_SERVER_URL}/entities/${id}.jpg`}
	/>
);

ActorWithoutTooltip.propTypes = Actor.propTypes;

const ActorWithTooltip = ({ id, firstName, lastName, name }) => (
	<Tooltip text={`${firstName || ''} ${lastName || ''} ${name || ''}`.trim()}>
		<ActorWithoutTooltip {...{ id, firstName, lastName, name }} />
	</Tooltip>
);

ActorWithTooltip.propTypes = Actor.propTypes;

const SidebarStoryActors = ({ className, storyActorsArr, isSmall, showNames }) => {
	const actors = storyActorsArr.map((actor) => (
		<ActorWrapper key={actor.id} isSmall={isSmall}>
			{showNames && (
				<ActorName>
					{actor.firstName || actor.name} {actor.lastName}
				</ActorName>
			)}
			{showNames ? <ActorWithoutTooltip {...actor} /> : <ActorWithTooltip {...actor} />}
		</ActorWrapper>
	));

	return <WrapperComponent className={className}>{actors}</WrapperComponent>;
};

SidebarStoryActors.defaultProps = {
	className: '',
	showNames: true,
};

SidebarStoryActors.propTypes = {
	className: PropTypes.string,
	storyActorsArr: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			firstName: PropTypes.string,
			lastName: PropTypes.string,
			name: PropTypes.string,
		}),
	).isRequired,
	isSmall: PropTypes.bool.isRequired,
	showNames: PropTypes.bool,
};

export default SidebarStoryActors;
