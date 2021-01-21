import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import {
	MetaType,
	MetaList,
	MetaValue,
	StoryContainer,
	DocumentInformationsWrapper,
	StoryMetadata,
	StorySummary,
	StoryDescription,
	StoryContainerShadow,
	ArrowButton,
	StoryTitle,
} from './styles';
import DocumentCorrespondents from '../DocumentCorrespondents';
import DocumentStoryCorrespondents from '../DocumentStoryCorrespondents/index';

const DocumentInformations = ({
	title,
	recipients,
	senders,
	date,
	story,
	type,
	showStoryInformations,
	toggleStoryInformationsVisibility,
}) => (
	<DocumentInformationsWrapper>
		{story && (
			<StoryContainer
				color={story.color}
				onClick={toggleStoryInformationsVisibility}
			>
				{toggleStoryInformationsVisibility && (
					<ArrowButton
						iconActive="chevron-up"
						iconInactive="chevron-down"
						isActive={showStoryInformations}
						onClick={toggleStoryInformationsVisibility}
					/>
				)}
				<MetaType>Story</MetaType>
				{toggleStoryInformationsVisibility ? (
					<StoryTitle>{story.title}</StoryTitle>
				) : (
					<MetaValue>{story.title}</MetaValue>
				)}
				<StoryContainerShadow color={story.color} />
			</StoryContainer>
		)}
		{story && (
			<StoryMetadata isOpen={showStoryInformations}>
				<StorySummary>{story.summary}</StorySummary>
				<StoryDescription>{story.description}</StoryDescription>
				<br />
				<MetaType>Beteiligte</MetaType>
				<DocumentStoryCorrespondents
					correspondents={(story.correspondents || []).map(
						({ id, name, lastName, firstName, birthYear, deathYear }) => ({
							id,
							birthYear,
							deathYear,
							firstName: firstName || name || '',
							lastName: lastName || '',
							imageUrl: `${process.env.NEXT_PUBLIC_IMAGES_SERVER_URL}/entities/${id}.jpg`,
						}),
					)}
				/>
			</StoryMetadata>
		)}
		<DocumentCorrespondents
			storyColor={story && story.color}
			senders={senders}
			recipients={recipients}
		/>
		<MetaList>
			<MetaType>Titel</MetaType>
			<MetaValue>{title}</MetaValue>
			<MetaType>Datum</MetaType>
			<MetaValue>{date && format(date, 'DD. MMMM YYYY')}</MetaValue>
			<MetaType>Typ</MetaType>
			<MetaValue>{type}</MetaValue>
		</MetaList>
	</DocumentInformationsWrapper>
);

DocumentInformations.defaultProps = {
	showStoryInformations: false,
};

DocumentInformations.propTypes = {
	title: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	showStoryInformations: PropTypes.bool,
	toggleStoryInformationsVisibility: PropTypes.func,
	senders: DocumentCorrespondents.propTypes.senders,
	recipients: DocumentCorrespondents.propTypes.recipients,
	story: PropTypes.shape({
		color: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		correspondents: PropTypes.arrayOf(
			PropTypes.shape({
				id: DocumentStoryCorrespondents.propTypes.id,
				name: DocumentStoryCorrespondents.propTypes.name,
				firstName: DocumentStoryCorrespondents.propTypes.firstName,
				lastName: DocumentStoryCorrespondents.propTypes.lastName,
				birthYear: DocumentStoryCorrespondents.propTypes.birthYear,
				deathYear: DocumentStoryCorrespondents.propTypes.deathYear,
			}),
		),
	}),
};

export default DocumentInformations;
