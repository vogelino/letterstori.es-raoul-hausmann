import React from 'react';
import PropTypes from 'prop-types';
import {
	DocumentStoryCorrespondentsWrapper,
	CorrespondentWrapper,
	CorrespondentName,
	CorrespondentLifespan,
	CorrespondentInfos,
} from './styles';
import Actor from '../Actor';

const DocumentStoryCorrespondents = ({ correspondents }) => (
	<DocumentStoryCorrespondentsWrapper>
		{correspondents.map((correspondent) => (
			<CorrespondentWrapper key={correspondent.id}>
				<Actor {...correspondent} />
				<CorrespondentInfos>
					<CorrespondentName>
						{correspondent.firstName} {correspondent.lastName}
					</CorrespondentName>
					{correspondent.birthYear &&
						correspondent.deathYear && (
							<CorrespondentLifespan>
								({correspondent.birthYear} — {correspondent.deathYear})
							</CorrespondentLifespan>
						)}
				</CorrespondentInfos>
			</CorrespondentWrapper>
		))}
	</DocumentStoryCorrespondentsWrapper>
);

DocumentStoryCorrespondents.propTypes = {
	correspondents: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			name: PropTypes.string,
			lastName: PropTypes.string,
			firstName: PropTypes.string,
			birthYear: PropTypes.string,
			deathYear: PropTypes.string,
		}),
	).isRequired,
};

export default DocumentStoryCorrespondents;
