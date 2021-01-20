import React from 'react';
import PropTypes from 'prop-types';
import { DocumentStoryInformationContainer } from './styles';

const DocumentStoryInformation = ({ content }) => (
	<DocumentStoryInformationContainer className="contextInfo">
		{content}
	</DocumentStoryInformationContainer>
);

DocumentStoryInformation.propTypes = {
	content: PropTypes.string.isRequired,
};

export default DocumentStoryInformation;
