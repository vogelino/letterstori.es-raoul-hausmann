import React from 'react';
import PropTypes from 'prop-types';
import Sticky from 'react-stickynode';
import DocumentContents from '../../stateful/DocumentContents';
import DocumentInformationsSidebar from '../../stateful/DocumentInformationsSidebar';
import { Wrapper } from './styles';

const SplitView = (props) => (
	<Wrapper>
		<Sticky top={48} innerZ={3}>
			<DocumentInformationsSidebar {...props} doc={props} />
		</Sticky>
		<DocumentContents {...props} />
	</Wrapper>
);

SplitView.propTypes = {
	id: PropTypes.string,
};

export default SplitView;
